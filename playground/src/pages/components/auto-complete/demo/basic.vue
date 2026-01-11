<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = ref<{ value: string }[]>([])

const handleSearch = (text: string) => {
  options.value = text
    ? [
        { value: `${text}@gmail.com` },
        { value: `${text}@outlook.com` },
        { value: `${text}@yahoo.com` },
      ]
    : []
}
</script>

<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    placeholder="Email"
    style="width: 280px"
    @search="handleSearch"
  />
</template>
