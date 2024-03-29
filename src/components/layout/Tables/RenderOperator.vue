<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { opMembers } from '@/Types/Operators'
import { RouterLink } from 'vue-router'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import { getOperators } from '@/Api/GetOperatorsApi'
import { getAuthToken } from '@/utils/getTokens'
import { formatDate } from '@/Helpers/formatDate'

onMounted(async () => {
  const token = getAuthToken()
  if (token) teamMembers.value = await getOperators(token)
})

const teamMembers = ref<opMembers[]>([])
</script>

<template>
  <div class="flex flex-col mt-2">
    <div class="py-2 my-2 mx-0 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-6 lg:px-1">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Name
              </th>
              <th
                class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Role
              </th>
              <th
                class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Terminated
              </th>
              <th
                class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Verified
              </th>
              <th
                class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Updated At
              </th>
              <th class="px-2 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr
              class="hover:rounded-md hover:shadow-[rgba(0,_0,_0,_0.05)_0px_6px_24px_0px,_rgba(0,_0,_0,_0.08)_0px_0px_0px_1px] transition-all duration-200"
              v-for="(u, index) in teamMembers"
              :key="index"
            >
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <div :class="u.profile_picture === null">
                      <GenerateImage :firstName="u.first_name" :lastName="u.last_name" />
                    </div>
                    <img
                      class="w-10 h-10 rounded-full"
                      :class="u.profile_picture === null ? 'hidden' : 'block'"
                      :src="u.profile_picture"
                      alt=""
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      {{ u.first_name }} {{ u.last_name }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ u.email }}
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm leading-5 text-gray-900">
                  <span
                    :class="[
                      'p-2 rounded-lg font-bold bg-[#f1f2f6] inline-flex items-center first-letter:uppercase',
                      u.user_type === 1
                        ? 'bg-[#f4efff] text-[#9a84da]'
                        : u.user_type === 2
                          ? 'bg-[#fff6e5] text-[#f4bd50]'
                          : u.user_type === 3
                            ? 'bg-[#eaf2ff] text-[#739fdc]'
                            : 'bg-[#fbdde7] text-[#df8fa8]'
                    ]"
                  >
                    {{
                      u.user_type === 1
                        ? 'Admin'
                        : u.user_type === 2
                          ? 'Manager'
                          : u.user_type === 3
                            ? 'Operator'
                            : 'Employee'
                    }}
                  </span>
                </div>
              </td>

              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <span
                  :class="[
                    'rounded-lg p-2 inline-flex text-xs font-semibold leading-5',
                    u.is_terminated === true
                      ? 'bg-[#fbdde7] text-[#df8fa8]'
                      : 'bg-[#eafef3] text-[#2ecc71]'
                  ]"
                >
                  {{ u.is_terminated === true ? 'Terminated' : 'Employed' }}</span
                >
              </td>

              <td
                class="px-2 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                <span
                  :class="[
                    'rounded-lg p-2 font-bold',
                    u.is_verified === true
                      ? 'bg-[#eafef3] text-[#2ecc71]'
                      : 'bg-[#fbdde7] text-[#df8fa8]'
                  ]"
                >
                  {{ u.is_verified === true ? '✔️' : '✖️' }}</span
                >
              </td>

              <td
                class="px-2 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                {{ formatDate(u.updated_at) }}
              </td>

              <td
                class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                <div class="pl-2 flex justify-around">
                  <RouterLink :to="'/operator/' + u.id">
                    <button
                      class="py-1 px-4 rounded-xl cursor-pointer bg-[#F1F2F6] text-[#272727] outline-none font-bold text-base border-none transition-all hover:shadow hover:bg-[#272727] hover:text-[#ececf4]"
                    >
                      Preview
                    </button>
                  </RouterLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.table-wrapper::-webkit-scrollbar {
  height: 12px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: var(--gray-mid);
  border-radius: 6px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: var(--gray);
  border-radius: 5px;
}
</style>
