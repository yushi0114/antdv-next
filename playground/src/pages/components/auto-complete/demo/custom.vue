<script setup lang="ts">
import { ref } from 'vue'

const options = ref<{ value: string }[]>([])

const handleSearch = (value: string) => {
  options.value = value
    ? [{ value }, { value: value + value }, { value: value + value + value }]
    : []
}

const handleKeyPress = (ev: KeyboardEvent) => {
  console.log('handleKeyPress', ev.key)
}

const handleSelect = (value: string) => {
  console.log('onSelect', value)
}
</script>

<template>
  <a-auto-complete
    :options="options"
    style="width: 220px"
    :showSearch="{ onSearch: handleSearch }"
    @select="handleSelect"
  >
    <a-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </a-auto-complete>
</template>
