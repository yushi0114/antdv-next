<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef('#1677ff')
</script>

<template>
  <a-space>
    <a-color-picker v-model:value="color" />
    <a-color-picker v-model:value="color" />
  </a-space>
</template>
