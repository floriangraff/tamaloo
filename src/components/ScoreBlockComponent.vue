<template>
  <div class="score-block flex-horizontal-center">
    {{player.score}}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['player'])
</script>

<style scoped>
</style>