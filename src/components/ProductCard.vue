<script setup>
defineProps({
  product: Object,
  addFav: Function,
  addToCart: Function
})
</script>

<template>
  <div class="styles_card" :title="product.title">
    <div class="styles_cardLink">
      <button
        @click="addFav(product)"
        :class="product.isFavorite ? 'styles_removeFavButton' : 'styles_favButton'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <router-link :to="`/products/${product.id}`">
        <div class="styles_cardHeader">
          <img class="styles_cardImg" :src="product.image" :alt="product.title" />
        </div>
      </router-link>
      <div class="styles_cardBody">
        <div>
          <p class="styles_cardTitle" :title="product.title">
            <span class="styles_brand" :title="product.title">{{ product.title }}</span>
          </p>
        </div>
        <div class="styles_rating" v-if="product.rating" :title="product.rating.rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            :class="product.rating.rate >= 1 ? 'styles_starIcon' : 'styles_emptyStarIcon'"
            v-for="i in 5"
            :key="i"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <p class="text-xs ml-1 font-light mt-0.5">({{ product.rating.count }})</p>
        </div>
        <div>
          <div class="my-auto" :title="'$' + product.price">
            <span class="styles_priceSub">$</span><span class="styles_priceTop">109</span
            ><span class="styles_priceSub">95</span>
          </div>
        </div>
        <div class="styles_addToCart">
          <button class="styles_addToCartButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="styles_shoppingCartIcon"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              ></path>
            </svg>
            <div class="flex flex-col self-center" @click="addToCart(product)">
              <span class="styles_buttonText">Add to Cart</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
