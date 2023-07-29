import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TeamsView from '@/views/TeamsView.vue';
import ResultsView from '@/views/ResultsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamsView
    
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;