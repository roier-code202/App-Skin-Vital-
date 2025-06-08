// This file sets up the Vue Router for the application. It defines the routes for navigating between different views, including the Home view.

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddTip from '@/views/AddTip.vue';
import Quiz from '@/views/Quiz.vue';
import Profile from '@/views/Profile.vue';
import Login from '@/views/Login.vue';
import Settings from '@/views/Settings.vue';
import Calendar from '@/views/Calendar.vue';
import Articles from '@/views/Articles.vue';
import Videos from '@/views/Videos.vue';
import SupportChat from '@/views/SupportChat.vue';
import ProductScanner from '@/views/ProductScanner.vue';
import About from '@/views/About.vue';
import Register from '@/views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddTip',
    component: AddTip,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
  },
  {
    path: '/support',
    name: 'SupportChat',
    component: SupportChat,
  },
  {
    path: '/scanner',
    name: 'ProductScanner',
    component: ProductScanner,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard global para rutas privadas
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  // Rutas privadas
  const privatePages = ['/profile'];
  if (privatePages.includes(to.path) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;

