import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Profile from '../components/Profile.vue';
import Canvas from '../components/Canvas.vue';
import Scores from '../components/userScoreList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/game',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/userScoreList',
    name: 'Scores',
    component: Scores
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
