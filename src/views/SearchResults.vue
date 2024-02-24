<script setup lang="ts">
import searchApi from '@/Api/searchApi'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import { formatDate } from '@/Helpers/formatDate'
import { useRouter } from 'vue-router'
import { getAuthToken } from '@/utils/getTokens'
import type { SearchCompany, SearchUser } from '@/Types/DTOs/SearchDto'
import { onMounted, ref } from 'vue'

const router = useRouter()
const searchInput = router.currentRoute.value.query.search

onMounted(async () => {
  const token = getAuthToken()
  console.log(searchInput?.toString())
  const data = await searchApi(searchInput?.toString(), token)
  companies.value = data.data.companies
  users.value = data.data.users
})
const companies = ref<SearchCompany[]>([])
const users = ref<SearchUser[]>([])
</script>

<template>
  <div class="">
    <div class="flex flex-col mt-2">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <!-- Companies -->
        <div class="mb-3">
          <span class="text-2xl font-bold text-gray-700">Companies</span>
        </div>
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Name
                </th>

                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Added By
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Expiration Date
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Licence Number
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Phone
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="Company in companies" :key="Company.id">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <div>
                        <GenerateImage :firstName="Company.name" :lastName="Company.name" />
                      </div>
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ Company.name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">Id {{ Company.id }}</div>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  <span class="rounded-lg p-4 inline-flex text-xs font-semibold leading-5">
                    {{ Company.added_by_operator }}
                  </span>
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  <span class="rounded-lg p-4 inline-flex text-xs font-semibold leading-5">
                    {{ formatDate(Company.expiration_date) }}
                  </span>
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  <span class="rounded-lg p-4 inline-flex text-xs font-semibold leading-5">
                    {{ Company.licence_number }}
                  </span>
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  <span class="rounded-lg inline-flex text-xs font-semibold leading-5">
                    {{ Company.phone_number }}
                  </span>
                </td>

                <td
                  class="px-3 py-4 text-sm font-medium leading-5 text-justify border-b border-gray-200 whitespace-nowrap"
                >
                  <button>
                    <RouterLink
                      :to="'/companies/' + Company.id"
                      class="py-1 px-4 rounded-xl cursor-pointer bg-[#F1F2F6] text-[#272727] outline-none font-bold text-base border-none transition-all hover:shadow hover:bg-[#272727] hover:text-[#ececf4]"
                    >
                      Preview
                    </RouterLink>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <span class="text-2xl font-bold text-gray-700">Users</span>
  </div>
  <div class="">
    <div class="flex flex-col mt-2">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
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
                  Email
                </th>
                <th
                  class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Id
                </th>
                <th
                  class="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Terminated
                </th>

                <th class="px-2 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr
                class="hover:rounded-md hover:shadow-[rgba(0,_0,_0,_0.05)_0px_6px_24px_0px,_rgba(0,_0,_0,_0.08)_0px_0px_0px_1px] transition-all duration-200"
                v-for="u in users"
                :key="u.id"
              >
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <div>
                        <GenerateImage :firstName="u.first_name" :lastName="u.last_name" />
                      </div>
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u?.first_name }} {{ u.last_name }}
                      </div>
                      <!-- <div class="text-sm leading-5 text-gray-500">
                        {{ u.email }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    <span class="rounded-lg inline-flex text-xs font-semibold leading-5">
                      {{ u.email }}
                    </span>
                  </div>
                </td>

                <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    <span class="rounded-lg inline-flex text-xs font-semibold leading-5">
                      {{ u.id }}
                    </span>
                  </div>
                  <!-- <div class="text-sm leading-5 text-gray-500">
                </div> -->
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
                  class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="pl-2 flex justify-around">
                    <button>
                      <RouterLink
                        :to="'/users/' + u.id"
                        class="py-1 px-4 rounded-xl cursor-pointer bg-[#F1F2F6] text-[#272727] outline-none font-bold text-base border-none transition-all hover:shadow hover:bg-[#272727] hover:text-[#ececf4]"
                      >
                        Preview
                      </RouterLink>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
