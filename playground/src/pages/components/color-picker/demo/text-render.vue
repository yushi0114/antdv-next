<script setup lang="ts">
import { DownOutlined } from '@antdv-next/icons'
import { ref, shallowRef } from 'vue'

const color = shallowRef('#1677ff')
const customTextColor = shallowRef('#1677ff')
const iconColor = shallowRef('#1677ff')
const open = ref(false)

function handleOpenChange(value: boolean) {
  open.value = value
}
</script>

<template>
  <a-space vertical>
    <a-color-picker v-model:value="color" show-text allow-clear />
    <a-color-picker v-model:value="customTextColor">
      <template #showText="color">
        <span>Custom Text ({{ color?.toHexString?.() }})</span>
      </template>
    </a-color-picker>
    <a-color-picker
      v-model:value="iconColor"
      :open="open"
      @open-change="handleOpenChange"
    >
      <template #showText>
        <DownOutlined :rotate="open ? 180 : 0" style="color: rgba(0, 0, 0, 0.25)" />
      </template>
    </a-color-picker>
  </a-space>
</template>
