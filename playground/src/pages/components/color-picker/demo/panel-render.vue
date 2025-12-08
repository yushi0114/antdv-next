<script setup lang="ts">
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors'
import { theme } from 'antdv-next'
import { computed, h, shallowRef } from 'vue'

const { useToken } = theme
const { token } = useToken()

const color = shallowRef('#1677ff')
const layoutColor = shallowRef(token.value.colorPrimary)

function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map(([label, colors]) => ({
    label,
    colors,
    key: label,
  }))
}

const presets = computed<any[]>(() => genPresets({
  primary: generate(token.value.colorPrimary),
  red,
  green,
  cyan,
}))

function renderWithTitle(panel: any) {
  return h('div', { class: 'custom-panel' }, [
    h('div', {
      style: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.88)',
        lineHeight: '20px',
        marginBottom: 8,
      },
    }, 'Color Picker'),
    panel,
  ])
}

function horizontalPanelRender(_: any, { components }: any) {
  const { Picker, Presets } = components
  return h(
    'a-row',
    { justify: 'space-between', wrap: false },
    {
      default: () => [
        h('a-col', { span: 12 }, { default: () => [h(Presets)] }),
        h('a-divider', { type: 'vertical', style: { height: 'auto' } }),
        h('a-col', { flex: 'auto' }, { default: () => [h(Picker)] }),
      ],
    },
  )
}
</script>

<template>
  <a-space vertical>
    <a-space>
      <span>Add title:</span>
      <a-color-picker v-model:value="color" :panel-render="renderWithTitle" />
    </a-space>
    <a-space>
      <span>Horizontal layout:</span>
      <a-color-picker
        v-model:value="layoutColor"
        :styles="{ popupOverlayInner: { width: 480 } }"
        :presets="presets"
        :panel-render="horizontalPanelRender"
      />
    </a-space>
  </a-space>
</template>

<style>
.custom-panel {
  width: 100%;
}
</style>
