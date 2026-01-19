<script setup lang="ts">
defineProps<{
  id?: string
  modelValue?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

function handleChange(value: number | null) {
  emit('update:modelValue', value)
}

function formatter(val: number | undefined) {
  return `${val}px`
}

function parser(str: string | undefined) {
  return str?.replace('px', '') as unknown as number
}
</script>

<template>
  <a-flex gap="large">
    <a-input-number
      :id="id"
      :value="modelValue"
      style="width: 120px;"
      :min="0"
      :formatter="formatter"
      :parser="parser"
      @change="handleChange"
    />
    <a-slider
      :tooltip="{ open: false }"
      style="width: 128px;"
      :min="0"
      :max="20"
      :value="modelValue"
      @change="handleChange"
    />
  </a-flex>
</template>
