<script setup lang="ts">
import { ref } from 'vue'
interface Operator {
  firstName: string
  lastName: string
  userRole: string
  email: string
  sendRegistration: boolean
}

const user = ref<Operator>({
  firstName: '',
  lastName: '',
  userRole: '',
  email: '',
  sendRegistration: false
})

const register = () => {
  const data = JSON.parse(JSON.stringify(user.value))
  console.log('Registered: ', data)
}
</script>
<template>
  <div class="mt-4">
    <div class="w-full max-w-1/3 overflow-hidden bg-white border rounded-md shadow-md">
      <form @submit.prevent="register">
        <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
          <h3 class="text-sm text-gray-600">Create Operator</h3>
        </div>
        <div class="flex flex-wrap">
          <!-- first name -->
          <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
            <label class="text-xs">First Name</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <input
                type="text"
                v-model="user.firstName"
                class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
            </div>
          </div>
          <!-- Last Name -->
          <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
            <label class="text-xs">Last Name</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <input
                type="text"
                v-model="user.lastName"
                class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
            </div>
          </div>
          <!-- Email -->
          <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
            <label class="text-xs">Email</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <input
                type="Email"
                v-model="user.email"
                class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
            </div>
          </div>
          <!-- User Role -->
          <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
            <label class="text-xs">User Role</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <select
                name="UserRole"
                v-model="user.userRole"
                class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div class="flex items-center justify-between px-5 py-3">
          <div>
            <input type="checkbox" name="sendRegistration" v-model="user.sendRegistration" />
            <label for="vehicle1"> Send Registration </label>
          </div>
          <button
            class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
