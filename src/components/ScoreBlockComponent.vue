<template>
  <div class="score-block">
    {{player.score}}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['player'])
</script>

<style scoped>
</style>