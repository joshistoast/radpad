import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Store
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Router
import { Router } from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app
.use(Router)
.use(pinia)
.mount('#app')
