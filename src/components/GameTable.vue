<template>
  <AddPlayerComponent @add-player="addPlayer" />
  <PlayerNamesComponent v-model:players="players"/>
  <RoundComponent v-for="round in rounds" v-bind:key="round.id" :round="round"/>
</template>

<script setup lang="ts">
import RoundComponent from "@/components/RoundComponent.vue";
import PlayerNamesComponent from "@/components/PlayerNamesComponent.vue";
import AddPlayerComponent from "@/components/AddPlayerComponent.vue";
import {ref} from "vue";

const test = ref(["p1","p2"]);
class Player {
  get totalScore(): number {
  return this.roundScores.reduce((sum, current) => sum + current, 0);
  }
  id: number;
  name: string;
  private _totalScore: number;
  roundScores: Array<number>;

  public addRoundScore(score: number) {
    this.roundScores.push(score);
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this._totalScore = 0;
    this.roundScores = [];
  }

  scoreOfRound(number: number) {
    return this.roundScores[number];
  }
}
class RoundScore {
  score: number;

  constructor(round: number, player: Player) {
    this.score = player.scoreOfRound(round);
  }
}

class Round {
  constructor(id: number, playerScores: Array<RoundScore>) {
    this.id = id;
    this.playerScores = playerScores;
  }
  id: number;
  playerScores: Array<RoundScore>;
}

let players: Array<Player> = ref([]);
let rounds: Array<Round> = [];
rounds.push(new Round(0, []))

function addPlayer(name: string) {
  let id = Math.floor(Math.random() * 100);
  players.value.push(new Player(id, name))
  console.log(name)
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