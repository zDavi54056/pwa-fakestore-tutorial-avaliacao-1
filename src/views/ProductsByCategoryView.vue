<script setup>
import ProductList from '@/components/ProductList.vue'
defineProps(['category_id'])
</script>

<template>
  <product-list :category_id="category_id" />
</template>
