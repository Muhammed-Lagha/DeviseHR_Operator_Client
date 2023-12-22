<script setup lang="ts">
import type { company } from '@/Types/Company.ts';
import { onMounted, ref } from 'vue';
import DHR from '@/assets/Companies Logo/DHR.png';
import Companies from '@/components/icons/SideNaveIcons/Companies.vue';
import axios from 'axios';
import { opApiConnection, token } from '@/ConnectionStrings';

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

const companies = ref<company[]>([
  {
    id: 1,
    account_number: '13NH56',
    logo: DHR,
    name: 'DeviseHR',
    country: 'libya',
    main_contact_name: 'Muhammad lagha',
    created_at: '12-12-2023',
    updated_at: '22-12-2023',
  },
]);
</script>

<template>
  <div
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
        <!-- <tfoot>
                My footer
        </tfoot> -->
      </table>
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
