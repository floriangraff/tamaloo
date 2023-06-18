<template>
  <div class="round" v-if="players.length > 0">
    <div class="caption-block">Round {{nextRoundId}}</div>
    <div v-for="roundScore in roundScores" class="score-block">
      <input v-model="roundScore.score" class="score-input" placeholder="0" v-on:keyup.enter="addRound" type="number">
    </div>
  </div>
</template>

<script setup lang="ts">

import Round from "@/models/Round";
import RoundScore from "@/models/RoundScore";
import {ref, type Ref, watch} from "vue";
import roundScore from "@/models/RoundScore";

const props = defineProps(["players"]);
const emit = defineEmits<{
  (e: 'addRound', round: Round): void
}>()

function newRoundScores() {
  let roundScores: Array<RoundScore> = [];
  for (let player of props.players) {
    roundScores.push(new RoundScore(nextRoundId, player));
  }
  return roundScores;
}

function watchPlayersChange() {
  watch(props.players, () => {
    roundScores.value = newRoundScores();
  });
}

watchPlayersChange();
let roundScores: Ref<Array<RoundScore>> = ref(newRoundScores());
let nextRoundId = 1;

function addRound() {
  for (let roundScore of roundScores.value) {
    if (Number.isNaN(roundScore.score) || roundScore.score == undefined) {
      roundScore.score = 0;
    }
    console.log(roundScore.score);
    roundScore.player.addRoundScore(roundScore.score);
  }
  let round = new Round(nextRoundId, roundScores.value);
  emit("addRound", round)
  nextRoundId += 1;
  roundScores.value = newRoundScores();
}
</script>

<style scoped>
.round {
  display: flex;
}

.score-input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 25px;
}
</style>