<script setup lang="ts">
import { computed, shallowRef } from 'vue'

const color = shallowRef('#1677ff')

const bgColor = computed(() => {
  return typeof color.value === 'string'
    ? color.value
    : color.value?.toHexString?.() ?? '#1677ff'
})
</script>

<template>
  <a-color-picker v-model:value="color">
    <a-button type="primary" :style="{ backgroundColor: bgColor }">
      open
    </a-button>
  </a-color-picker>
</template>
