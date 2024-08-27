import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutFull from '@/layouts/LayoutFull.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/produtos/adicionar',
          name: 'ProductAdd',
          component: () => import('@/views/ProductAdd.vue')
        },
        {
          path: '/produtos/categoria/:category_id',
          name: 'ProductsByCategory',
          component: () => import('@/views/ProductsByCategoryView.vue'),
          props: true
        },
        {
          path: '/categorias',
          name: 'Category',
          component: () => import('@/views/CategoryView.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue')
        }
      ]
    }
  ]
})

export default router
