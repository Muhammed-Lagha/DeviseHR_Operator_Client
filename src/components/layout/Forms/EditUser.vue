<script setup lang="ts">
import { editUserEmail } from '@/Api/EditUserEmail'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'

const props = defineProps<{
  userId?: number
}>()

const email = ref('')
const editEmail = async () => {
  const token = getAuthToken()
  if (token) await editUserEmail(token, email.value, props.userId)
}
</script>
<template>
  <div class="overflow-hidden sm:rounded-lg py-4">
    <dl>
      <div class="grid grid-cols-2">
        <form class="px-4 py-3.5 mx-2 col-span-1 bg-gray-50 gap-2" @submit.prevent="editEmail">
          <dt class="text-sm font-medium text-gray-500">Edit User Email {{ props.userId }}</dt>
          <input
            v-model="email"
            class="mt-1 text-sm text-gray-900 p-2 border-1 border-gray-300 rounded-md input"
            type="text"
            placeholder="Email"
          />
          <button
            class="px-3 py-1 m-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            type="submit"
          >
            Save
          </button>
        </form>
        <div class="px-4 py-3.5 col-span-1 bg-gray-50">
          <nav class="flex justify-end items-center gap-2 group-[10px]">
            <button
              class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#eafef3] hover:text-[#2ecc71]"
            >
              Verify
            </button>
            <button
              class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#fad7e3] hover:text-[#df8fa8]"
            >
              Terminate
            </button>
          </nav>
        </div>
      </div>
    </dl>
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
