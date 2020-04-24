<template>
  <div class="home">
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :autoplay="true"
      :loop="true"
      :autoplayHoverPause="false"
      :autoplayTimeout="3500"
      :paginationEnabled="false"
    >
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\homepage.jpg"
        />
      </slide>
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\home1.jpg"
        />
      </slide>
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\home2.jpg"
        />
      </slide>
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\home5.jpg"
        />
      </slide>
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\home6.jpg"
        />
      </slide>
      <slide>
        <img
          class="homepageimage"
          alt="Skateboard"
          src="..\assets\images\home\home7.jpg"
        />
      </slide>
    </carousel>
    <div class="creatediv">
      <h1 class="homepagetext">Creëer je eigen skateboard!</h1>
      <router-link to="/catalogue" active-class="active">
        <button class="button button is-inverted">Start hier</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style>
.VueCarousel-wrapper {
  width: 100%;
  height: 100vh;
}
.homepageimage {
  object-fit: cover;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
}

.creatediv {
  height: 4em;
  color: white;
  width: 100%;
  position: absolute;
  margin-top: 10em;
  height: 10em;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.homepagetext {
  text-align: center;
  padding: 0.4em;
  font-size: 3em;
  color: white;
  opacity: 1;
}

.button {
  width: 225px;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

@media (min-width: 320px) and (max-width: 635px) {
  /* .home {
    background-image: linear-gradient(orange, black);
    height: 100vh;
  }

  .homepageimage {
    opacity: 0;
  }

  .creatediv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .homepagetext {
    font-size: 1.5em;
  } */
}
</style>
