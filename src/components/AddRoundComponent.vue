<template>
  <div class="round">
    <div class="caption-block">
      Add Round
    </div>
    <div v-for="player in players" class="score-block">
      <input class="score-input">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["players"])
</script>

<style scoped>
.round {
  border-bottom: 1px solid var(--primary-color);
  display: flex;
}

.score-input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 25px;
}
</style>