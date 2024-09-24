<script setup>
import { ref, computed } from 'vue';
import { useCardsStore } from '../stores/cardsStore';

import InputUi from '@/components/Ui/InputUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import LinkUi from '@/components/Ui/LinkUi.vue';

const store = useCardsStore();
const newCardText = ref('');
const editingCardId = ref(null);

const addCard = () => {
  if (newCardText.value.trim()) {
    store.addCard(newCardText.value);
    newCardText.value = '';
  };
};

const deleteCard = (id) => {
  store.deleteCard(id);
};

const startEditing = (id) => {
  editingCardId.value = id;
};

const stopEditing = (id, newText) => {
  if (newText.trim()) {
    store.editCard(id, newText);
    editingCardId.value = null;
  };
};

const cards = computed(() => store.cards);
</script>

<template>
  <div>
    <h1 class="title">Настройки</h1>
    <div class="add-card">
      <InputUi v-model="newCardText" />
      <ButtonUi class="add-card-btn" btn-text="Добавить карточку" @click="addCard(newCardText)" />
    </div>
    <ul class="list">
      <template v-if="cards.length">
        <li v-for="(card, index) in cards" :key="index" class="list-item">
          <div>
            <div v-if="editingCardId === card.id" class="action-card">
              <InputUi v-model="card.text" class="action-card-input" />
              <ButtonUi btn-text="Сохранить" class="action-card-btn" @click="stopEditing(card.id, card.text)" />
            </div>
            <div v-else class="action-card">
              <span class="card-text">Текст карточки: {{ card.text }}</span>
              <div class="btns">
                <ButtonUi btn-text="Редактировать" @click="startEditing(card.id)" />
                <ButtonUi btn-text="Удалить" @click="deleteCard(card.id)" />
              </div>
            </div>
          </div>
        </li>
      </template>
      <template v-else>
        <span>Нет карточек</span>
      </template>
    </ul>
    <LinkUi link-text="Вернуться на главную" />
  </div>
</template>

<style lang="scss" scoped>
.add-card {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  gap: 15px;
  margin-top: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.list {
  margin-top: 24px;
  padding: 24px;
  background-color: darkturquoise;
  border-radius: 8px;
  max-height: 500px;
  overflow-y: scroll;

  .list-item {
    padding: 8px;
    margin-bottom: 12px;
    background-color: skyblue;
    border-radius: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .action-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    .card-text {
      font-size: 18px;
    }

    @media (max-width: 767px) {
      flex-direction: column;

      .action-card-btn {
        width: 100%;
      }
    }
  }

  .action-card-input {
    width: calc(100% - 30px);
  }

  .btns {
    display: flex;
    gap: 15px;

    @media (max-width: 767px) {
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
