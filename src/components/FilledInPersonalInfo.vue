<template>
  <div class="filledinpersonalinfo">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title titel">
              Ingevulde gegevens
            </p>
          </header>
          <div class="card-content">
            <label class="label">Gender</label>
            <p>{{ gender }} {{ gender2 }}</p>
            <label class="label">Naam</label>
            <p>{{ firstname }} {{ insertion }} {{ lastname }}</p>
            <label class="label">Postcode</label>
            <p> {{ zipcode }}</p>
            <label class="label">E-mailadres</label>
            <p>{{ email }}</p>
            <label class="label">Bank</label>
            <p>{{ bank }}</p>
            <label class="label">Rekeningnummer</label>
            <p>{{ accountnumber }}</p>
            <label class="label">Pasnummer</label>
            <p>{{ pasnumber }}</p>
          </div>
          <footer class="card-footer">
            <button class="button next">
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
    gender(){
      return this.$store.getters.gender;
    },

    gender2(){
      return this.$store.getters.gender2;
    },

    firstname() {
      return this.$store.getters.firstname;
    },

    insertion() {
      return this.$store.getters.insertion;
    },

    lastname() {
      return this.$store.getters.lastname;
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

<style scoped>
.filledinpersonalinfo{
  height: 101.5vh;
}

.card {
  margin: 4em 0 1.3em 0;
  padding: 0;
}

.label:not(:last-child){
  margin-bottom: 0;
}

p{
  margin: 0 0 1em 0;
}

.titel{
  margin: 0;
}
</style>
