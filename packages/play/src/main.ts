import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WdElement from 'wd-element'
import '@wd-element/theme/index.css'

createApp(App).use(WdElement).mount('#app')
