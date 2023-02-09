<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <h1 class="quiz-header">Country Quiz</h1>
    <RouterView />
  </div>
</template>

<style>
body {
  background-image: url("./assets/background.png");
  background-size: cover;
  font-family: "Poppins", sans-serif;
}
.main {
  display: flex;
  flex-direction: column;
}
.quiz-header {
  color: white;
  margin-bottom: .2em;
  text-transform: uppercase;;
  font-weight: bolder;
}
</style>
