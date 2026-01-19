<script setup lang="ts">
import type { Color } from 'antdv-next/color-picker'
import { AggregationColor } from 'antdv-next/color-picker/color'
import { computed, ref, watch } from 'vue'
import { PRESET_COLORS } from './color-util'

const props = defineProps<{
  id?: string
  modelValue?: string | Color
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | Color): void
}>()

function generateColor(color: string) {
  return new AggregationColor(color)
}

// Internal state for debounced color picker
const internalValue = ref(props.modelValue)
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})

watch(internalValue, (newValue) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }
  debounceTimeout = setTimeout(() => {
    if (newValue) {
      emit('update:modelValue', newValue)
    }
  }, 200)
})

const matchColors = computed(() => {
  const valueStr = props.modelValue ? generateColor(props.modelValue as string).toRgbString() : ''
  const colors = PRESET_COLORS.map((color) => {
    const colorStr = generateColor(color).toRgbString()
    const active = colorStr === valueStr
    return { color, active, picker: false } as const
  })
  const existActive = colors.some(c => c.active)

  return [
    ...colors,
    {
      color: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
      picker: true,
      active: !existActive,
    },
  ]
})

const inputValue = computed(() => {
  if (typeof props.modelValue === 'string') {
    return props.modelValue
  }
  return props.modelValue?.toHexString?.() || ''
})

function handleInputChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function handleColorClick(color: string) {
  emit('update:modelValue', color)
}

function handleColorPickerChange(value: Color) {
  internalValue.value = value
}
</script>

<template>
  <a-flex gap="large" align="center" wrap>
    <a-input
      :id="id"
      :value="inputValue"
      style="width: 120px;"
      @change="handleInputChange"
    />
    <a-flex gap="middle">
      <template v-for="item in matchColors" :key="item.color">
        <a-color-picker
          v-if="item.picker"
          :value="internalValue"
          :presets="[{ label: 'PresetColors', key: 'PresetColors', colors: PRESET_COLORS as unknown as string[] }]"
          @change="handleColorPickerChange"
        >
          <label
            class="antdv-theme-color-picker-item"
            :class="{ 'antdv-theme-color-picker-item-active': item.active }"
            :style="{ background: item.color }"
          >
            <input
              type="radio"
              name="picker"
              :aria-label="item.color"
              tabindex="-1"
              @click.stop
            >
          </label>
        </a-color-picker>
        <label
          v-else
          class="antdv-theme-color-picker-item"
          :class="{ 'antdv-theme-color-picker-item-active': item.active }"
          :style="{ background: item.color }"
          @click="handleColorClick(item.color)"
        >
          <input
            type="radio"
            name="color"
            :aria-label="item.color"
            tabindex="0"
            @click.stop
          >
        </label>
      </template>
    </a-flex>
  </a-flex>
</template>

<style>
.antdv-theme-color-picker-item {
  width: calc(var(--ant-control-height-lg) / 2);
  height: calc(var(--ant-control-height-lg) / 2);
  border-radius: 100%;
  cursor: pointer;
  transition: all var(--ant-motion-duration-fast);
  display: inline-block;
}

.antdv-theme-color-picker-item > input[type='radio'] {
  width: 0;
  height: 0;
  opacity: 0;
}

.antdv-theme-color-picker-item-active {
  box-shadow:
    0 0 0 1px var(--ant-color-bg-container),
    0 0 0 calc(var(--ant-control-outline-width) * 2 + 1px) var(--ant-color-primary);
}
</style>
