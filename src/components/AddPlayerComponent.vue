<template>
  <div class="flex flex-horizontal-center">
<!--    <div class="caption-block flex flex-horizontal-center"></div>-->
    <input placeholder="Name" ref="input" v-model="playerName" v-on:keyup.enter="handleAddPlayer"/>
    &nbsp;
    <button class="btn btn-primary border-0" v-on:click="handleAddPlayer">Add player</button>
  </div>
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