<script setup lang="ts">
const options = [
  { value: 'Oak Street' },
  { value: 'Pine Avenue' },
  { value: 'Cedar Lane' },
]

const classes = {
  root: 'auto-complete-demo',
  input: 'auto-complete-demo-input',
  popup: {
    root: 'auto-complete-demo-popup',
  },
}

const styles = {
  placeholder: {
    color: '#fa8c16',
  },
  content: {
    fontWeight: 600,
  },
}
</script>

<template>
  <a-auto-complete
    :options="options"
    :classes="classes"
    :styles="styles"
    rootClass="auto-complete-demo-root"
    placeholder="Custom classes"
  />
</template>

<style>
.auto-complete-demo-root {
  width: 280px;
}

.auto-complete-demo {
  border-radius: 10px;
}

.auto-complete-demo-input {
  color: #722ed1;
}

.auto-complete-demo-popup {
  border: 1px solid #fa8c16;
}
</style>
