import { createApp } from 'vue'
import App from './App.vue'
import loadImage from './plugins/loadImage'
import router from './routes'
import store from './store'

createApp(App)
.use(router)
.use(store)
.use(loadImage)
.mount('#app')