import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchProducts } from '@/services';
import type { Product } from '@/types';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);

  async function loadProducts() {
    loading.value = true;
    try {
      products.value = await fetchProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      loading.value = false;
    }
  }

  return {
    products,
    loading,
    loadProducts,
  };
});