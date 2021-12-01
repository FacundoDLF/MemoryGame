import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Scores from '../views/Scores.vue';
import Game from '../views/Game';


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
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/Scores',
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
