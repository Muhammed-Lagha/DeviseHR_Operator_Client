<script setup lang="ts">
import { loginRequest, refreshRequest } from '@/Connection/AuthRequests'
import type { TLoginRefreshUserResponse } from '@/Types/LoginAndRefreshResponse'
import { addTokensToCookies } from '@/helpers/getTokens'
import useUserStore from '@/stores/UserStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showAlert = ref(false)
const alertMessage = ref('')
const router = useRouter()
const userStore = useUserStore()

const email = ref('sudo@devisehr.com')
const password = ref('password123')
const showPassword = ref(false)

const login = async () => {
  const data: TLoginRefreshUserResponse = await loginRequest(email.value, password.value)

  console.log(data)

  if (data.success) {
    addTokensToCookies(data.token, data.refreshToken)
    let userDate: TLoginRefreshUserResponse = await refreshRequest(data.token, data.refreshToken)

    userStore.user.email = userDate.data.email
    userStore.user.firstName = userDate.data.first_name
    userStore.user.lastName = userDate.data.last_name
    userStore.user.id = userDate.data.id
    userStore.user.user_role = userDate.data.user_role
    userStore.user.profile_picture = userDate.data.profile_picture

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
          <!-- <button class="absolute right-0" @click="showPassword = !showPassword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span class="sr-only">Show password</span>
            <span class="sr-only">Hide password</span>
          </button> -->
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
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
