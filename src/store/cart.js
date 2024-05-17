import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  function addToCart(product) {
    cart.value.push(product)
  }

  return { cart, addToCart }
})
