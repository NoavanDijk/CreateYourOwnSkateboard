<template>
  <div class="indexparts">
    <div class="card">
      <button class="buttonindexpart" :disabled="disableDeck">
        <div class="card-content">
          <div class="content">
            <p class="partname">Deck</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableTrucks">
        <div class="card-content">
          <div class="content">
            <p class="partname">Trucks</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableWheels">
        <div class="card-content">
          <div class="content">
            <p class="partname">Wielen</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableBearings">
        <div class="card-content">
          <div class="content">
            <p class="partname">Bearings</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableBolts">
        <div class="card-content">
          <div class="content">
            <p class="partname">Bolts</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
          </div>
        </div>
      </button>
    </div>

    <div class="card">
      <button class="buttonindexpart" :disabled="disableGriptape">
        <div class="card-content">
          <div class="content">
            <p class="partname">Griptape</p>
            <i class="fas fa-chevron-circle-right fa-lg"></i>
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
      return this.$store.getters.disableDeck;
    },

    disableTrucks() {
      return this.$store.getters.disableTrucks;
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

@media (min-width: 320px) and (max-width: 635px) {
  .card {
    margin: 0 0.35em 0.5em 0.35em;
  }
}
</style>
