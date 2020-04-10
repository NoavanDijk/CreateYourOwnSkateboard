<template>
  <div class="personalinformation">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Betaalformulier
            </p>
          </header>
          <div class="card-content">
            <div class="field">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" v-model="man" />
                  Dhr
                </label>
                <label class="radio">
                  <input type="radio" name="question" v-model="woman" />
                  Mevr
                </label>
              </div>
            </div>

            <label class="label">Naam</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Voornaam"
                      :value="firstname"
                      @input="updateFirstname"
                    />
                  </p>
                  <p>{{ firstname }}</p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Tussenvoegsel"
                      :value="insertion"
                      @input="updateInsertion"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Achternaam"
                      :value="lastname"
                      @input="updateLastname"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Postcode</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="1234AB"
                  :value="zipcode"
                  @input="updateZipcode"
                />
              </div>
            </div>

            <label class="label">Huisnummer</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Nummer"
                      :value="housenumber"
                      @input="updateHousenumber"
                      min="0"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Toevoeging"
                      :value="addition"
                      @input="updateAddition"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">E-mailadres</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="test@gmail.com"
                  :value="email"
                  @input="updateEmail"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Telefoonnummer</label>
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">
                    +31
                  </a>
                </p>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="tel"
                    placeholder="Jouw telefoonnummer"
                    :value="phonenumber"
                    @input="updatePhonenumber"
                  />
                </p>
              </div>
              <p class="help">Vul niet de eerste nul in</p>
            </div>

            <div class="field">
              <label class="label">Kies uw bank</label>
              <div class="control">
                <div class="select">
                  <select :value="bank" @input="updateBank">
                    <option>Selecteer uw bank</option>
                    <option>ABN Amro Bank</option>
                    <option>ASN Bank</option>
                    <option>Bunq</option>
                    <option>ING</option>
                    <option>Knab</option>
                    <option>Rabobank</option>
                    <option>Regio Bank</option>
                    <option>SNS Bank</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Rekeningnummer</label>
              <p class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="Nummer"
                  :value="accountnumber"
                  @input="updateAccountnumber"
                  min="0"
                />
              </p>
            </div>

            <div class="field">
              <label class="label">Pasnummer</label>
              <p class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="Nummer"
                  :value="pasnumber"
                  @input="updatePasnumber"
                  min="0"
                />
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/filledinpersonalinfo">
              <button class="button next">
                Bestel
              </button>
            </router-link>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {
      man: 0,
      woman: 1
    };
  },

  computed: {
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

  methods: {
    updateFirstname(event) {
      this.$store.dispatch("updateFirstname", event.target.value);
    },

    updateInsertion(event) {
      this.$store.dispatch("updateInsertion", event.target.value);
    },

    updateLastname(event) {
      this.$store.dispatch("updateLastname", event.target.value);
    },

    updateZipcode(event) {
      this.$store.dispatch("updateZipcode", event.target.value);
    },

    updateHousenumber(event) {
      this.$store.dispatch("updateHousenumber", event.target.value);
    },

    updateAddition(event) {
      this.$store.dispatch("updateAddition", event.target.value);
    },

    updateEmail(event) {
      this.$store.dispatch("updateEmail", event.target.value);
    },

    updatePhonenumber(event) {
      this.$store.dispatch("updatePhonenumber", event.target.value);
    },

    updateBank(event) {
      this.$store.dispatch("updateBank", event.target.value);
    },

    updateAccountnumber(event) {
      this.$store.dispatch("updateAccountnumber", event.target.value);
    },

    updatePasnumber(event) {
      this.$store.dispatch("updatePasnumber", event.target.value);
    }
  }
};
</script>

<style scoped>
.personalinformation {
  background-color: #f4f4f4;
}

.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

.next {
  width: 100%;
  border: 0;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
