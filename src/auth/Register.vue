<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Registreren</p>
      </header>
      <div class="card-content card-content1">
        <div class="content">
          <div v-if="error" class="alert alert-danger">{{ error }}</div>
          <form action="#" @submit.prevent="submit">
            <div class="form-group row">
              <label
                for="name"
                class="col-md-4 col-form-label text-md-right firstname"
                >Voornaam</label
              >

              <div class="col-md-6 firstnameinput">
                <input
                  id="name"
                  type="name"
                  class="form-control input"
                  name="name"
                  value
                  required
                  autofocus
                  v-model="form.name"
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="email"
                class="col-md-4 col-form-label text-md-right email"
                >Email</label
              >

              <div class="col-md-6 emailinput">
                <input
                  id="email"
                  type="email"
                  class="form-control input"
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
                class="col-md-4 col-form-label text-md-right password"
                >Wachtwoord</label
              >

              <div class="col-md-6 passwordinput">
                <input
                  id="password"
                  type="password"
                  class="form-control input"
                  name="password"
                  required
                  v-model="form.password"
                />
              </div>
            </div>

            <footer class="card-footer">
              <p class="card-footer-item register"></p>
              <a class="card-footer-item loginbutton">
                <button type="submit" class="button addbutton">
                  Registreer
                </button>
              </a>
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
        name: "",
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              this.$router.replace({ name: "personalinformation" });
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.input {
  margin-bottom: 1rem;
}

.card {
  width: 50%;
  padding: 0;
}

.addbutton {
  width: 50%;
  border: 0;
  background-color: white;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.loginbutton {
  padding: 0.2rem 0;
  margin: 0;
}

.card-content1 {
  padding: 1rem 0rem 0 0rem;
}

.email,
.password,
.passwordinput,
.emailinput,
.firstname,
.firstnameinput {
  margin: 0 1.5rem;
}

.register {
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
}
</style>
