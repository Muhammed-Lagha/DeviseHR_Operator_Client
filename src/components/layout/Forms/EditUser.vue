<script setup lang="ts">
import { editUserEmail } from '@/Api/EditUserEmail'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'
import { ElNotification } from 'element-plus'

const props = defineProps<{
  userId?: number
}>()

const email = ref('')
const editEmail = async () => {
  console.log(email.value, props.userId)
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await editUserEmail(token, email.value, props.userId)
  if (results?.message) {
    open1(results.message)
  } else {
    open1('Email updated successfully')
  }
}
const open1 = (message: any) => {
  ElNotification({
    title: 'Update User Email',
    message: message
  })
}
</script>
<template>
  <div class="overflow-hidden sm:rounded-lg py-4">
    <dl>
      <div class="grid grid-cols-2">
        <form class="px-4 py-3.5 mx-2 col-span-1 bg-gray-50 gap-2" @submit.prevent="editEmail">
          <dt class="text-sm font-medium text-gray-500">Edit User Email {{ props.id }}</dt>
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
