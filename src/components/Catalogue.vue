<template>
  <div class="about">
    <div class="columns">
      <div class="column is-one-quarter">
        <app-index-parts></app-index-parts>
      </div>
      <div class="column">
        <app-product-card></app-product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import IndexParts from '@/components/IndexParts.vue';

export default {
  components: {
    appProductCard: ProductCard,
    appIndexParts: IndexParts
  }
}
</script>
