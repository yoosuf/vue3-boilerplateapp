<template>
  <div>
    <h2 class="text-2xl font-bold">Product List</h2>
    <div v-if="loading" class="text-gray-500">Loading...</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useProductStore } from '@/store';
import ProductCard from '@/components/Product/ProductCard.vue';
import type { Product } from '@/types';

const store = useProductStore();

onMounted(() => {
  store.loadProducts();
});

const products = computed<Product[]>(() => store.products);
const loading = computed(() => store.loading);
</script>