import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next('/signin');
        }
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})