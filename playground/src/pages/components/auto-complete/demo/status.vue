<script setup lang="ts">
import { ref } from 'vue'

const options = ref<{ value: string }[]>([])
const anotherOptions = ref<{ value: string }[]>([])

const mockVal = (str: string, repeat = 1) => ({ value: str.repeat(repeat) })

const getPanelValue = (searchText: string) => (
  searchText
    ? [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    : []
)

const handleSearch = (text: string) => {
  options.value = getPanelValue(text)
}

const handleAnotherSearch = (text: string) => {
  anotherOptions.value = getPanelValue(text)
}
</script>

<template>
  <a-space direction="vertical" style="width: 100%">
    <a-auto-complete
      :options="options"
      :showSearch="{ onSearch: handleSearch }"
      status="error"
      style="width: 200px"
    />
    <a-auto-complete
      :options="anotherOptions"
      :showSearch="{ onSearch: handleAnotherSearch }"
      status="warning"
      style="width: 200px"
    />
  </a-space>
</template>
