<template>
  <div class="orderform">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Gekozen onderdelen
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div
                class="producten"
                v-for="(result, index) in results"
                v-bind:key="index"
              >
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-128x128">
                      <img :src="result.src" :alt="result.alt" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="field">
                      <p>{{ result.name }}</p>
                      <br />
                      <p>€ {{ result.price }}</p>
                    </div>
                  </div>
                </article>
                <hr />
              </div>
              <h3 class="totalamount">Totaal bedrag: € {{ totalprice }}</h3>
            </div>
          </div>
          <footer class="card-footer">
            <button class="button startover" @click="onClickOpenDeleteWarning">
              Begin opnieuw
            </button>
            <router-link to="/personalinformation">
              <button class="button next">
                Ga verder
              </button>
            </router-link>
          </footer>
        </div>

        <DeleteWarning
          :onClickCloseModal="onClickCloseModal"
          :startover="startover"
          :activeModalId="activeModalId"
        >
        </DeleteWarning>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import DeleteWarning from "@/components/StartoverWarning.vue";

export default {
  components: {
    DeleteWarning,
  },
  data() {
    return {
      results: [],
      finalChoices: [],
      totalprice: 0,
      activeModalId: "",
    };
  },

  methods: {
    createdMethod() {
      axios
        .get("https://createyourownskateboard.firebaseio.com/decks.json")
        .then((response) => {
          this.results = response.data;

          var choices = [];
          for (let key in this.results) {
            this.results[key].id = key;
            choices.push(this.results[key]);
          }
          this.finalChoices = choices;

          var totalprices = [];
          for (var i = 0; i < this.finalChoices.length; i++) {
            totalprices.push(this.finalChoices[i].price);
          }

          this.totalprice = totalprices.reduce((a, b) => a + b, 0);
        })
        .catch((error) => console.log(error));
    },

    startover() {
      axios
        .delete("https://createyourownskateboard.firebaseio.com/decks.json", {
          data: this.results,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/");
          this.$router.go();
        })
        .catch((error) => console.log(error));
    },

    onClickOpenDeleteWarning: function(event) {
      this.activeModalId = "modal-delete";
      return;
    },

    onClickCloseModal: function(event) {
      this.activeModalId = "";
      return;
    },
  },

  created() {
    this.createdMethod();
  },
};
</script>

<style scoped>
.orderform {
  background-color: #f4f4f4;
}

.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

a {
  width: 50%;
  border-left: 0.5px solid #ececec;
}

.card-content {
  padding: 0;
}

article {
  margin-top: 3.5em;
}

.next {
  width: 100%;
  border: 0;
  background-color: #28a745;
  cursor: pointer;
  height: 100%;
  color: white;
  border-radius: 0;
}

.next:hover {
  background-color: #218838;
  border-color: #1e7e34;
  color: white;
}

.startover {
  width: 50%;
  border: 0;
  background-color: white;
  cursor: pointer;
  margin: 0.5em 0 0.5em 0;
  outline: none;
}

.totalamount {
  display: flex;
  justify-content: flex-end;
  margin: 0 2em 1.4em 0;
}

hr {
  margin-bottom: 0 0 2.5em 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}
</style>
