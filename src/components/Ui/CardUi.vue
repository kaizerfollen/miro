<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="card">
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  color: #000;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
