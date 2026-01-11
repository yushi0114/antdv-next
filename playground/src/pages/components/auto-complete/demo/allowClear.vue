<script setup lang="ts">
import { CloseSquareFilled } from '@antdv-next/icons'
import { h, ref } from 'vue'

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

const clearIcon = h(CloseSquareFilled)
</script>

<template>
  <a-flex vertical gap="middle">
    <a-auto-complete
      :options="options"
      style="width: 200px"
      :showSearch="{ onSearch: handleSearch }"
      placeholder="UnClearable"
      :allowClear="false"
    />
    <a-auto-complete
      :options="options"
      style="width: 200px"
      :showSearch="{ onSearch: handleSearch }"
      placeholder="Customized clear icon"
      :allowClear="{ clearIcon }"
    />
  </a-flex>
</template>
