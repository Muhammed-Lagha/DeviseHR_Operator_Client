<script setup lang="ts">
import RenderUser from '@/components/layout/Tables/RenderUsers.vue'
import Breadcrumb from '@/partials/Breadcrumb.vue'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import { ref } from 'vue'
import type { Company } from '@/Types/Company'
import { onMounted } from 'vue'
import { getCompanyById } from '@/Api/GetCompanyByIdApi'
import { getAuthToken } from '@/utils/getTokens'
import { useRouter } from 'vue-router'

const router = useRouter()
const companyId = router.currentRoute._value.params.id
//const Companies = ref<Company[]>([])
const company = ref<Company>()

onMounted(async () => {
  console.log(companyId)
  const token = getAuthToken()
  if (token) company.value = await getCompanyById(token, Number(companyId))
  console.log(company.value)
})

// style ref
// const activeClass = ref('bg-opacity-25 text-black border-b-2 border-blue-500')
// const inactiveClass = ref(
//   'border-blue-900 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
// )

// const selectedTab = ref(0)

// const update = ref(false)
</script>

<template>
  <div>
    <Breadcrumb :breadcrumb="company?.name!" />
    <main class="text-[#0f1419] bg-[#fefefd] rounded-md">
      <div class="max-w-6xl -my-2 mx-auto border border-solid">
        <div class="border-b border-solid border-black border-opacity-[0.1]">
          <div class="flex flex-col">
            <section class="py-2 px-8">
              <div class="mt-4 bg-white shadow-sm rounded-lg">
                <div class="fancy-p">
                  <div class="flex justify-between px-4 items-center mb-4">
                    <div class="font-bold text-lg">Basic Info</div>
                    <div class="max-w-[15%] max-f-[15%] top-[68%] left-[2%]">
                      <div>
                        <GenerateImage
                          class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                          :firstName="company?.name!"
                          :lastName="company?.name!"
                        />
                      </div>
                    </div>
                    <div class=""></div>
                  </div>
                  <div class="overflow-hidden sm:rounded-lg py-4">
                    <dl>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Name</dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            {{ company?.name }}
                          </dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Id</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.id }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Email</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.email }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Account Number</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.account_number }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Added By Operator</dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            {{ company?.added_by_operator }}
                          </dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Phone Number</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.phone_number }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Main Contact Name</dt>
                          <dd
                            class="mt-1 text-sm text-gray-900"
                            v-for="user in company?.users"
                            :key="user.id"
                          >
                            {{
                              company?.main_contact_id == user.id
                                ? user.first_name + ' ' + user.last_name
                                : ''
                            }}
                          </dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Main Contact Id</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.main_contact_id }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Licence Number</dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            {{ company?.licence_number }}
                          </dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                          <dt class="text-sm font-medium text-gray-500">Expiration Date</dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            {{ company?.expiration_date }}
                          </dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Created At</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.created_at }}</dd>
                        </div>
                        <div class="px-4 py-3.5 col-span-1">
                          <dt class="text-sm font-medium text-gray-500">Updated At</dt>
                          <dd class="mt-1 text-sm text-gray-900">{{ company?.updated_at }}</dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- <footer class="p-4"></footer> -->
        <div class="p-4 mt-2">
          <div class="">
            <h2 class="ml-5 text-xl font-semibold leading-tight text-gray-700">Users</h2>
            <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        User
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        Id
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        Email
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        Role
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        Terminated
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      >
                        Verified
                      </th>
                      <th
                        class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in company?.users" :key="user.id">
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div class="flex items-center">
                          <div class="ml-0">
                            <p
                              class="text-gray-900 whitespace-nowrap rounded-lg inline-flex text-xs font-semibold leading-5"
                            >
                              {{ user.first_name }} {{ user.last_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p
                          class="text-gray-900 whitespace-nowrap rounded-lg inline-flex text-xs font-semibold leading-5"
                        >
                          {{ user.id }}
                        </p>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p
                          class="text-gray-900 whitespace-nowrap rounded-lg inline-flex text-xs font-semibold leading-5"
                        >
                          {{ user.email }}
                        </p>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p
                          class="text-gray-900 whitespace-nowrap rounded-lg inline-flex text-xs font-semibold leading-5"
                        >
                          {{ user.user_role }}
                        </p>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p
                          class="text-gray-900 whitespace-nowrap rounded-lg p-4 inline-flex text-xs font-semibold leading-5"
                        >
                          {{ user.is_terminated === true ? 'Yes' : 'No' }}
                        </p>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p
                          class="text-gray-900 whitespace-nowrap rounded-lg p-4 inline-flex text-xs font-semibold leading-5"
                        >
                          {{ user.is_verified === true ? 'Yes' : 'No' }}
                        </p>
                      </td>
                      <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div class="flex justify-around">
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
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
                >
                  <span class="text-xs text-gray-900 xs:text-sm">Showing 1 to 4 of 50 Entries</span>

                  <div class="inline-flex mt-2 xs:mt-0">
                    <button
                      class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                    >
                      Prev
                    </button>
                    <button
                      class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* .group {
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='date']:required:invalid::-webkit-datetime-edit {
  color: transparent;
}
input[type='date']:focus::-webkit-datetime-edit {
  color: black !important;
}


label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}


.bar {
  position: relative;
  display: block;
  width: 300px;
}
.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}


input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}


input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}


@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
} */
</style>
