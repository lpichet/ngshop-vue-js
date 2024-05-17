<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/cart.js'
import { useProductsStore } from '@/store/products.js'
import ProductCard from '@/components/ProductCard.vue'

const cartStore = useCartStore()
const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)
const { addToCart } = cartStore
const { getProducts, addFav } = productsStore

onMounted(() => {
  console.log('Home view mounted')
  getProducts()
})
</script>

<template>
  <div class="styles_cardGroup">
    <template v-for="product in products" :key="product.id">
      <ProductCard :product="product" :addFav="addFav" :addToCart="addToCart" />
    </template>
  </div>
</template>
