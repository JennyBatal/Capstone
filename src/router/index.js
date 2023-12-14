import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Reports from '../components/Reports.vue'; // Uncomment this line if needed
import CreateAccomplishment from '../components/CreateAccomplishment.vue';
import History from '../components/History.vue'; // Uncomment this line if needed
import DrawerMenu from '../components/DrawerMenu.vue';
import CreateItinerary from '../components/CreateItinerary.vue';

const routes = [
  {
    path: '/',
    component: Dashboard, DrawerMenu,
    children: [
      { path: 'reports', component: Reports }, // Uncomment this line if needed
      { path: 'create/accomplishment', component: CreateAccomplishment },
      { path: 'create/itinerary', component: CreateItinerary },
      { path: 'create/drawer', component: DrawerMenu },
      { path: 'history', component: History }, // Uncomment this line if needed
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
