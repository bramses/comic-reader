import Vue from 'vue'
import App from './App.vue'
import { Index, SearchBox, Results } from 'vue-instantsearch';

Vue.component('ais-index', Index);
Vue.component('ais-search-box', SearchBox);
Vue.component('ais-results', Results);


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
