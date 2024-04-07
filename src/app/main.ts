import '@/app/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import RouterManagement from './providers/RouterManagement';
import { useUser } from '@entities/user/model/useUser';

const app = createApp(App);

app.use(createPinia());

const router = new RouterManagement(useUser);

app.use(router.routerInstance);

app.mount('#app');
