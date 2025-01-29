<template>
  <div class="p-4 border rounded">
    <img
      v-if="product.images.length"
      :src="product.images[0]"
      class="w-full h-40 object-cover"
    />
    <h3 class="text-lg font-semibold">{{ product.title }}</h3>
    <p class="text-gray-700">${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "@/types";
import  Card  from "@ox/byond-design-system";

const props = defineProps<{ product: Product }>();

console.log("ProductCard", props.product.images[0]);
</script>
