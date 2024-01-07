<script setup lang="ts">
import RenderUser from '@/components/layout/Tables/RenderUsers.vue'
import Breadcrumb from '@/partials/Breadcrumb.vue'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import { ref } from 'vue'

// import { onMounted } from 'vue'
// import axios from 'axios'
// import { opApiConnection } from '@/Connection/ConnectionStrings'

//const company = ref()

// onMounted(async () => {
//   const userResponse = await axios.get(`${opApiConnection}/api/company/get-company/1`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   })
//   company.value = userResponse.data.data
// })
// update

interface Company {
  id: number
  account_number: string
  logo?: string
  main_contact_id?: number
  max_employees_allowed: number
  phone_number?: string
  send_registration?: boolean
  email?: string
  name: string
  country: string
  main_contact_name?: string
  created_at: string
  updated_at: string
}

const company: Company = {
  id: 1,
  name: 'DeviseHR',
  country: 'Libya',
  account_number: '123456',
  email: 'devisehr@devisehr.com',
  max_employees_allowed: 100,
  phone_number: '123456789',
  send_registration: false,
  main_contact_id: 1,
  logo: null,
  created_at: '2022-01-01',
  updated_at: '2022-01-01'
}

// style ref
const activeClass = ref('bg-opacity-25 text-black border-b-2 border-blue-500')
const inactiveClass = ref(
  'border-blue-900 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
)

const selectedTab = ref(0)

const update = ref(false)
</script>

