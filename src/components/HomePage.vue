<script setup>
import { onMounted, computed } from 'vue';
import { useCardsStore } from '../stores/cardsStore';
import CardUi from '@/components/Ui/CardUi.vue';
import LinkUi from '@/components/Ui/LinkUi.vue';

const store = useCardsStore();
const cards = computed(() => store.cards);

onMounted(() => {
  store.syncCardsBetweenTabs();
});
</script>

<template>
  <div>
    <h1 class="title">Главная страница</h1>
    <div class="cards-container">
      <CardUi v-for="card in cards" :key="card.id" :text="card.text" />
    </div>
    <LinkUi link-path="/settings" link-text="Перейти в настройки" />
  </div>
</template>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  gap: 15px;
  margin-top: 24px;
  flex-wrap: wrap;
}
</style>
