import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

// Store
import { plugin as storePlugin } from './stores'

// Router
import { Router } from './router'

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  // TODO: handle errors with sentry
  console.error(err, info)
}
app.config.performance = true

app
.use(Router)
.use(storePlugin)
.mount('#app')
