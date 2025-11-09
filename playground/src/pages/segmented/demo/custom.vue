<script setup lang="ts">

</script>

<template>
  <a-segmented
    :options="[
      {
        value: 'user1',
        tooltip: { title: 'hello user1', color: 'gold' },
      },
      {
        value: 'user2',
        tooltip: { title: 'hello user2', color: 'pink' },
      },
      {
        value: 'user3',
        tooltip: { title: 'hello user3', color: 'geekblue' },
      },
    ]"
  >
    <template #labelRender="{ value }">
      <template v-if="value === 'user1'">
        <div style="padding: 4px">
          <!--          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" /> -->
          <img src="https://api.dicebear.com/7.x/miniavs/svg?seed=8">
          <div>User 1</div>
        </div>
      </template>
      <template v-else-if="value === 'user2'">
        <div style="padding: 4px">
          <!--          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" /> -->
          <img src="https://api.dicebear.com/7.x/miniavs/svg?seed=8">
          <div>User 2</div>
        </div>
      </template>
      <template v-else-if="value === 'user3'">
        <div style="padding: 4px">
          <!--          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" /> -->
          <img src="https://api.dicebear.com/7.x/miniavs/svg?seed=8">
          <div>User 3</div>
        </div>
      </template>
    </template>
  </a-segmented>
</template>
