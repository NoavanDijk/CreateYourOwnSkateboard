<template>
  <div class="indexparts">
    <div class="card">
      <button class="buttonindexpart" :disabled="disableDeck">
        <div class="card-content">
          <div class="content">
            <p class="partname">Deck</p>
            <transition name="fade" mode="out-in" tag="div">
              <div v-if="showCheckDeck" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow"></i>
              </div>
              <div v-else-if="!showCheckDeck" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableTrucks">
        <div class="card-content">
          <div class="content">
            <p class="partname">Trucks</p>
            <transition name="fade" mode="out-in">
              <div v-if="showCheckTrucks" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow2"></i>
              </div>
              <div v-else-if="!showCheckTrucks" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableWheels">
        <div class="card-content">
          <div class="content">
            <p class="partname">Wielen</p>
            <transition name="fade" mode="out-in">
              <div v-if="showCheckWheels" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow3"></i>
              </div>
              <div v-else-if="!showCheckWheels" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableBearings">
        <div class="card-content">
          <div class="content">
            <p class="partname">Bearings</p>
            <transition name="fade" mode="out-in">
              <div v-if="showCheckBearings" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow4"></i>
              </div>
              <div v-else-if="!showCheckBearings" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableBolts">
        <div class="card-content">
          <div class="content">
            <p class="partname">Bolts</p>
            <transition name="fade" mode="out-in">
              <div v-if="showCheckBolts" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow"></i>
              </div>
              <div v-else-if="!showCheckBolts" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableGriptape">
        <div class="card-content">
          <div class="content">
            <p class="partname">Griptape</p>
            <transition name="fade" mode="out-in">
              <div v-if="showCheckGriptape" key="1">
                <i class="fas fa-chevron-circle-right fa-lg arrow6"></i>
              </div>
              <div v-else-if="!showCheckGriptape" key="2">
                <i class="far fa-check-circle fa-lg"></i>
              </div>
              <div v-else></div>
            </transition>
          </div>
    </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    disableDeck() {
      return this.$store.state.disableDeck;
    },

    disableTrucks() {
      return this.$store.state.disableTrucks;
    },

    disableWheels() {
      return this.$store.getters.disableWheels;
    },

    disableBearings() {
      return this.$store.getters.disableBearings;
    },

    disableBolts() {
      return this.$store.getters.disableBolts;
    },

    disableGriptape() {
      return this.$store.getters.disableGriptape;
    },

    showCheckDeck() {
      return this.$store.getters.showCheckDeck;
    },

    showCheckTrucks() {
      return this.$store.getters.showCheckTrucks;
    },

    showCheckWheels() {
      return this.$store.getters.showCheckWheels;
    },

    showCheckBearings() {
      return this.$store.getters.showCheckBearings;
    },

    showCheckBolts() {
      return this.$store.getters.showCheckBolts;
    },

    showCheckGriptape() {
      return this.$store.getters.showCheckGriptape;
    },
  },
};
</script>

<style scoped>
.indexparts {
  padding: 0.4em;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0.5em;
}

.buttonindexpart {
  width: 100%;
  border: 0;
  background-color: white;
}

.card {
  margin: 0.9em 0em 0 0.9em;
}

.content p:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content ul:not(:last-child),
.content blockquote:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  margin-bottom: 0;
}

.arrow {
  margin-left: 12em;
}

.arrow2 {
  margin-left: 11.5em;
}

.arrow3 {
  margin-left: 11.4em;
}

.arrow4,
.arrow6 {
  margin-left: 10.8em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (min-width: 320px) and (max-width: 635px) {
  .card {
    margin: 0 0.35em 0.5em 0.35em;
  }
}
</style>
