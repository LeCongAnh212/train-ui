import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

import Default from "./layouts/default/index.vue";
import Phone from "./layouts/phone/index.vue";

import store from "./stores";

const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(createPinia());
app.use(router);
app.use(store);

app.component("default-layout", Default);
app.component("phone-layout", Phone);

app.mount("#app");
