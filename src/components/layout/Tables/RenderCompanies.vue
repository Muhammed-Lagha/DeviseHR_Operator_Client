<script setup lang="ts">
import type { company } from '@/Types/Company'
import { onMounted, ref } from 'vue'
import Companies from '@/components/icons/SideNav/Companies.vue'
import GetCountryFlag from '@/assets/Functions/GetCountryFlag.vue'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import GetOperatorById from '@/Connection/GetOperatorById'

//import axios from 'axios'
//import { opApiConnection, token } from '@/ConnectionStrings';
//import GetCountryFlag from '../../../assets/Functions/GetCountryFlag.vue';

// const getCompanies = async () => {
//   const companiesResponse = await axios.get(
//     `${opApiConnection}/api/admin-company/companies`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   companies.value = companiesResponse.data.data;
//   console.log(companies.value);
// };

// onMounted(async () => {
//   await getCompanies();
// });

// const companies = ref<company[]>([
//   {
//     id: 1,
//     account_number: '13NH56',
//     logo: 'https://picsum.photos/200/300',
//     name: 'DeviseHR',
//     country: 'libya',
//     main_contact_name: 'Muhammad lagha',
//     created_at: '12-12-2023',
//     updated_at: '22-12-2023'
//   }
// ])

interface Company {
  id: number
  name: string
  licence_number: string
  account_number: string
  logo?: string | null
  country: string
  main_contact_id: number
  updated_at: string
  phone_number: string
  added_by_operator: number
}

const testCompany: Company = {
  id: 1,
  name: 'DeviseHR',
  licence_number: '123456',
  account_number: '123456',
  logo: null,
  country: 'Libya',
  main_contact_id: 1,
  updated_at: '2022-01-01',
  phone_number: '08012345678',
  added_by_operator: 1
}

const companies = ref<Company[]>([...Array(10).keys()].map(() => testCompany))

//const operator = GetOperatorById(companies.value[i].added_by_operator)
</script>

<template>
  <!-- <div
    class="rounded-2xl bg-[#FCFCFD] p-6 w-11/12 m-4 max-w-fit border-2 border-solid border-[#EDEEF1] shadow-[0px_4px_16px_0px_rgba(148,156,169,0.15)] text-center min-h-[80px]"
  >
    <span
      class="flex w-full items-center text-lg font-bold text-center pb-4 border-b-2 border-b-[#EDEEF1]"
    >
      <span class="flex gap-3">
        <Companies />
        Companies List
      </span>
      <span
        class="text-sm font-bold bg-[#F1F2F6] p-2 inline-flex items-center ml-4 rounded-lg"
      >
        {{ companies.length }}</span
      >
    </span>
    <div class="overflow-x-auto overflow-y-auto pb-4 table-wrapper">
      <table class="max-w-fit border-collapse table-fixed">
        <thead class="sticky">
          <tr class="">
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#A0A7B1] bg-[#F4F5FC] sticky z-[1] top-0 left-0"
            >
              Company
            </th>
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#A0A7B1] bg-[#F4F5FC]"
            >
              CompanyId
            </th>
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#A0A7B1] bg-[#F4F5FC]"
            >
              Account Number
            </th>
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#a0a7b1] bg-[#F4F5FC]"
            >
              Country
            </th>

            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#a0a7b1] bg-[#F4F5FC]"
            >
              Main Contact Name
            </th>
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#a0a7b1] bg-[#F4F5FC]"
            >
              Created At
            </th>
            <th
              class="pt-3 pr-3 pb-3 pl-2 text-sm w-fit whitespace-nowrap text-[#a0a7b1] bg-[#F4F5FC] sticky z-[1] top-0 right-0"
            ></th>
          </tr>
        </thead>
        <tbody id="table-rows">
          <tr v-for="company in companies" :key="company.id">
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1] bg-[#FCFCFD] sticky z-[1] top-0 left-0 stock"
            >
              <div class="flex items-center gap-2">
                <img class="w-8 h-8 object-contain" :src="company.logo" />
                <div class="flex flex-col gap-2">
                  <span class="font-bold"> {{ company.name }} </span>
                  <span class="font-bold whitespace-nowrap"> </span>
                </div>
              </div>
            </td>
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <span class="font-medium">
                {{ company.id }}
              </span>
            </td>
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <span class="font-medium">
                {{ company.account_number }}
              </span>
            </td>
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <span class="font-medium">
                {{ company.country }}
              </span>
            </td>
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <span
                class="p-2 rounded-lg font-semibold text-[#9db1f9] bg-[#dce3fd] first-letter:uppercase"
              >
                {{ company.main_contact_name }}
              </span>
            </td>
            <td
              class="pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <span class="font-medium">
                {{ company.created_at }}
              </span>
            </td>
            <td
              class="sticky z-[1] top-0 right-0 bg-[#FCFCFD] pt-3 pr-3 pb-3 pl-2 align-middle whitespace-nowrap border-b-2 border-b-[#EDEEF1]"
            >
              <button
                class="rounded-xl bg-[#F1F2F6] text-[#272727] outline-none font-bold text-base border-none cursor-pointer transition-all py-2 px-4 hover:shadow hover:bg-[#272727] hover:text-[#ececf4]"
              >
                Preview
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
  <div class="flex flex-col mt-8">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
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
                Country
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Main Contact
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Added By
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Updated
              </th>
              <!-- <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Phone
              </th> -->
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="Company in companies" :key="Company.id">
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <div :class="Company.logo === null">
                      <GenerateImage :firstName="Company.name" :lastName="Company.name" />
                    </div>
                    <img
                      class="w-10 h-10 rounded-full"
                      :class="Company.logo === null ? 'hidden' : 'block'"
                      :src="Company.logo"
                      alt=""
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      {{ Company.name }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      Id {{ Company.id }} || Account {{ Company.account_number }}
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="px-2 text-sm leading-5 text-gray-900">
                  {{ Company.country }}
                </div>
                <div class="px-2">
                  <GetCountryFlag :countryName="Company.country" />
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                >
                  muhammed Lagha
                </div>
                <div class="">
                  <span
                    class="inline-flex px-2 text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-md"
                    >Main Contact Id > {{ Company.main_contact_id }}</span
                  >
                </div>
              </td>

              <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                M Lagha
                {{ Company.added_by_operator }}
              </td>

              <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                {{ Company.updated_at }}
              </td>

              <!-- <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                {{ Company.phone_number }}
              </td> -->

              <td
                class="px-3 py-4 text-sm font-medium leading-5 text-justify border-b border-gray-200 whitespace-nowrap"
              >
                <RouterLink :to="`/operators/${Company.id}`">
                  <button
                    class="py-1 px-4 rounded-xl cursor-pointer bg-[#F1F2F6] text-[#272727] outline-none font-bold text-base border-none transition-all hover:shadow hover:bg-[#272727] hover:text-[#ececf4]"
                  >
                    Preview
                  </button>
                </RouterLink>
                <!-- <div class="flex justify-around">
                  <span class="text-yellow-500 flex justify-center">
                    <a href="#" class="mx-2 px-2 rounded-md"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-green-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                    <form method="POST">
                      <button class="mx-2 px-2 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-red-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </form>
                  </span>
                </div> -->
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
