import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import axios from 'axios'

axios.defaults.baseURL = 'https://tin-marin-api-five.vercel.app/api/v1'

createApp(App).use(router).use(store).mount('#app')
