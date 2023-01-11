import { createApp } from 'vue'
import { pinia } from './stores'
import App from './App.vue'
import './index.css'
import './main.scss'
import router from './router'
import VueKonva from 'vue-konva'

createApp(App).use(pinia).use(VueKonva).use(router).mount('#app')
