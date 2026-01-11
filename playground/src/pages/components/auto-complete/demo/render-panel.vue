<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const options = [
  { label: 'Jack', value: 'jack' },
  { label: 'Lucy', value: 'lucy' },
  { label: 'Disabled', value: 'disabled' },
  { label: 'Bamboo', value: 'bamboo' },
]
</script>

<template>
  <a-flex vertical align="start" gap="small">
    <a-switch v-model:checked="open" />
    <a-auto-complete
      default-value="lucy"
      style="width: 120px"
      :open="open"
      :options="options"
    />
  </a-flex>
</template>
