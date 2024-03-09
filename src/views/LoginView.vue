<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TLoginRefreshUserResponse } from '@/Types/LoginAndRefreshResponse'
import { loginRequest, refreshRequest } from '@/Api/AuthRequestsApi'
import { addTokensToCookies } from '@/utils/getTokens'
import useUserStore from '@/stores/UserStore'

const loginError = ref(false)
const showAlert = ref(false)
const alertMessage = ref('')
const router = useRouter()
const userStore = useUserStore()

const email = ref('sudo@devisehr.com')
const password = ref('password123')
const showPassword = ref(false)

const login = async () => {
  const userData: TLoginRefreshUserResponse = await loginRequest(email.value, password.value)

  console.log(userData)

  if (!userData.success) {
    showAlert.value = true
    alertMessage.value = 'Invalid email or password'
    throw new Error('Invalid email or password')
  }

  addTokensToCookies(userData.token, userData.refreshToken)

  userStore.user.email = userData.data.email
  userStore.user.firstName = userData.data.first_name
  userStore.user.lastName = userData.data.last_name
  userStore.user.id = userData.data.id
  userStore.user.user_role = userData.data.user_role
  userStore.user.profile_picture = userData.data.profile_picture

  router.push('/Home')
}
const inputError = ref('border-red-500 focus:border-red-500 focus:ring-red-500')
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
          >Devise<span class="text-green-400">HR</span></span
        >
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="email"
            class="block w-full mt-1 border-gray-200 rounded-md input"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="block w-full mt-1 border-gray-200 rounded-md input"
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

.input {
  border: solid #bbb 1px;
  padding: 0.2rem 0.3rem;
}

.input:focus {
  outline: none;
  border: solid #4f46e5 2px;
  --tw-ring-color: rgb(99 102 241);
  transition: all 0.1s ease;
}
/* .inputError{
  border: solid red 1px;
  padding: 0.2rem 0.3rem;
}

.inputError:focus {
  outline: none;
  border: solid red 1px;
  transition: all 0.1s ease;
} */

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
