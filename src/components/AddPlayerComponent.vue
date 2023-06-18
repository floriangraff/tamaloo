<template>
  <b>Add Player {{test}}</b><br />
  <input placeholder="Player Name" ref="input" v-model="playerName" v-on:keyup.enter="handleAddPlayer"/>
  <button class="btn btn-primary" v-on:click="handleAddPlayer">+</button>
</template>

<script setup lang="ts">
import {ref} from "vue";
const emit = defineEmits<{
  (e: 'addPlayer', name: String): void
}>()
const playerName = ref("")
const input = ref("input")
function handleAddPlayer() {
  if (playerName.value === "") {
    return
  }
  console.log("adding player", playerName);
  emit("addPlayer", playerName.value)
  playerName.value = ""
  input.value.focus()

}
</script>

<style scoped>

</style>