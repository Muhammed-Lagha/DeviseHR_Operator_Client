<script setup lang="ts">
import { editOperatorDetails } from '@/Api/EditOperatorDetailsApi'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'
import { h } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const props = defineProps<{
  opId?: number
}>()

const emptyInput = () => {
  first_name.value = '' || null
  last_name.value = '' || null
  email.value = '' || null
}

const reload = () => {
  emptyInput()
  window.location.reload()
}

const first_name = ref('' || null)
const last_name = ref('' || null)
const email = ref('' || null)

const updateDetails = async () => {
  first_name.value === '' ? (first_name.value = null) : first_name.value
  last_name.value === '' ? (last_name.value = null) : last_name.value
  email.value === '' ? (email.value = null) : email.value
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await editOperatorDetails(
    token,
    email.value,
    last_name.value,
    first_name.value,
    props?.opId
  )
  if (results?.message) {
    open1(results.message)
  } else {
    open1('Details updated successfully')
    reload()
  }
}

const open1 = (results: any) => {
  ElMessageBox({
    title: 'Update Operator Details',
    message: results,
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    }
  }).then((action) => {
    ElMessage({
      type: 'info',
      message: `action: ${action}`
    })
  })
}
</script>
<template>
  <form @submit.prevent="updateDetails" class="mt-6 space-y-6">
    <div>
      <label class="block font-medium text-sm" for="current_password"><span>First Name</span></label
      ><input
        class="px-4 min-h-[40px] input rounded-md shadow-sm mt-1 block w-full"
        placeholder="First Name"
        v-model="first_name"
        type="text"
      />
    </div>
    <div>
      <label class="block font-medium text-sm" for="password"><span>Last Name</span></label
      ><input
        class="px-4 min-h-[40px] input rounded-md shadow-sm mt-1 block w-full"
        placeholder="Last Name"
        v-model="last_name"
        type="text"
      />
    </div>
    <div>
      <label class="block font-medium text-sm" for="password_confirmation"><span>Email</span></label
      ><input
        class="px-4 min-h-[40px] input rounded-md shadow-sm mt-1 block w-full"
        placeholder="Email"
        v-model="email"
        type="text"
      />
    </div>
    <div class="flex items-center justify-end gap-4">
      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-600 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      >
        Save
      </button>
    </div>
  </form>
</template>
<style scoped>
input {
  border: solid #bbb 1px;
}
input:focus {
  border: solid #4f46e5 1px;
  --tw-ring-color: rgb(99 102 241);
  outline: none;
  transition: all 0.3s ease;
}
</style>
