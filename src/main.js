import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://firevue-2b242.firebaseio.com';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')