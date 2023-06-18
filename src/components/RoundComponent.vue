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
  border-bottom: 1px solid var(--primary-color);
  display: flex;
}
</style>