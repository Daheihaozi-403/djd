import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { router } from "./route";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
import { Notify } from "vant";
const app = createApp(App);

app.use(router);
app.use(Vant);
// app.$http = axios;
app.use(VueAxios, axios);
app.use(VueCookies, { expire: "7d" });
app.use(Notify);
app.mount("#app");