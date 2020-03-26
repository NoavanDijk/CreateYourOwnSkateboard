<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(wheels, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div
        class="column"
        v-for="(wheel, index) in wheels"
        v-bind:key="index"
      >
        <div class="card">
          <div class="card-content">
            <img
              class="skateboardimage"
              :src="wheel.src"
              :alt="wheel.alt"
            />
            <div class="content">
              <br>
              <p class="subtitle">{{ wheel.name }}</p>
              <p class="subtitle">{{ wheel.price }}</p>
              <br><br><br>
              <p class="subtitle is-6">Maat: {{ wheel.size }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <p class="card-footer-item">
              <span>Add</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var chunk = require("chunk");
export default {
  data() {
    return {
      wheels: [
        {
          src: require("@/assets/images/wheels/blackwheels.png"),
          name: "Speedlab Sirens Skateboard Wheels",
          price: "€68",
          size: "55mm",
          alt: "Speedlab Sirens Skateboard Wheels"
        },
        {
          src: require("@/assets/images/wheels/bluewheels.png"),
          name: "Bones 100's Sidecuts White Skateboard Wheels",
          price: "€48",
          size: "53mm",
          alt: "Bones 100's Sidecuts White Skateboard Wheels"
        },
        {
          src: require("@/assets/images/wheels/redwheels.png"),
          name: "Bones 100's Sidecuts Black Skateboard Wheels",
          price: "€48",
          size: "52mm",
          alt: "Bones 100's Sidecuts Black Skateboard Wheels"
          
        },
        {
          src: require("@/assets/images/wheels/whitewheels.png"),
          name: "Bones STF Sidecut McClung Oats Skateboard Wheels",
          price: "€64",
          size: "53mm",
          alt: "Bones STF Sidecut McClung Oats Skateboard Wheels"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.wheels, 2);
    }
  }
};
</script>

<style scoped>
.productcard{
  margin: 0.4em 1.2em 0 0;
}

.skateboardimage {
  width: 47%;
}

.card-content{
  display: flex;
}

.card{
  margin: 0.5em;
  width: 90
}

.column{
  padding: .75rem 0 0 0rem;
}

.columns:not(:last-child), .columns:not(:last-child){
  margin-bottom: 0;
}
</style>
