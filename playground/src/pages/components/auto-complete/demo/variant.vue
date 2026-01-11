<script setup lang="ts">
import { ref } from 'vue'

const options = ref<{ value: string }[]>([])

const mockVal = (str: string, repeat = 1) => ({ value: str.repeat(repeat) })

const getPanelValue = (searchText: string) => (
  searchText
    ? [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    : []
)

const handleSearch = (text: string) => {
  options.value = getPanelValue(text)
}

const handleSelect = (value: string) => {
  console.log('onSelect', value)
}
</script>

<template>
  <a-flex vertical gap="middle">
    <a-auto-complete
      :options="options"
      style="width: 200px"
      placeholder="Outlined"
      :showSearch="{ onSearch: handleSearch }"
      @select="handleSelect"
    />
    <a-auto-complete
      :options="options"
      style="width: 200px"
      placeholder="Filled"
      :showSearch="{ onSearch: handleSearch }"
      @select="handleSelect"
      variant="filled"
    />
    <a-auto-complete
      :options="options"
      style="width: 200px"
      placeholder="Borderless"
      :showSearch="{ onSearch: handleSearch }"
      @select="handleSelect"
      variant="borderless"
    />
    <a-auto-complete
      :options="options"
      style="width: 200px"
      placeholder="Underlined"
      :showSearch="{ onSearch: handleSearch }"
      @select="handleSelect"
      variant="underlined"
    />
  </a-flex>
</template>
