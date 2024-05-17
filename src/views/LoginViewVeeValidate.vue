<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { schema } from '@/validation/login.js'

const router = useRouter()
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit((values, actions) => {
  if (values.email !== 'laurent.pichet@neosoft.fr' || values.password !== 'password') {
    actions.setFieldError('email', 'Invalid email or password. Please try again.')
    return
  }
  actions.resetForm()
  router.push('/')
})

const [email, emailAttrs] = defineField('email')
const [password, passswordAttrs] = defineField('password')
</script>

<template>
  <div class="styles_formGroupContainer">
    <div class="styles_formGroup">
      <div>
        <h2 class="styles_title">Login</h2>
      </div>
      <form @submit="onSubmit" class="styles_signInForm">
        <div class="styles_inputGroup">
          <fieldset class="styles_fieldSet">
            <label class="sr-only">Email</label>
            <input
              type="text"
              class="styles_input"
              placeholder="Email Address"
              v-model="email"
              v-bind="emailAttrs"
            />
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </fieldset>
          <fieldset class="styles_fieldSet">
            <label class="sr-only">Password</label>
            <input
              type="Password"
              class="styles_input"
              v-model="password"
              v-bind="passswordAttrs"
            />
            <div v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</div>
          </fieldset>
          <div class="styles_linkBox">
            <div class="styles_linkDiv">
              <span
                >Don't have an account? Sign up
                <a class="text-blue-600 hover:underline" href="/signup"> here.</a>
              </span>
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
