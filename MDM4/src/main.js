import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark", // Ensures dark mode is enabled
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
// app.use(Toast);
app.mount("#app");