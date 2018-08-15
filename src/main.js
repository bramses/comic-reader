import Vue from 'vue'
import App from './App.vue'
import { Index, SearchBox, Results, NoResults, PoweredBy, Input } from 'vue-instantsearch';

Vue.component('ais-index', Index);
Vue.component('ais-search-box', SearchBox);
Vue.component('ais-results', Results);
Vue.component('ais-no-results', NoResults);
Vue.component('ais-powered-by', PoweredBy);
Vue.component('ais-input', Input);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
