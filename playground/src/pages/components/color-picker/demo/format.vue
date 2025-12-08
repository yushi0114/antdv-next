<script setup lang="ts">
import { computed, shallowRef } from 'vue'

type ColorValue = string | {
  toHexString?: () => string
  toHsbString?: () => string
  toRgbString?: () => string
}

type FormatType = 'hex' | 'rgb' | 'hsb' | undefined

const colorHex = shallowRef<ColorValue>('#1677ff')
const formatHex = shallowRef<FormatType>('hex')

const hexString = computed(() => {
  return typeof colorHex.value === 'string' ? colorHex.value : colorHex.value?.toHexString?.() ?? ''
})

const colorHsb = shallowRef<ColorValue>('hsb(215, 91%, 100%)')
const formatHsb = shallowRef<FormatType>('hsb')

const hsbString = computed(() => {
  return typeof colorHsb.value === 'string' ? colorHsb.value : colorHsb.value?.toHsbString?.() ?? ''
})

const colorRgb = shallowRef<ColorValue>('rgb(22, 119, 255)')
const formatRgb = shallowRef<FormatType>('rgb')

const rgbString = computed(() => {
  return typeof colorRgb.value === 'string' ? colorRgb.value : colorRgb.value?.toRgbString?.() ?? ''
})

function handleHexFormatChange(value: FormatType) {
  formatHex.value = value
}

function handleHsbFormatChange(value: FormatType) {
  formatHsb.value = value
}

function handleRgbFormatChange(value: FormatType) {
  formatRgb.value = value
}
</script>

<template>
  <a-space vertical size="middle" style="display: flex">
    <a-space>
      <a-color-picker
        v-model:value="colorHex"
        :format="formatHex"
        @formatChange="handleHexFormatChange"
      />
      <span>HEX: {{ hexString }}</span>
    </a-space>
    <a-space>
      <a-color-picker
        v-model:value="colorHsb"
        :format="formatHsb"
        @formatChange="handleHsbFormatChange"
      />
      <span>HSB: {{ hsbString }}</span>
    </a-space>
    <a-space>
      <a-color-picker
        v-model:value="colorRgb"
        :format="formatRgb"
        @formatChange="handleRgbFormatChange"
      />
      <span>RGB: {{ rgbString }}</span>
    </a-space>
  </a-space>
</template>
