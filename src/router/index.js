import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Settings from '../components/SettingsPage.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/settings', component: Settings },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
