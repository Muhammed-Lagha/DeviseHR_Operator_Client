<script setup lang="ts">
import { editOperatorDetails } from '@/Api/EditOperatorDetailsApi'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'

const props = defineProps<{
  userId?: number
}>()

const first_name = ref()
const last_name = ref()
const email = ref()

const updateDetails = async () => {
  const token = getAuthToken()
  if (token)
    await editOperatorDetails(token, email.value, last_name.value, first_name.value, props.userId)
}
</script>
<template>
  <form @submit.prevent="updateDetails" class="mt-6 space-y-6">
    <div>
      <label class="block font-medium text-sm" for="current_password"><span>First Name</span></label
      ><input
        class="min-h-[40px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
        placeholder="First Name"
        v-model="first_name"
        type="text"
      />
    </div>
    <div>
      <label class="block font-medium text-sm" for="password"><span>Last Name</span></label
      ><input
        class="min-h-[40px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
        placeholder="Last Name"
        v-model="last_name"
        type="text"
      />
    </div>
    <div>
      <label class="block font-medium text-sm" for="password_confirmation"><span>Email</span></label
      ><input
        class="min-h-[40px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
        placeholder="Email"
        v-model="email"
        type="text"
      />
    </div>
    <div class="flex items-center gap-4">
      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 bg-purple-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-600 active:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition ease-in-out duration-150"
      >
        Save
      </button>
    </div>
  </form>
</template>