<template>
  <!--Breadcrumb-->
  <Breadcrumb breadcrumb="Profile" />
  <!--Banner-->
  <main class="text-[#0f1419] bg-[#fefefd] rounded-md">
    <div class="max-w-6xl -my-2 mx-auto border border-solid">
      <header class="py-0 border-b border-solid">
        <!-- Header -->
        <div>
          <ul class="flex list-none">
            <li
              @click="selectedTab = 0"
              :class="[selectedTab === 0 ? activeClass : inactiveClass]"
              class="flex-1 text-center cursor-pointer"
              tabindex="0"
            >
              <div class="no-underline w-full whitespace-nowrap text-[#536471] font-bold px-4 py-0">
                <p class="py-4 px-0 relative duration-[0.2s]">Company Details</p>
              </div>
            </li>
            <li
              @click="selectedTab = 1"
              :class="[selectedTab === 1 ? activeClass : inactiveClass]"
              class="flex-1 text-center cursor-pointer"
              tabindex="0"
            >
              <div class="no-underline w-full whitespace-nowrap text-[#536471] font-bold px-4 py-0">
                <p class="py-4 px-0 relative duration-[0.2s]">Settings</p>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <main class="border-b border-solid border-black border-opacity-[0.1]">
        <!-- Profile Details Section Image and Name -->
        <div v-show="selectedTab === 0" class="flex flex-col">
          <section class="flex items-center flex-col py-6">
            <div class="max-w-[15%] max-f-[15%] top-[68%] left-[2%]">
              <div :class="company?.logo === null ? 'block' : 'hidden'">
                <GenerateImage
                  class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                  :firstName="company?.name"
                  :lastName="company?.country"
                />
              </div>
              <img
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                :class="company?.logo === null ? 'hidden' : 'block'"
                :src="company?.logo"
                alt="Your avatar"
              />
            </div>
            <div class="pt-2">
              <h1 class="font-extrabold text-xl whitespace-nowrap text-[#0f1419]">
                {{ company?.name }}
              </h1>
            </div>
          </section>
          <!-- Profile Details Section Tabs -->
          <section class="py-6 px-8">
            <div class="mt-4 bg-white shadow-sm rounded-lg">
              <div class="fancy-p">
                <div class="flex justify-between px-4 items-center mb-4">
                  <p class="font-bold text-lg text-gray-900">Company Details</p>
                  <div>
                    <a
                      type="button"
                      class="text-gray-900 bg-white hover:bg-gray-50 border border-gray-900 focus:ring-2 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 p-2 text-center inline-flex items-center"
                      @click="update = !update"
                      ><!----><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-5 mr-2 -ml-1"
                      >
                        <path
                          d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
                        ></path>
                        <path
                          d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
                        ></path></svg
                      ><span class="ltr:ml-2 rtl:mr-2">Modify Company Data</span></a
                    >
                  </div>
                </div>

                <div v-if="update" class="fancy-p">
                  <p class="card-header">Edit Super Root Details</p>
                  <form class="form">
                    <div class="grid grid-cols-2 gap-8">
                      <div>
                        <label class="block font-medium text-sm" for="name"
                          ><span>Full Name</span></label
                        ><input
                          class="border-3 border-gray-900 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder="{{ company?.name }}"
                          id="name"
                          type="text"
                          required
                          autofocus=""
                          autocomplete="name"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                      <div>
                        <label class="block font-medium text-sm" for="national_id"
                          ><span>Email</span></label
                        ><input
                          class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder="{{ company?.email }}"
                          id="national_id"
                          type="number"
                          required
                          pattern="[0-9]{14}"
                          autocomplete="off"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 mt-4">
                      <div>
                        <label class="block font-medium text-sm" for="phone"
                          ><span>Phone</span></label
                        ><input
                          class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder="{{ company?.phone }}"
                          id="phone"
                          type="text"
                          required
                          autocomplete="off"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                      <div>
                        <label class="block font-medium text-sm" for="email"
                          ><span>Main Contact</span></label
                        ><input
                          class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder=""
                          id="email"
                          type="email"
                          required
                          autocomplete="off"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 mt-4">
                      <div>
                        <label class="block font-medium text-sm" for="phone"
                          ><span>Country</span></label
                        ><input
                          class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder="{{ company?.country }}"
                          id="phone"
                          type="text"
                          required
                          autocomplete="off"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                      <div>
                        <label class="block font-medium text-sm" for="email"
                          ><span>Expiration Date</span></label
                        ><input
                          class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                          placeholder="{{ company?.expiration_date }}"
                          id="email"
                          type="email"
                          required
                          autocomplete="off"
                        />
                        <div class="mt-2" style="display: none">
                          <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-end mt-4">
                      <form class="inline">
                        <button
                          class="inline-flex items-center px-4 py-2 bg-purple-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:bg-red-700 ml-4"
                        >
                          Delete Employee
                        </button>
                      </form>
                      <button
                        class="inline-flex items-center px-4 py-2 bg-purple-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-600 active:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition ease-in-out duration-150 ltr:ml-4 rtl:mr-4"
                      >
                        Edit Employee
                      </button>
                    </div>
                  </form>
                </div>

                <div v-else class="overflow-hidden sm:rounded-lg py-4">
                  <dl>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ company?.name }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ company?.email }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Phone</dt>
                        <dd class="mt-1 text-sm text-gray-900">1000-100-5000</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Main Content</dt>
                        <dd class="mt-1 text-sm text-gray-900">Muhammed Lagha</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">country</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ company?.country }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Expiration Date</dt>
                        <dd class="mt-1 text-sm text-gray-900">12/12/2022</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500"></dt>
                        <dd class="mt-1 text-sm text-gray-900"></dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500"></dt>
                        <dd class="mt-1 text-sm text-gray-900"></dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500"></dt>
                        <dd class="mt-1 text-sm text-gray-900"></dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500"></dt>
                        <dd class="mt-1 text-sm text-gray-900"></dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- Notes Section -->
        <div v-show="selectedTab === 1" class="py-6 px-8">
          <header class="Details__header p-6">
            <h1 class="text-black text-2xl tracking-wide text-center uppercase">
              Company Settings
            </h1>
          </header>
        </div>
      </main>
      <footer class="p-4">
        <!-- Profile Details -->
        <div v-show="selectedTab === 0" class="flex flex-wrap items-center justify-center gap-4">
          <RenderUser />
        </div>
        <!-- Settings Section -->
        <div v-show="selectedTab === 1" class="flex flex-wrap px-16 gap-4">
          <div class="bg-gray-50 p-10 rounded-md w-full">
            <ul class="">
              <!-- Edit Company Main Content -->
              <li class="mb-6">
                <div class="flex items-center justify-between gap-4">
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">Edit Company Main Content</h3>
                      <small class="text-gray-600">
                        When replacing the company main content, make sure to replace the correct
                        number id.
                      </small>
                    </div>
                  </div>
                  <div class="group mt-8">
                    <input type="number" class="bg-gray-50" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Main Content Id</label>
                  </div>
                </div>
              </li>
              <!-- Edit Company Expiration Date -->
              <li class="mb-6">
                <div class="flex items-center justify-between gap-4">
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">Edit Company Expiration Date</h3>
                      <small class="text-gray-600">
                        When Editing the company expiration date, make sure to bik the correct date.
                      </small>
                    </div>
                  </div>
                  <div class="group mt-8">
                    <input type="date" class="bg-gray-50" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Expiration Id</label>
                  </div>
                </div>
              </li>
              <!-- Edit max amount of users in company -->
              <li class="mb-2">
                <div class="flex items-center justify-between gap-4">
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">
                        Edit max amount of users in company
                      </h3>
                      <small class="text-gray-600">
                        When Editing the max amount of users in company, make sure to bik the
                        correct number.
                      </small>
                    </div>
                  </div>
                  <div class="group mt-8">
                    <input type="number" class="bg-gray-50" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Max Amount</label>
                  </div>
                </div>
              </li>
              <!-- Other list items omitted for brevity -->
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.group {
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

/* LABEL ======================================= */
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

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
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

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
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
}
</style>
