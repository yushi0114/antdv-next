<docs lang="zh-CN">
以下示例显示如何创建可悬停和单击的弹出窗口。
</docs>

<docs lang="en-US">
The following example shows how to create a popover which can be hovered and clicked.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(false)
const hovered = ref(false)

const hide = () => {
  clicked.value = false
  hovered.value = false
}

const handleHoverChange = (value: boolean) => {
  hovered.value = value
  if (value) {
    clicked.value = false
  }
}

const handleClickChange = (value: boolean) => {
  clicked.value = value
  if (value) {
    hovered.value = false
  }
}
</script>

<template>
  <a-popover
    title="Hover title"
    trigger="hover"
    :open="hovered"
    :style="{ width: '500px' }"
    @openChange="handleHoverChange"
  >
    <template #content>
      <div>This is hover content.</div>
    </template>
    <a-popover
      title="Click title"
      trigger="click"
      :open="clicked"
      @openChange="handleClickChange"
    >
      <template #content>
        <div>
          This is click content.
          <a href="" @click.prevent="hide">Close</a>
        </div>
      </template>
      <a-button>Hover and click</a-button>
    </a-popover>
  </a-popover>
</template>
