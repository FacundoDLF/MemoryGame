import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter)

const Store = new Vuex.Store({
    state: {
      player: '',
      userPass: '',
      score: Number,
      showCard: false,

    },
    mutations: {
      setPlayer(state, value) {
        return state.player = value
      }
    }
  })

export default Store