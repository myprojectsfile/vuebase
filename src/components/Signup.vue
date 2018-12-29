<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-3 text-left">
        <div class="card">
          <div class="card-header">Signup form</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="form-control form-control-sm"
                  placeholder="email"
                  aria-describedby="email"
                  v-model="email"
                >
                <small id="email" class="text-muted">Enter your valid email address</small>
              </div>
              <div class="form-group">
                <label for="password">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control form-control-sm"
                  placeholder="password"
                  aria-describedby="password"
                  v-model="password"
                >
                <small id="password" class="text-muted">Enter your desired password</small>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-primary" @click="signup">signup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>