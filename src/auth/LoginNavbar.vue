<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Inloggen
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-if="error" class="alert alert-danger">{{ error }}</div>
          <form action="#" @submit.prevent="submit">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right"
                >Email</label
              >

              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  value
                  required
                  autofocus
                  v-model="form.email"
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
                >Password</label
              >

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  required
                  v-model="form.password"
                />
              </div>
            </div>

            <footer class="card-footer">
              <button type="submit" class="btn btn-primary">Login</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.replace({ name: "catalogue" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
