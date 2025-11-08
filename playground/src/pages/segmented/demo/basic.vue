<template>
  <a-segmented :options="['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']" @change="(value) => console.log(value)" />
</template>
