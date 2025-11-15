<script setup lang="ts">
import { message } from 'antdv-next'

const [messageApi, ContextHolder] = message.useMessage()
function success() {
  const close = messageApi.open({
    type: 'loading',
    content: 'Action in progress..',
    duration: 0,
  })
  // Dismiss manually and asynchronously
  setTimeout(close, 2500)
}
</script>

<template>
  <ContextHolder />
  <a-button @click="success">
    Display a loading indicator
  </a-button>
</template>
