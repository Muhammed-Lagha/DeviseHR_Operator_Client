import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { plugin, defaultConfig } from '@formkit/vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MainComponentVue from './components/MainComponent.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)

app.use(plugin, defaultConfig)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.component("default-layout", MainComponentVue);
app.component("empty-layout", EmptyLayout);

app.mount('#app')
