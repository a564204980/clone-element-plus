import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ClElementPlus from "clone-element-plus";

const app = createApp(App);

app.use(ClElementPlus); // 注册组件库，全局组件注册

app.mount("#app");
