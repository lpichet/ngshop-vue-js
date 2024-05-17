<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
function handleSubmit() {
  console.log('Form submitted', email.value, password.value)
}
</script>
<template>
  <div class="styles_formGroupContainer">
    <div class="styles_formGroup">
      <div>
        <h2 class="styles_title">Login</h2>
      </div>
      <form autocomplete="off" class="styles_signInForm" @submit.prevent="handleSubmit">
        <div class="styles_inputGroup">
          <div>
            <label class="sr-only">Email</label
            ><input
              type="email"
              class="styles_input"
              placeholder="Email Address"
              required
              v-model="email"
            />
          </div>
          <div>
            <label class="sr-only">Password</label
            ><input
              type="password"
              required
              class="styles_input"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="styles_linkBox">
            <div class="styles_linkDiv">
              <span
                >Don't have an account? Sign up
                <a class="text-blue-600 hover:underline" href="/signup"> here.</a></span
              >
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="styles_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="my-auto h-5 w-6"
                aria1-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path></svg
              >Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
