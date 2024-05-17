<script setup>
const props = defineProps(['count'])
</script>

<template>
  <div class="styles_cartMenu">
    <a class="styles_cartButton" href="/cart.html">
      <slot />
      <div class="flex flex-col self-center" v-if="props.count > 0">
        <span class="styles_cartCount">{{ props.count }}</span>
      </div>
    </a>
  </div>
</template>
