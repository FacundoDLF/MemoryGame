import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter)

const Store = new Vuex.Store({
    state: {
      count: 0,
      userName: '',
      userPass: '',
      score: Number,
      date: Date,

    },
    mutations: {
        setCount(state, value) {
            state.count = value
        }
    }
  })

export default Store