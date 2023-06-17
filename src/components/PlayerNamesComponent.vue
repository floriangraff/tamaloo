<template>
  <div class="player-names">
    <div class="caption-block">
      Players
    </div>
    <div v-for="player in players" class="score-block">
      {{player.name}}<br/>{{player.totalScore}}
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps(['players'])
</script>

<style scoped>
.player-names {
  display: flex;
}
</style>