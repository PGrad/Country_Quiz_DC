<script setup lang="ts">
  import { computed } from '@vue/reactivity';
  import { ref } from 'vue';
  import { Api } from "../api";

  const letters = ref(["A", "B", "C", "D"])
  const selected_id = ref(-1)
  const props = defineProps({
    q_id: Number
  })

  const emit = defineEmits(["change"])

  emit("change", props.q_id! + 1)

  const questionData = computed(() =>
    Api.getQuestion(props.q_id ?? 0)
  )

  const setSelected = (id: number) => {
    selected_id.value = id;
  }

  const getItemStyle = (id: number) => {
    if (selected_id.value < 0)
        return "hoverable";
    const correct_id = questionData.value.correct_id;
    if (id === correct_id)
        return "correct";
    else if (id === selected_id.value)
        return "wrong";
    else
        return "plain";
  }
</script>

<template>
  <div class="content">
    <img class="img" src="../assets/undraw_adventure_4hum 1.svg" />
    <h1 class="question-header">{{ questionData["question"] }}</h1>
    <ul>
      <li
        v-for="answer in questionData['answers']"
        :class="getItemStyle(answer.id)"
        :key="answer.id"
        @click="setSelected(answer.id)"
      >
        <h3>{{ letters[answer.id] }}</h3>
        <p>{{ answer.text }}</p>
      </li>
    </ul>
    <button @click="nextItem" class="next-button" v-if="selected_id > -1">Next</button>
  </div>
</template>

<style>
  .img {
    display: inline-block;
    width: 10em;
    z-index: 1;
    position: absolute;
    top: -4.5em;
    right: 0em;
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    padding: 4em 2em 1.5em 2em;
    background-color: white;
    width: 27em;
  }
  .question-header {
    font-size: 1.5em;
    font-weight: bolder;
    margin-bottom: 1.5em;
  }
  ul {
    list-style-type: none;
    color: #5c62c1;
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
    padding: 0;
    margin-bottom: 1em;
  }
  li {
    margin-left: 0;
    border-radius: .5em;
    padding: .5em 1em;
    border: solid #5c62c1 .1em;
    font-size: 1em;
    display: flex;
    align-items: center;
    column-gap: 2.5em;
    font-size: 1.2em;
  }
  .correct {
    background-color: green;
    color: white;
  }
  .wrong {
    background-color: red;
    color: white
  }
  .plain {
    /* Nothing. */
  }
  .hoverable:hover {
    background-color: orange;
    color: white;
    border-color: orange;
  }
  .next-button {
    background-color: orange;
    border-radius: 1em;
    border: none;
    float: right;
    width: fit-content;
    padding: 1em 2em;
    color: white;
    align-self: flex-end;
    font-weight: bolder;
  }
</style>
