import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';
import Dashboard from './components/Dashboard.vue';

const app = createApp(App);

app.use(router);

// Register your components globally (if needed)
app.component('dashboard', Dashboard);

app.mount('#app');
