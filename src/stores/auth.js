import { ref } from 'vue'
import { defineStore } from 'pinia'

import AuthService from '@/service/auth'
const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})

  async function setToken(token) {
    user.value = await authService.postUserToken(token)
  }

  async function unsetToken() {
    user.value = {}
  }

  return { user, setToken, unsetToken }
})
