<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCartStore } from './store/cart.js'
import { useProductsStore } from './store/products.js'

const route = useRoute()
const cartStore = useCartStore()
const productsStore = useProductsStore()
const { cart } = storeToRefs(cartStore)
const { category } = storeToRefs(productsStore)

watch(() => route.params.category, selectCategory, { immediate: true })
function selectCategory(selectedCategory) {
  category.value = selectedCategory
}
</script>

<template>
  <div class="container mx-auto">
    <nav>
      <div class="max-w-7xl mx-auto pt-4 pb-6 px-4">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2"
              id="headlessui-disclosure-button-2"
              type="button"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="block h-9 w-9"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="styles_logo">
              <a class="styles_link" href="/">
                <div class="styles_logoBox">
                  <h1 class="styles_logoText">NGSHOP</h1>
                </div>
              </a>
            </div>
            <div class="hidden sm:block sm:ml-6"></div>
          </div>
          <div
            class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <div class="ml-3 relative hidden sm:block">
              <div class="justify-content-center mx-auto text-center">
                <div class="styles_menu">
                  <router-link to="/login">
                    <div>
                      <button
                        class="styles_menuButton"
                        id="headlessui-menu-button-1"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="styles_userCircleIcon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <div class="flex flex-col">
                          <div class="text-left"><strong>Login</strong></div>
                          <div>or Sign Up</div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="styles_chevronDownIcon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="ml-3 relative">
              <div class="justify-content-center mx-auto text-center">
                <BadgeButton :count="cart?.length">
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="styles_cartIcon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="styles_cartIcon"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="8" cy="10" r="1" />
                    <circle cx="16" cy="10" r="1" />
                    <path d="M8 16s1.5 2 4 2 4-2 4-2" />
                  </svg>
                </BadgeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="bg-zinc-900/10 mx-auto h-[1.1px] shadow-sm shadow-zinc-900/10 px-12"></div>
    <nav class="styles_categoryNav">
      <div>
        <router-link class="styles_categoryLink" to="/">
          <h1 class="truncate">All</h1>
        </router-link>
      </div>
      <div>
        <router-link class="styles_categoryLink" to="/electronics">
          <h1 class="truncate">Electronics</h1>
        </router-link>
      </div>
      <div>
        <router-link class="styles_categoryLink" to="/jewelery">
          <h1 class="truncate">Jewelery</h1>
        </router-link>
      </div>
      <div>
        <router-link class="styles_categoryLink" to="/men's clothing">
          <h1 class="truncate">Men's Clothing</h1>
        </router-link>
      </div>
      <div>
        <router-link class="styles_categoryLink" to="/women's clothing">
          <h1 class="truncate">Women's Clothing</h1>
        </router-link>
      </div>
    </nav>
    <div class="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>
    <div class="container mx-auto">
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </div>
</template>

<style scoped></style>
