<template>
  <b>Add Player {{test}}</b><br />
  <input placeholder="Player Name" v-model="playerName"/>
  <button class="btn btn-primary" v-on:click="handleAddPlayer">+</button>
</template>

<script setup lang="ts">
defineProps(["playerName"])
const emit = defineEmits<{
  (e: 'addPlayer', name: String): void
}>()
let playerName = ""
function handleAddPlayer() {
  console.log("adding player", playerName)
  emit("addPlayer", playerName)
}
</script>

<style scoped>

</style>