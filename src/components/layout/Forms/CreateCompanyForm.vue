<script setup lang="ts">
import { ref } from 'vue'
import PencilIcon from '@/components/icons/other/PencilIcon.vue'
import PhoneIcon from '@/components/icons/other/PhoneIcon.vue'
import LocationIcon from '@/components/icons/other/LocationIcon.vue'
import EmailIcon from '@/components/icons/other/EmailIcon.vue'
import UserRole from '@/components/icons/other/UserRole.vue'
import UserIcon from '@/components/icons/other/UsersIcon.vue'
import CalendarIcon from '@/components/icons/other/CalendarIcon.vue'
import EditNameIcon from '@/components/icons/other/EditNameIcon.vue'
import MailIcon from '@/components/icons/other/MailIcon.vue'
interface Company {
  companyName: string
  companyEmail: string
  firstName: string
  lastName: string
  phoneNumber: string
  clientEmail: string
  userRole: string
  country: string
  expirationDate: string
  isSpecialClient: boolean
  maxEmployeesAllowed: number
  licenceNumber: string
  accountNumber: string
  sendRegistration: boolean
}

const company = ref<Company>({
  companyName: '',
  companyEmail: '',
  clientEmail: '',
  userRole: 'admin',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  country: '',
  expirationDate: '',
  isSpecialClient: false,
  maxEmployeesAllowed: 0,
  licenceNumber: '',
  accountNumber: '',
  sendRegistration: false
})

const register = () => {
  const data = JSON.parse(JSON.stringify(company.value))
  console.log('Registered: ', data)
}
</script>

<template>
  <div class="w-full max-w-1/3 overflow-hidden bg-white border rounded-md shadow-md">
    <form @submit.prevent="register">
      <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
        <h3 class="text-sm text-indigo-600">Create New Company</h3>
      </div>
      <div class="flex flex-wrap">
        <!-- first name -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Company Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <PencilIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="company.companyName"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
        <!-- Email -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Company Email</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EmailIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="company.companyEmail"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
        <!-- Phone -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Company Phone</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <PhoneIcon class="w-6 h-6" />
            </span>

            <input
              type="number"
              v-model="company.phoneNumber"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
        <!-- User Role -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Company Location</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <LocationIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="company.country"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
        <!-- Max Employees Allowed -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Max Employees Allowed</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <UserIcon class="w-6 h-6" />
            </span>

            <input
              type="number"
              v-model="company.maxEmployeesAllowed"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Expiration Date</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <CalendarIcon class="w-6 h-6" />
            </span>

            <input
              type="date"
              v-model="company.expirationDate"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
        <!-- Create Main Content -->
      <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
        <h3 class="text-sm text-indigo-600">Create Main Content</h3>
      </div>

      <div class="flex flex-wrap">
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">first Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EditNameIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="company.firstName"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Last Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <EditNameIcon class="w-6 h-6" />
            </span>

            <input
              type="text"
              v-model="company.lastName"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
          <label class="text-xs">Email</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <MailIcon class="w-6 h-6" />
            </span>

            <input
              type="email"
              v-model="company.clientEmail"
              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            />
          </div>
        </div>
        <!-- User Role -->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b w-1/2">
            <label class="text-xs">User Role</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                <UserRole class="w-6 h-6" />
              </span>

              <select
                name="UserRole"
                v-model="company.userRole"
                :v-bind="company.userRole"
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
        <div class="flex flex-col text-sm font-semibold">
          <div class="">
            <input
              type="checkbox"
              name="sendRegistration"
              v-model="company.sendRegistration"
              value="false"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="vehicle1" class="ms-2 text-sm font-medium text-gray-900"
              >Send Registration !
            </label>
          </div>
          <div class="">
            <input
              type="checkbox"
              name="sendWelcomeEmail"
              v-model="company.isSpecialClient"
              value="false"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900"
              >Special Client !</label
            >
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
