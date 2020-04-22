<template>
  <div class="home">
    <img
      class="homepageimage"
      alt="Skateboard"
      src="..\assets\images\homepage.jpg"
    />
    <router-link to="/catalogue" active-class="active">
      <div class="creatediv">
        <h1 class="homepagetext">Click here to create your own skateboard!</h1>
      </div>
    </router-link>
  </div>
</template>

<script></script>

<style>
.homepageimage {
  background-size: cover;
  padding: 0;
  margin: 0;
  position: absolute;
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
}

.homepagetext {
  text-align: center;
  padding: 0.9em;
  font-size: 3em;
  color: white;
  opacity: 1;
}

@media (min-width: 320px) and (max-width: 635px) {
  .home {
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
  }
}
</style>
