<template>
  <div class="round">
    <div class="caption-block">
      Round {{round.id}}
    </div>
    <ScoreBlockComponent  v-for="playerScore in round.playerScores" :player="playerScore"/>
  </div>
</template>

<script setup lang="ts">
import ScoreBlockComponent from "@/components/ScoreBlockComponent.vue";
defineProps(['round'])
</script>

<style scoped>
.round {
  display: flex;
}
</style>