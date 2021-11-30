import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter)

const Store = new Vuex.Store({
    state: {
      userName: '',
      userPass: '',
      score: Number,

    },
    mutations: {
    }
  })

export default Store