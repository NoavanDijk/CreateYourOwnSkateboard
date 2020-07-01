<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Inloggen
        </p>
      </header>
      <div class="card-content card-content1">
        <div class="content">
          <div v-if="error" class="alert alert-danger error">{{ error }}</div>
          <form action="#" @submit.prevent="submit">
            <div class="form-group row">
              <label
                for="email"
                class="col-md-4 col-form-label text-md-right emailname"
                >Email</label
              >

              <div class="col-md-6 email">
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
                class="col-md-4 col-form-label text-md-right passwordname"
                >Password</label
              >

              <div class="col-md-6 password">
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
              <a class="card-footer-item register">
                <router-link to="register" class="registerhere"
                  >Ik heb nog geen account. Registreer <u>hier</u></router-link
                >
              </a>
              <a class="card-footer-item loginbutton">
                <button type="submit" class="button addbutton">Login</button>
              </a>
            </footer>
          </form>
        </div>
      </div>
    </div>

    <div class="card card2">
      <header class="card-header">
        <p class="card-header-title">
          Geen account?
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p>Ga door met bestellen zonder account</p>
        </div>
      </div>
      <br /><br /><br /><br />
      <footer class="card-footer footerNoAccount">
        <a class="card-footer-item"></a>
        <a class="card-footer-item loginbutton">
          <router-link to="personalinformation" class="registerhere">
            Ga verder
          </router-link>
        </a>
      </footer>
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
          this.$router.replace({ name: "personalinformation" });
        })
        .catch((err) => {
          this.error = "Dit wachtwoord klopt niet of het email bestaat niet";
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.card {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1rem;
  padding: 0;
}

.card2 {
  height: 37.5vh;
}

.register {
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
  color: black;
  outline: black;
}

.registerhere {
  color: black;
  outline: black;
}

.input {
  margin-bottom: 1rem;
}

.addbutton {
  width: 50%;
  border: 0;
  background-color: white;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.next {
  padding: 1rem;
  margin: 0;
  color: black;
}

.card-content1 {
  padding: 1rem 0rem 0 0rem;
}

.emailname,
.passwordname {
  margin: 0 1.5rem;
}

.email,
.password {
  margin: 0 1.5rem;
}

.error {
  margin: 0 1.5rem;
  color: red;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.loginbutton {
  padding: 0.2rem 0;
  margin: 0;
}

.footerNoAccount {
  height: 100%;
}
</style>
