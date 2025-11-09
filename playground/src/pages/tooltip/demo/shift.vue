<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.scrollTop = document.documentElement.clientHeight
  document.documentElement.scrollLeft = document.documentElement.clientWidth
})
</script>

<template>
  <div class="h-300vh w-300vw flex items-center justify-center">
    <a-tooltip title="Thanks for using antd. Have a nice day !" open arrow>
      <a-button type="primary">
        Scroll The Window
      </a-button>
    </a-tooltip>
  </div>
</template>
