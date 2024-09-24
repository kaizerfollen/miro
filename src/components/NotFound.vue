<script setup>
import LinkUi from '@/components/Ui/LinkUi.vue';

</script>

<template>
  <div class="not-found">
    <h1 class="title">Страница не найдена</h1>
    <img class="img" src="../assets/img/404.webp" alt="404" />
    <LinkUi link-text="Вернуться на главную" />
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  padding: 24px 0;
  height: 100%;
  width: 100%;
  max-height: 500px;
  max-width: 500px;
  border-radius: 8px;
}
</style>
