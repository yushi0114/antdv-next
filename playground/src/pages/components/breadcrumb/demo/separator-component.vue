<script setup lang="ts">
const items = [
  {
    title: 'Location',
  },
  {
    type: 'separator',
    separator: ':',
  },
  {
    href: '',
    title: 'Application Center',
  },
  {
    type: 'separator',
  },
  {
    href: '',
    title: 'Application List',
  },
  {
    type: 'separator',
  },
  {
    title: 'An Application',
  },
]
</script>

<template>
  <a-breadcrumb :items="items" />
</template>
