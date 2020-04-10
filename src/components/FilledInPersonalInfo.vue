<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Ingevulde gegevens
            </p>
          </header>
          <div class="card-content">
            <p>{{ firstname }}</p>
            <p>{{ insertion }}</p>
            <p>{{ lastname }}</p>
            <p>{{ zipcode }}</p>
            <p>{{ housenumber }}</p>
            <p>{{ addition }}</p>
            <p>{{ email }}</p>
            <p>{{ phonenumber }}</p>
            <p>{{ bank }}</p>
            <p>{{ accountnumber }}</p>
            <p>{{ pasnumber }}</p>
          </div>
          <footer class="card-footer">
            <button class="button next" @click="orderSkateboard">
              Bestel
            </button>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    firstname() {
      return this.$store.getters.firstname;
    },

    insertion() {
      return this.$store.getters.lastname;
    },

    lastname() {
      return this.$store.getters.insertion;
    },

    zipcode() {
      return this.$store.getters.zipcode;
    },

    housenumber() {
      return this.$store.getters.housenumber;
    },

    addition() {
      return this.$store.getters.addition;
    },

    email() {
      return this.$store.getters.email;
    },

    phonenumber() {
      return this.$store.getters.phonenumber;
    },

    bank() {
      return this.$store.getters.bank;
    },

    accountnumber() {
      return this.$store.getters.accountnumber;
    },

    pasnumber() {
      return this.$store.getters.pasnumber;
    }
  },

};
</script>
