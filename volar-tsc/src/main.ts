import "./assets/main.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(ElementPlus).mount("#app");
