import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const category = ref('')

  const addFav = (product) => {
    product.isFavorite = !product.isFavorite
  }

  async function getProducts() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
    const data = await response.json()
    products.value = data
  }

  async function getProductById(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
    const data = await response.json()
    return data
  }

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      if (category.value === '') return true
      return product.category === category.value
    })
  })

  return { category, products: filteredProducts, getProducts, getProductById, addFav }
})
