<template>
  <b>Add Player</b><br />
  <input placeholder="Player Name" ref="input" v-model="playerName" v-on:keyup.enter="handleAddPlayer"/>
  <button class="btn btn-primary" v-on:click="handleAddPlayer">+</button>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {type Ref} from "vue";
import Player from "@/models/Player";
const emit = defineEmits<{
  (e: 'addPlayer', player: Player): void
}>()
const playerName = ref("")
const input: Ref<any> = ref(null)
let nextPlayerId = 0;
function handleAddPlayer() {
  if (playerName.value === "") {
    return
  }
  console.log("adding player", playerName);
  emit("addPlayer", new Player(nextPlayerId, playerName.value))
  nextPlayerId += 1;
  playerName.value = ""
  if (input.value) {
    input.value.focus();
  }

}
</script>

<style scoped>

</style>