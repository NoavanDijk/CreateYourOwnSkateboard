<template>
  <div>
    <div class="card" v-for="(part, index) in parts" v-bind:key="index">
      <div class="card-content">
        <div class="content">
          <p class="partname">{{ part.name }}</p>
          <i class="fas fa-chevron-circle-right fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      parts: [
        { name: "Deck" },
        { name: "Trucks" },
        { name: "Wielen" },
        { name: "Bearings" },
        { name: "Bolts" },
        { name: "Griptape" },
      ]
    }
  }
}
</script>

<style scoped>
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 0.5em;
  }

  .card{
    margin: 0.9em 0em 0 0.9em;
  }

  .content p:not(:last-child), .content dl:not(:last-child), .content ol:not(:last-child), .content ul:not(:last-child), .content blockquote:not(:last-child), .content pre:not(:last-child), .content table:not(:last-child){
    margin-bottom: 0;
  }
</style>