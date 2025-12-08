<script setup lang="ts">
import { reactive } from 'vue'

const colors = reactive({
  small: '#1677ff',
  middle: '#1677ff',
  large: '#1677ff',
  smallText: '#1677ff',
  middleText: '#1677ff',
  largeText: '#1677ff',
})
</script>

<template>
  <a-space>
    <a-space vertical>
      <a-color-picker v-model:value="colors.small" size="small" />
      <a-color-picker v-model:value="colors.middle" />
      <a-color-picker v-model:value="colors.large" size="large" />
    </a-space>
    <a-space vertical>
      <a-color-picker v-model:value="colors.smallText" size="small" show-text />
      <a-color-picker v-model:value="colors.middleText" show-text />
      <a-color-picker v-model:value="colors.largeText" size="large" show-text />
    </a-space>
  </a-space>
</template>
