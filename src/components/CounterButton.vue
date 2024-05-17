<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialCount: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['count'])
const count = ref(props.initialCount)

function increment() {
  count.value++
  emit('count', count.value)
}
</script>

<template>
  <div>
    <span data-testid="txt-counter">{{ count }}</span>
    <button data-testid="btn-counter" @click="increment">Increment</button>
  </div>
</template>
