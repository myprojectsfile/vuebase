import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios-auth.js"
import global_axios from "axios"
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuth(store) {
      store.idToken = null;
      store.userId = null;
    }
  },
  actions: {
    signup({
      commit,
      dispatch
    }, authData) {
      axios
        .post("/signupNewUser?key=AIzaSyBH7et2Vji_X2hbxc6yM4mUWMReE2zyHjg", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          /* eslint-disable */
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch('storeUser', authData);
        })
        .catch(error => {
          /* eslint-disable */
          console.log(error);
        });
    },
    signin({
      commit
    }, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyBH7et2Vji_X2hbxc6yM4mUWMReE2zyHjg", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          /* eslint-disable */
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => {
          /* eslint-disable */
          console.log(error);
        });
    },
    signout({
      commit
    }) {
      commit('clearAuth');
      router.replace('/signin');
    },
    storeUser({
      commit,
      state
    }, userData) {
      if (!state.idToken) return;

      global_axios.post('/users.json?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({
      commit,
      state
    }) {
      if (!state.idToken) return;

      global_axios.get('/users.json?auth=' + state.idToken)
        .then(res => {
          console.log(res);
          const users = [];
          const data = res.data;

          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit('storeUser', users[0]);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})