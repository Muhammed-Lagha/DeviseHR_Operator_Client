<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import EditUserVue from '@/components/layout/Forms/EditUser.vue'

import { ref } from 'vue'
import { onMounted } from 'vue'
import { getUserById } from '@/Api/GetUserById'
import { sendRegistration } from '@/Api/SendRegistrationUserApi'
import { getAuthToken } from '@/utils/getTokens'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { toggleUserTermination } from '@/Api/ToggleUserTerminationApi'

const router = useRouter()
const userId = router.currentRoute._value.params.id
const user = ref()

onMounted(async () => {
  const token = getAuthToken()
  if (token) user.value = await getUserById(token, Number(userId))
})

const verify = async () => {
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await sendRegistration(token, Number(userId))
  if (results === true) {
    open1('Registration code has been successfully sent')
  } else {
    open1('Registration code could not be sent')
  }
}
const open1 = (message: any) => {
  ElNotification({
    title: 'verification email sent',
    message: message
  })
}

const termination = async () => {
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await toggleUserTermination(token, Number(userId))
  open2(results)
}
const open2 = (message: any) => {
  ElNotification({
    title: 'user terminated',
    message: message
  })
}
</script>

<template>
  <Breadcrumb :breadcrumb="user?.first_name + ' ' + user?.last_name" />
  <main class="text-[#0f1419] bg-[#fefefd] rounded-md">
    <div class="max-w-6xl -my-2 mx-auto border border-solid">
      <div class="border-b border-solid border-black border-opacity-[0.1]">
        <div class="flex flex-col">
          <section class="py-2 px-8">
            <div class="mt-4 bg-white shadow-sm rounded-lg">
              <div class="fancy-p">
                <div class="flex justify-between px-4 items-center mb-4">
                  <div class="font-bold text-lg">Basic Info</div>

                  <div class="px-4 py-3.5 col-span-1">
                    <nav class="flex justify-end items-center gap-2 group-[10px]">
                      <button
                        @click="verify"
                        class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#eafef3] hover:text-[#2ecc71]"
                      >
                        Verify
                      </button>
                      <button
                        @click="termination"
                        class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#fad7e3] hover:text-[#df8fa8]"
                      >
                        Terminate
                      </button>
                    </nav>
                  </div>
                </div>
                <div class="overflow-hidden sm:rounded-lg py-4">
                  <dl>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.first_name }} {{ user?.last_name }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Company Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.companies?.name }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.email }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Id</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.id }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">User Role</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.user_role }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Created At</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.created_at }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">login Attempt</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.login_attempt }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Added By User</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.added_by_user }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Is Verified</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.is_verified === true ? 'Yes' : 'No' }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Is Terminated</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.is_terminated === true ? 'Yes' : 'No' }}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer class="p-4">
        <EditUserVue :userId="user?.id" />
      </footer>
    </div>
  </main>
</template>

<style scoped></style>
