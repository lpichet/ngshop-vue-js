import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
// import LoginViewBase from './views/LoginViewBase.vue'
import LoginViewVeeValidate from './views/LoginViewVeeValidate.vue'
import BadgeButton from './components/BadgeButton.vue'
import ProductView from './views/ProductView.vue'

const routes = [
  { path: '/:category?', name: 'home', component: HomeView },
  { path: '/products/:id', name: 'product', component: ProductView, props: true },
  { path: '/login', name: 'login', component: LoginViewVeeValidate }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.component('BadgeButton', BadgeButton)
app.mount('#app')
