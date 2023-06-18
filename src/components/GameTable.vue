<template>
  <AddPlayerComponent @add-player="addPlayer" />
  <PlayerNamesComponent ref="playerNamesComponent" v-model:players="players"/>
  <RoundComponent v-for="round in rounds" v-bind:key="round.id" :round="round"/>
  <AddRoundComponent :players="players" @add-round="addRound"/>
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

let players: Ref<Array<Player>> = ref([]);
let rounds: Ref<Array<Round>> = ref([]);
const playerNamesComponent = ref(null);
function addPlayer(player: Player): any {
  players.value.push(player);
}

function addRound(newRound: Round) {
  rounds.value.push(newRound);
  // playerNamesComponent.value.updateScores(players.value);
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