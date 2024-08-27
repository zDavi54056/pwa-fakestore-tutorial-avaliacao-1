import { ref } from 'vue'
import { defineStore } from 'pinia'

import CategoryService from '@/service/category'
const categoryService = new CategoryService()

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])

  async function getCategories() {
    categories.value = await categoryService.getCategories()
  }

  async function createCategory(category) {
    await categoryService.createCategory(category)
    getCategories()
  }

  async function deleteCategory(category_id) {
    await categoryService.deleteCategory(category_id)
    getCategories()
  }

  return { categories, getCategories, createCategory, deleteCategory }
})
