<template>
  <div class="colorful-text" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <p :style="{ color: isHovered ? 'red' : 'black' }">¡Pasa el cursor sobre este texto!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<style scoped>
.colorful-text {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
