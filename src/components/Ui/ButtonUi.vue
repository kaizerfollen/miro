<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  btnText: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <button class="button">
    {{ props.btnText }}
  </button>
</template>
