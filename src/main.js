import { createApp } from "vue";
import App from "./App.vue";
import store from "./api/store";

createApp(App).use(store).mount("#app");
