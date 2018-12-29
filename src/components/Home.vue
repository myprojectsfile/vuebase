<template>
  <div>
    <button class="btn btn-sm btn-success">home</button>
    <p>your email is: {{email?email:'you are not logged in'}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    email() {
      const user = this.$store.getters.user;
      if (user) return user.email;
      else return "your are not logged in";
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>