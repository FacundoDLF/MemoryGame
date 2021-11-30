import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
        setCount(state, value) {
            state.count = value
        }
    //   incrementCount (state) {
    //     state.count += 1
    //   },
    //   resetCount (state, value) {
    //       state.count * 0
    //   },
    }
  })

export default Store