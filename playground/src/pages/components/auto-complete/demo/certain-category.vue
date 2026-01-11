<script setup lang="ts">
import { UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const renderTitle = (title: string) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    [
      title,
      h(
        'a',
        {
          href: 'https://www.google.com/search?q=antd',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        'more',
      ),
    ],
  )
}

const renderItem = (title: string, count: number) => ({
  value: title,
  label: h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    [
      title,
      h(
        'span',
        {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          },
        },
        [h(UserOutlined), String(count)],
      ),
    ],
  ),
})

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
]
</script>

<template>
  <a-auto-complete
    :classes="{ popup: { root: 'certain-category-search-dropdown' } }"
    :popupMatchSelectWidth="500"
    style="width: 250px"
    :options="options"
  >
    <a-input-search size="large" placeholder="input here" />
  </a-auto-complete>
</template>
