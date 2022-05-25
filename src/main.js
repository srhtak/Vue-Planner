import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
