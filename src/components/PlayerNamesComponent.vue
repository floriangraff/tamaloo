<template>
  <div class="player-names">
    <div class="caption-block player-name-block flex flex-horizontal-center"></div>
    <div v-for="player in players" class="score-block flex-horizontal-center">
      <p class="special-text">{{player.name}} ({{player.totalScore}})</p>
    </div>
  </div>

</template>

<script setup lang="ts">

import Player from "@/models/Player";

let props = defineProps(['players']);

function updateScores(players: Array<Player>) {
  console.log("update scores")
  for (let player of players) {
    console.log(player)
  }
}
defineExpose({updateScores})
</script>

<style scoped>
.player-names {
  display: flex;
}
</style>