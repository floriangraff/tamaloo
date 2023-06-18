<template>
  <div class="round">
    <div class="caption-block">
      Add Round
    </div>
<!--    <div v-for="player in players" class="score-block">-->
<!--      <input v-model="player.score" class="score-input" v-on:keyup.enter="addRound" type="number">-->
<!--    </div>-->
    <div v-for="roundScore in currentRound.playerScores" class="score-block">
      <input v-model="roundScore.score" class="score-input" v-on:keyup.enter="addRound" type="number">
    </div>
  </div>
</template>

<script setup lang="ts">

import Round from "@/models/Round";
import RoundScore from "@/models/RoundScore";
import {ref, type Ref} from "vue";

const props = defineProps(["players"]);
const emit = defineEmits<{
  (e: 'addRound', round: Round): void
}>()

function newRound() {
  let roundId = Math.floor(Math.random() * 100);
  const roundScores: Array<RoundScore> = [];
  for (let player of props.players) {
    roundScores.push(new RoundScore(roundId, player));
  }
  return ref(new Round(roundId, roundScores));
}

const currentRound: Ref<Round> = newRound();

function addRound() {
  console.log("add round", props.players)
  let roundId = Math.floor(Math.random() * 100);
  let roundScores: Array<RoundScore> = [];
  for (let player of props.players) {
    player.addRoundScore(10);
    roundScores.push(new RoundScore(roundId, player));
    console.log(player.name)
  }
  let newRound = new Round(roundId , roundScores)
  emit("addRound", newRound)
}
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