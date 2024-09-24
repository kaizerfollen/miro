<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    class="input"
    placeholder="Введите текст карточки"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
