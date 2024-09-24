<script setup>
import { defineProps } from 'vue';

import ArrowRightIcon from '@/components/icons/ArrowRight.vue';

const props = defineProps({
  linkPath: {
    type: String,
    default: '/',
  },
  linkText: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <div>
    <router-link :to="props.linkPath" class="link">
      {{ props.linkText }}
      <ArrowRightIcon class="icon" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.link {
  margin-top: 24px;
}
</style>
