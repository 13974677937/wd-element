<script setup lang="ts">
  defineOptions({
    name: 'WdButton',
  })
</script>

<template>
  <button style="background-color: blue;color: white;">
    <slot />
  </button>
</template>