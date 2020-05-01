<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- <router-link to="/" class="navbar-brand">Home</router-link> -->
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-brand">Home</router-link>
      </div>

      <div class="navbar-end">
        <template v-if="user.loggedIn">
          <div>{{ user.data.displayName }}</div>
          <div class="navbar-item">
            <a class="nav-link" @click.prevent="signOut">
              <button class="button">Uitloggen</button></a>
          </div>
        </template>
        <template v-else>
          <div class="buttons">
            <div class="navbar-item">
              <router-link to="login" class="nav-link"
                ><button class="button">
                  Inloggen
                </button></router-link
              >
            </div>
            <div class="navbar-item">
              <router-link to="register" class="nav-link">
                <button class="button">
                  <strong>Registreren</strong>
                </button>
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
  },
};
</script>
