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
#home {
  overflow: hidden;
  margin: 0;
  height: 100%;
}

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
</style>
