import { createApp } from "vue";
import App from "./App.vue";
import Menu from "./components/Menu.vue";
import Dashboard from "./components/Dashboard.vue";
import Vitinerary from "./components/VItinerary.vue";
import Vaccomplishment from "./components/VAccomplishment.vue";
import Vmyrep from "./components/VMyreports.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/Menu", component: Menu },
  { path: "/Dashboard", component: Dashboard },
  { path: "/VItinerary", component: Vitinerary },
  { path: "/VAccomplishment", component: Vaccomplishment },
  { path: "/VMyrep", component: Vmyrep }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active"
});

const app = createApp(App);
app.use(router);
app.mount("#app");
