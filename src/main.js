import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import Markdown from 'vue3-markdown-it'
import store from '@/store/store'
import components from '@/components/UI'
import {i18n} from "./i18n";

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app
    .use(store)
    .use(router)
    .use(i18n)
    .use(Markdown)
    .mount('#app')
