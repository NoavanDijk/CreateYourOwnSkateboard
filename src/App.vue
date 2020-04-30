<template>
  <div id="app">
    <div id="nav">
    </div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./auth/Navbar";
export default {
  components: {
    navbar
  }
}
</script>

<style>
  #app, #nav{
    padding: 0;
    margin: 0;
    background-color: #f4f4f4;
  }
</style>
