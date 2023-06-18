<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-horizontal-center mt-4">
    <RouterLink to="/" class="me-2">Play</RouterLink>
    <RouterLink to="/rules" class="me-2">Rules</RouterLink>
  </div>
  <div class="container mt-5 bg-transparent">
    <h1 class="text-center">TAMALOO</h1>
    <RouterView />
  </div>
</template>

<style scoped>
h1 {
  font-size: 70px;
  background: -webkit-linear-gradient(0deg, #7bdb28, #359da7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
