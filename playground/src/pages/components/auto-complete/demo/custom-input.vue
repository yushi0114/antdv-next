<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
]
</script>

<template>
  <a-auto-complete v-model:value="value" :options="options">
    <a-input placeholder="Custom input" />
  </a-auto-complete>
</template>
