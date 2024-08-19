<template>
  <div class="favorite-animal">
    <h2>Question: What is your favorite animal?</h2>
    <input v-model="animal" placeholder="Type your favorite animal" />
    <button @click="showAnswer = !showAnswer">{{ showAnswer ? 'Hide' : 'Show' }} Answer</button>
    <p v-if="showAnswer">Your favorite animal is a {{ animal }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAnswer = ref(false)
const animal = ref('')
</script>

<style scoped>
.favorite-animal {
  text-align: center;
  margin: 20px;
}

.favorite-animal input {
  margin-top: 10px;
  padding: 5px;
  width: 200px;
}

.favorite-animal button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.favorite-animal p {
  margin-top: 10px;
  font-weight: bold;
}
</style>
