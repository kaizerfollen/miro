import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';
import { broadcastChange, onBroadcastMessage } from '../services/broadcastService';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorageService';

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: loadFromLocalStorage(),
  }),

  actions: {
    addCard(text) {
      const newCard = {
        id: uuid(),
        text,
      };
      this.cards.push(newCard);
      this.saveCards();
      broadcastChange('add', newCard);
    },

    deleteCard(id) {
      this.cards = this.cards.filter((card) => card.id !== id);
      this.saveCards();
      broadcastChange('delete', { id });
    },

    editCard(id, newText) {
      const card = this.cards.find((card) => card.id === id);
      if (card) {
        card.text = newText;
        this.saveCards();
        broadcastChange('edit', card);
      }
    },

    saveCards() {
      saveToLocalStorage(this.cards);
    },

    syncCardsBetweenTabs() {
      onBroadcastMessage((action, payload) => {
        switch (action) {
          case 'add': {
            if (!this.cards.find((card) => card.id === payload.id)) {
              this.cards.push(payload);
            }
            break;
          }

          case 'delete': {
            this.cards = this.cards.filter((card) => card.id !== payload.id);
            break;
          }

          case 'edit': {
            const card = this.cards.find((card) => card.id === payload.id);
            if (card) {
              card.text = payload.text;
            }
            break;
          }
        }

        this.saveCards();
      });
    },
  },
});
