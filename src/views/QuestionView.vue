<script setup lang="ts">
  import { ref } from "vue";
  import Question from "../components/Question.vue";
  let q_id = ref(0);
</script>

<template>
  <Question @change="(new_q_id) => q_id = new_q_id" :q_id="q_id" />
</template>