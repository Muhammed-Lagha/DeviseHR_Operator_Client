import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MainComponentVue from './components/MainComponent.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("default-layout", MainComponentVue);
app.component("empty-layout", EmptyLayout);

app.mount('#app')
