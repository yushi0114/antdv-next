<script setup lang="ts">
import { h } from 'vue'

const items = [
  { title: 'Ant Design' },
  { title: h('a', { href: '' }, 'Component') },
  { title: 'Breadcrumb' },
]

const styles = {
  root: { border: '1px solid #f0f0f0', padding: '8px', borderRadius: '4px' },
  item: { color: '#1890ff' },
  separator: { color: 'rgba(0, 0, 0, 0.45)' },
}

// Vue version usually passes styles directly if supported, or via `styles` prop if implemented like in Ant Design 5
// Assuming antdv-next supports `styles` prop for semantic styles as per recent Ant Design.
// If not, this might need adjustment, but the prompt says "match original Ant Design API".

// For function style:
function stylesFn(info: any) {
  const items = info.props.items || []
  if (items.length > 2) {
    return {
      root: { border: '1px solid #F5EFFF', padding: '8px', borderRadius: '4px' },
      item: { color: '#8F87F1' },
    }
  }
  return {}
}
</script>

<template>
  <a-flex vertical gap="middle">
    <a-breadcrumb
      :items="items.slice(0, 2)"
      :styles="styles"
      aria-label="Breadcrumb with Object"
    />
    <a-breadcrumb
      :items="items"
      :styles="stylesFn"
      aria-label="Breadcrumb with Function"
    />
  </a-flex>
</template>
