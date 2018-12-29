<template>
  <div id="app">
    <div class="container-fluid">
      <div id="nav">
        <router-link v-if="isAuthenticated" to="/">Dashboard |</router-link>
        <button class="signout" v-if="isAuthenticated" @click="signout">Signout</button>
        <router-link v-if="!isAuthenticated" to="/signup">Signup |</router-link>
        <router-link v-if="!isAuthenticated" to="/signin">Signin</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    signout() {
      this.$store.dispatch('signout');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.signout{
  background: transparent;
  border: none;
  font:inherit;
  cursor: pointer;
}
</style>
