<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import EditOperatorDetails from '@/components/layout/Forms/Edit Operator Details/EditOperatorDetails.vue'
import EditOperatorRole from '@/components/layout/Forms/Edit Operator Details/EditOperatorRole.vue'
import { ElNotification } from 'element-plus'

import { ref } from 'vue'
import { onMounted } from 'vue'
import { getOperatorById } from '@/Api/GetOperatorByIdApi'
import { sendRegistration } from '@/Api/SendRegistrationOperatorApi'
import { resetPassword } from '@/Api/ResetOpPasswdApi'
import { getAuthToken } from '@/utils/getTokens'
import { useRouter } from 'vue-router'

const router = useRouter()
const opId = router.currentRoute._value.params.id
const user = ref()

onMounted(async () => {
  const token = getAuthToken()
  if (token) user.value = await getOperatorById(token, Number(opId))
})

const verify = async () => {
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await sendRegistration(token, Number(opId))
  open1(results)
}
const open1 = (message: any) => {
  ElNotification({
    title: 'verification email sent',
    message: message
  })
}

const resetPasswd = async () => {
  const token = getAuthToken()
  if (token === null) throw new Error('no token')
  const results = await resetPassword(token, Number(opId))
  open2(results)
}
const open2 = (message: any) => {
  ElNotification({
    title: 'password reset email sent',
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
                  <div class="">
                    <nav class="flex justify-end items-center gap-2 group-[10px]">
                      <button
                        @click="verify"
                        class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#eafef3] hover:text-[#2ecc71]"
                      >
                        Verify
                      </button>
                      <button
                        @click="resetPasswd"
                        class="p-2 text-[#0f1419] text-sm font-semibold border-[1px] border-black rounded-md focus:outline-none hover:border-[#eafef3] hover:transition-[0.5s] hover:bg-[#f0e6f7] hover:text-[#d698ff]"
                      >
                        Reset Password
                      </button>
                    </nav>
                  </div>
                </div>
                <div class="overflow-hidden sm:rounded-lg py-4">
                  <dl>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">First Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.first_name }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Last Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.last_name }}</dd>
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
                        <dd class="mt-1 text-sm text-gray-900">
                          {{
                            user?.user_type === 1
                              ? 'Admin'
                              : user?.user_type === 2
                                ? 'Manager'
                                : 'Operator'
                          }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">login Attempt</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.login_attempt }}</dd>
                      </div>

                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Is Verified</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.is_verified === true ? 'Yes' : 'No' }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
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
        <div class="px-8 py-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <section class="max-w-xl">
            <header>
              <h2 class="text-lg font-medium">Update Operator Details</h2>
              <p class="mt-1 text-sm text-gray-600">
                Update Operator Details for {{ user?.first_name }} {{ user?.last_name }}
              </p>
            </header>
            <EditOperatorDetails :opId="user?.id" />
            <header class="mt-4">
              <h2 class="text-lg font-medium">Update Operator Role</h2>
              <p class="mt-1 text-sm text-gray-600">
                Update Operator Role for {{ user?.first_name }} {{ user?.last_name }}
              </p>
            </header>
            <div class="mt-4">
              <EditOperatorRole :opId="user?.id" />
            </div>
          </section>
        </div>
      </footer>
    </div>
  </main>
</template>
