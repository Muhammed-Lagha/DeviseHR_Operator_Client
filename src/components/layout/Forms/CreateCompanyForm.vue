<script setup lang="ts">
import { ref } from 'vue'
import PencilIcon from '@/components/icons/other/PencilIcon.vue'
import PhoneIcon from '@/components/icons/other/PhoneIcon.vue'
import LocationIcon from '@/components/icons/other/LocationIcon.vue'
import EmailIcon from '@/components/icons/other/EmailIcon.vue'
import UserIcon from '@/components/icons/other/UsersIcon.vue'
import CalendarIcon from '@/components/icons/other/CalendarIcon.vue'
import EditNameIcon from '@/components/icons/other/EditNameIcon.vue'
import { createCompany } from '@/Api/createCompanyApi'
import { getAuthToken } from '@/utils/getTokens'

const companyName = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const expirationDate = ref('')
const phoneNumber = ref('')
const maxEmployeesAllowed = ref(0)
const licenceNumber = ref('')
const accountNumber = ref('')
const sendRegistration = ref(false)

const token = getAuthToken()

const register = async () => {
  if (token === null) throw new Error('no token')
  await createCompany(
    token,
    companyName.value,
    firstName.value,
    lastName.value,
    email.value,
    expirationDate.value,
    phoneNumber.value,
    Number(maxEmployeesAllowed.value),
    licenceNumber.value,
    accountNumber.value,
    sendRegistration.value
  )
}
</script>

<template>
  <div class="w-full max-w-1/3 overflow-hidden bg-white border rounded-md shadow-md">
    <form @submit.prevent="register">
      <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
        <h3 class="text-sm text-indigo-600">Create New Company</h3>
      </div>
      <div class="flex flex-wrap">
        <!-- Company name -->
        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Company Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <PencilIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="companyName"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>
        <!-- Phone -->
        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Company Phone</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <PhoneIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="phoneNumber"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>
        <!-- Licence Number -->
        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Licence Number</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <LocationIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="licenceNumber"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>
        <!-- Max Employees Allowed -->
        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Max Employees Allowed</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <UserIcon class="w-6 h-6" />
            </span>

            <input
              type="number"
              v-model="maxEmployeesAllowed"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Expiration Date</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <CalendarIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="expirationDate"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">account Number</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <CalendarIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="accountNumber"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>
      </div>
      <!-- Create Main Content -->
      <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
        <h3 class="text-sm text-indigo-600">Create Main Content</h3>
      </div>

      <div class="flex flex-wrap">
        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">first Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EditNameIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="firstName"
              class="w-full px-12 py-2 border-transparent shadow-md rounded-md appearance-none input"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Last Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EditNameIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="lastName"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-50 border-b w-1/2">
          <label class="text-xs">Email</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EmailIcon class="w-6 h-6" />
            </span>

            <input
              type="email"
              v-model="email"
              class="w-full px-12 py-2 border-transparent rounded-md shadow-md appearance-none input"
            />
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="flex items-center justify-between px-5 py-3">
        <div class="flex flex-col text-sm font-semibold">
          <div class="">
            <input
              type="checkbox"
              name="sendRegistration"
              v-model="sendRegistration"
              value="false"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label for="vehicle1" class="ms-2 text-sm font-medium text-gray-900"
              >Send Registration !
            </label>
          </div>
        </div>
        <button
          class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.input {
  border: solid #bbb 1px;
}
.input:focus {
  border: solid #4f46e5 1px;
  --tw-ring-color: rgb(99 102 241);
  outline: none;
  transition: all 0.3s ease;
}
</style>
