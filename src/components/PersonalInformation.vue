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
                  <input type="radio" name="question" v-model="woman"/>
                  Mevr
                </label>
              </div>
            </div>

            <label class="label">Naam</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Voornaam" v-model="firstname"/>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Tussenvoegsel" v-model="insertion"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Achternaam" v-model="lastname" />
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Postcode</label>
              <div class="control">
                <input class="input" type="text" placeholder="1234AB" v-model="zipcode" />
              </div>
            </div>

            <label class="label">Huisnummer</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="number" placeholder="Nummer" v-model="housenumber" />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Toevoeging" v-model="addition" />
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
                  placeholder="test@gmail.com" v-model="email"
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
                    placeholder="Jouw telefoonnummer" v-model="phonenumber"
                  />
                </p>
              </div>
              <p class="help">Vul niet de eerste nul in</p>
            </div>

            <div class="field">
              <label class="label">Kies uw bank</label>
              <div class="control">
                <div class="select">
                  <select>
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
                <input class="input" type="number" placeholder="Nummer" v-model="accountnumber" />
              </p>
            </div>

            <div class="field">
              <label class="label">Pasnummer</label>
              <p class="control">
                <input class="input" type="number" placeholder="Nummer" v-model="pasnumber" />
              </p>
            </div>

          </div>
          <footer class="card-footer">
            <!-- <router-link to="/personalinformation"> -->
              <button class="button next" @click="orderSkateboard">
                Bestel
              </button>
            <!-- </router-link> -->
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      man: "",
      woman: "",
      firstname: "",
      insertion: "",
      lastname: "",
      zipcode: "",
      housenumber: null,
      addition: "",
      email: "",
      phonenumber: "",
      accountnumber: null,
      pasnumber: null,

      personalInformation: []
    }
  },

  methods: {
    orderSkateboard(){
      this.personalInformation.push({
        man: this.man,
        woman: this.woman,
        firstname: this.firstname,
        insertion: this.insertion,
        lastname: this.lastname,
        zipcode: this.zipcode,
        housenumber: this.housenumber,
        addition: this.addition,
        email: this.email,
        phonenumber: this.phonenumber,
        accountnumber: this.accountnumber,
        pasnumber: this.pasnumber
      });

      console.log(this.personalInformation);
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
</style>
