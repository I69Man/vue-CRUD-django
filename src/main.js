import { createApp } from 'vue'
import axios  from 'axios'
import App    from './App.vue'
import router from './router'
import store  from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

axios.defaults.baseURL = 'http://127.0.0.1:8000';

createApp(App).use(store).use(router).mount('#app')
