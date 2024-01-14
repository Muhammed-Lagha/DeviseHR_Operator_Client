<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)

const Registration =async () => {
  
}

// const Registration = async () => {
//   if (password.value === confirmPassword.value) {
//     const response = await axios.post(`${opApiConnection}/api/registration/register`, {
//       password: password.value
//     })
//     console.log(response)
//   }
// }
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center flex-col">
        <span class="text-2xl font-bold text-gray-700"
          >Devise<span class="text-indigo-400">HR</span></span
        >
        <span class="text-lg font-semibold text-gray-700">Registration</span>
      </div>

      <form class="mt-4" @submit.prevent="Registration">
        <label class="block">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md password"
            v-model="password"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Confirm Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md password"
            v-model="confirmPassword"
          />
        </label>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Register
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

.password {
  border: solid #bbb 1px;
  padding: 0.2rem 0.3rem;
  transition: all 0.3s ease;
}

.password:focus {
  outline: none;
  border: solid #4f46e5 1px;
  transition: all 0.3s ease;
}
</style>
