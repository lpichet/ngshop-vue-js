<script setup>
import { ref } from 'vue'

const count = ref()

fetch('http://localhost:3001/products')
  .then((response) => response.json())
  .then((data) => {
    count.value = data.length
  })
  .catch(() => (count.value = -1))
</script>

<template>
  <div>
    <span data-testid="txt-counter">{{ count }}</span>
    <button data-testid="btn-counter" @click="count++">Increment</button>
  </div>
</template>
