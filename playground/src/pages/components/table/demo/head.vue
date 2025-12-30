<docs lang="zh-CN">
排序与筛选。
</docs>

<docs lang="en-US">
Sorting and filtering.
</docs>

<script setup lang="ts">
import type { TableProps } from 'antdv-next'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const columns: TableProps['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          { text: 'Green', value: 'Green' },
          { text: 'Black', value: 'Black' },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(String(value)) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    onFilter: (value, record) => record.address.indexOf(String(value)) === 0,
  },
]

const dataSource: DataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
]

const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :show-sorter-tooltip="{ target: 'sorter-icon' }"
    @change="onChange"
  />
</template>
