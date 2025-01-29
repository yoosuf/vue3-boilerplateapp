// src/main.ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ByondDesignSystem from "@ox/byond-design-system";
import '@ox/byond-design-system/dist/style.css' // If styles are included

const app = createApp(App);
const pinia = createPinia();

app.use(ByondDesignSystem);
app.use(pinia);
app.use(router); 

app.mount("#app");
