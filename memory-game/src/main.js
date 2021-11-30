import Vue from 'vue';
import Store from './store';
import App from './App.vue';

new Vue({
  render: h => h(App),
  store: Store,
}).$mount('#app');
