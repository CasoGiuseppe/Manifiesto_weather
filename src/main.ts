import { createApp } from "vue";
import pinia from "@/app/shared/stores/pinia";
import App from "@/app/ui/views/App.vue";
import router from "@/app/router";
import "@/server";
import '@/assets/styles/layout.scss';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
