<template>
  <div class="about">
    <div class="columns">
      <div class="column is-one-quarter">
        First column
      </div>
      <div class="column">
        <app-product-card></app-product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    appProductCard: ProductCard,
  }
}
</script>
