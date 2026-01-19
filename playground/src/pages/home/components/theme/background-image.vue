<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { COLOR_IMAGES, getClosetColor } from './color-util'

const props = defineProps<{
  colorPrimary?: string
  isLight?: boolean
}>()

const activeColor = computed(() => getClosetColor(props.colorPrimary))

const currentKey = ref<string | null>(activeColor.value)

watch(activeColor, (newColor) => {
  currentKey.value = newColor
})

const entity = computed(() => {
  if (!currentKey.value)
    return null
  return COLOR_IMAGES.find(ent => ent.color === currentKey.value)
})
</script>

<template>
  <Transition name="antdv-theme-background-image-fade" mode="out-in">
    <picture v-if="entity && entity.url" :key="currentKey">
      <source :srcset="entity.webp || undefined" type="image/webp">
      <source :srcset="entity.url" type="image/jpeg">
      <img
        draggable="false"
        class="antdv-theme-background-image"
        :style="{ opacity: isLight ? 1 : 0 }"
        :src="entity.url"
        alt="bg"
      >
    </picture>
  </Transition>
</template>

<style>
.antdv-theme-background-image {
  transition: all var(--ant-motion-duration-slow);
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right top;
}

.antdv-theme-background-image-fade-enter-active,
.antdv-theme-background-image-fade-leave-active {
  transition: opacity 0.5s ease;
}

.antdv-theme-background-image-fade-enter-from,
.antdv-theme-background-image-fade-leave-to {
  opacity: 0;
}
</style>
