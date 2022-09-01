import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { router } from './route'
import Vant from 'vant';
import 'vant/lib/index.css'
const app = createApp(App)

app.use(router)
app.use(Vant)
app.mount('#app')