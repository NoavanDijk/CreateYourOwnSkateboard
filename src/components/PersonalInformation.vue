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
              <label class="label">Aanhef</label>
              <div class="control">
                <div class="select">
                  <select v-model="gender">
                    <option>Dhr.</option>
                    <option>Mevr.</option>
                  </select>
                </div>
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
                      v-model="firstname"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Tussenvoegsel"
                      v-model="insertion"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Achternaam"
                      v-model="lastname"
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
                  v-model="zipcode"
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
                      v-model="housenumber"
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
                      v-model="addition"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">E-mailadres</label>
              <div class="control input2" :class="{invalid: $v.email.$error}">
                <input
                  class="input"
                  type="email"
                  placeholder="test@gmail.com"
                  @input="$v.email.$touch()"
                  v-model="email"
                />
                <p v-if="!$v.email.email">Vul aub een valide emailadres in</p>
              </div>
            </div>

            <div class="field">
              <label class="label">Kies uw bank</label>
              <div class="control">
                <div class="select">
                  <select v-model="bank">
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
                  placeholder="Rekeningnummer"
                  v-model="accountnumber"
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
                  v-model="pasnumber"
                  min="0"
                />
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <router-link
              :to="{
                name: 'filledinpersonalinfo',
                params: {
                  gender,
                  firstname,
                  insertion,
                  lastname,
                  zipcode,
                  housenumber,
                  addition,
                  email,
                  bank,
                  accountnumber,
                  pasnumber,
                },
              }"
              class="next2"
            >
              <button
                class="button next"
                :disabled="!allFilledIn"
                @click="goToFilledInPersonalInfo"
              >
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
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      gender: "",
      firstname: "",
      insertion: "",
      lastname: "",
      zipcode: "",
      housenumber: 0,
      addition: "",
      email: "",
      bank: "",
      accountnumber: "",
      pasnumber: 0,
    };
  },

  validations: {
    email: {
      required,
      email
    }
  },

  computed: {
    allFilledIn() {
      const inputsAreValid =
        this.firstname.length > 0 &&
        this.lastname.length > 0 &&
        this.zipcode.length > 0 &&
        this.housenumber.length > 0 &&
        this.email.length > 0 &&
        this.bank.length > 0 &&
        this.accountnumber.length > 0 &&
        this.pasnumber.length > 0;

      return inputsAreValid;
    },
  },

  methods: {
    goToFilledInPersonalInfo() {
      this.$store.state.goToFilledInPersonalInfo = true;
    },
  },
};
</script>

<style scoped lang="scss">
.personalinformation {
  background-color: #f4f4f4;
}

.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

a {
  width: 100%;
  border-left: 0.5px solid #ececec;
}

.next {
  width: 100%;
  border: 0;
  background-color: #28a745;
  cursor: pointer;
  height: 56px;
  color: white;
  border-radius: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next2 {
  background-color: #28a745;
}

.next:hover {
  background-color: #218838;
  border-color: #1e7e34;
  color: white;
}

.input2:focus{
  outline: 0;
  border: 0 none transparent;
}

.input2.invalid input {
  border: 1px solid red;
}

*:focus {
    outline: 0;
}

@media (min-width: 320px) and (max-width: 635px) {
  .card {
    margin: 0;
    padding: 0;
  }
}
</style>
