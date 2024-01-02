<script setup lang="ts">
import { loginRequest } from '@/Connection/AuthRequests'
import type { TLoginRefreshUserResponse } from '@/Types/LoginAndRefreshResponse'
import { addTokensToCookies } from '@/helpers/getTokens'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showAlert = ref(false)
const alertMessage = ref('')
const router = useRouter()

const email = ref('sudo@devisehr.com')
const password = ref('password123')

const login = async () => {
  const data: TLoginRefreshUserResponse = await loginRequest(email.value, password.value)

  console.log(data)

  if (data.success) {
    addTokensToCookies(data.token, data.refreshToken)
    router.push('/Home')
  } else {
    showAlert.value = true
    alertMessage.value = 'Invalid email or password'
  }
}
</script>

<template>
  <el-alert
    v-if="showAlert"
    :title="alertMessage"
    type="error"
    description="Please try again"
    show-icon
  />

  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700"
          >Devise<span class="text-indigo-400">HR</span></span
        >
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="email"
            class="block w-full mt-1 border-gray-200 rounded-md email"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="text-indigo-600 rounded-md focus:ring" />
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}

.email {
  border: solid #bbb 1px;
  padding: 0.2rem 0.3rem;
  transition: all 0.3s ease;
}

.email:focus {
  outline: none;
  border: solid red 1px;
  color: peru;
  transition: all 0.3s ease;
}
</style>
