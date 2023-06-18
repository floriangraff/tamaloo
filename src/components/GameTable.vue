<template>
  <AddPlayerComponent @add-player="addPlayer" />
  <PlayerNamesComponent v-model:players="players"/>
  <RoundComponent v-for="round in rounds" v-bind:key="round.id" :round="round"/>
  <AddRoundComponent :players="players" @add-round="addRound"/>
  <div v-for="round in rounds">test round</div>
</template>

<script setup lang="ts">
import RoundComponent from "@/components/RoundComponent.vue";
import PlayerNamesComponent from "@/components/PlayerNamesComponent.vue";
import AddPlayerComponent from "@/components/AddPlayerComponent.vue";
import {ref} from "vue";
import {type Ref} from "vue";
import Player from "@/models/Player";
import Round from "@/models/Round";
import AddRoundComponent from "@/components/AddRoundComponent.vue";
import RoundScore from "@/models/RoundScore";

let players: Ref<Array<Player>> = ref([]);
let rounds: Ref<Array<Round>> = ref([]);

function getNewRound(players: Array<Player>) {
  let round = new Round(0, []);
  for (let player of players) {
    round.addRoundScore(new RoundScore(0, player));
  }
  return round;
}

rounds.value.push(new Round(0, []))

function addPlayer(name: String): any {
  let id = Math.floor(Math.random() * 100);
  players.value.push(new Player(id, name))
  console.log(name)
}

function addRound(newRound: Round) {
  rounds.value.push(newRound);
  console.log(newRound)
}

</script>

<style>
:root {
  --game-board-score-block-width: 60px;
  --game-board-score-block-height: 60px;
}

.caption-block {
  display: block;
  overflow: hidden;
  width: 100px;
  height: var(--game-board-score-block-height);
  font-size: 20px;
  font-weight: bold;
  vertical-align: center;
  text-align: center;
}
.score-block {
  display: flex;
  align-items: center;
  height: var(--game-board-score-block-height);
  width: var(--game-board-score-block-width);
  text-align: center;
  background-color: #f2f2f2;
  margin: 1px 1px 1px 1px;
}
</style>