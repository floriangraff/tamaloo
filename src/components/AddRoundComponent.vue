<template>
  <div class="round">
    <div class="caption-block">
      Add Round
    </div>
<!--    <div v-for="player in players" class="score-block">-->
<!--      <input v-model="player.score" class="score-input" v-on:keyup.enter="addRound" type="number">-->
<!--    </div>-->
    <div v-for="roundScore in roundScores" class="score-block">
      <input v-model="roundScore.score" class="score-input" v-on:keyup.enter="addRound" type="number">
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
  let roundId = Math.floor(Math.random() * 100);
  let roundScores: Array<RoundScore> = [];
  for (let player of props.players) {
    roundScores.push(new RoundScore(roundId, player));
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
  // console.log("add round", props.players)
  // let roundScores: Array<RoundScore> = [];
  // for (let player of props.players) {
  //   player.addRoundScore(10);
  //   roundScores.push(new RoundScore(roundId, player));
  //   console.log(player.name)
  // }
  let round = new Round(nextRoundId, roundScores.value);
  console.log("add round: ", round)
  emit("addRound", round)
  nextRoundId += 1;
  roundScores.value = newRoundScores();
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