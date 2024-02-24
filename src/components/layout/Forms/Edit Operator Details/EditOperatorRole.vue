<script setup lang="ts">
import { editOperatorRole } from '@/Api/EditOperatorRoleApi'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'
import { ElNotification } from 'element-plus'

const props = defineProps<{
  opId?: number
}>()
const role = ref('1')
const editRole = async () => {
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await editOperatorRole(token, role.value, props.opId)
  if (results?.message) {
    open1(results.message)
  } else {
    open1('Updated role successfully')
    window.location.reload()
  }
}
const open1 = (message: any) => {
  ElNotification({
    title: 'Update Operator Role',
    message: message
  })
}
</script>

<template>
  <form class="px-4 py-3.5 mx-2 col-span-1 bg-gray-50 gap-2" @submit.prevent="editRole">
    <dt class="text-sm font-medium text-gray-500">Edit User Role {{ props.opId }}</dt>
    <select
      v-model="role"
      class="px-4 mb-3 min-h-[40px] input rounded-md shadow-sm mt-1 block w-full"
    >
      <option value="1">Admin</option>
      <option value="2">Manager</option>
      <option value="3">Employee</option>
    </select>
    <div class="flex items-center justify-end gap-4">
      <button
        class="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-600 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
        type="submit"
      >
        Save
      </button>
    </div>
  </form>
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
