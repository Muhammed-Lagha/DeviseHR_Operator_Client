<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { opApiConnection } from '@/Connection/ConnectionStrings'

const user = ref()

onMounted(async () => {
  const userResponse = await axios.get(`${opApiConnection}/api/company/get-user/1`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  user.value = userResponse.data.data
})
// update

// style ref
const activeClass = ref('bg-opacity-25 text-black border-b-2 border-blue-500')
const inactiveClass = ref(
  'border-blue-900 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
)

const selectedTab = ref(0)
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
                <p class="py-4 px-0 relative duration-[0.2s]">Profile Details</p>
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
          <section class="flex items-center justify-center flex-col py-6">
            <div class="max-w-[15%] max-f-[15%] top-[68%] left-[2%]">
              <div :class="user?.profile_picture === null">
                <GenerateImage
                  class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                  :firstName="user?.first_name"
                  :lastName="user?.last_name"
                />
              </div>
              <img
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                :class="user?.profile_picture === null ? 'hidden' : 'block'"
                :src="user?.profile_picture"
                alt="Your avatar"
              />
              <!-- <img
                src="https://avatars.githubusercontent.com/u/114949720?v=4"
                alt="Profile Picture"
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
              /> -->
            </div>
            <div class="pt-2">
              <h1 class="font-extrabold text-xl whitespace-nowrap text-[#0f1419]">
                {{ user?.first_name }} {{ user?.last_name }}
              </h1>
            </div>
          </section>
          <section class="py-2 px-8">
            <!-- Buttons Section -->
            <nav class="flex justify-end items-center group-[10px]">
              <button
                class="p-2 text-[#0f1419] text-sm font-semibold rounded-full hover:transition-[0.5s] hover:bg-[#eafef3] hover:text-[#2ecc71]"
              >
                Verify
              </button>
              <button
                class="p-2 text-[#0f1419] text-sm font-semibold rounded-full hover:transition-[0.5s] hover:bg-[#fad7e3] hover:text-[#df8fa8]"
              >
                Terminate
              </button>
            </nav>
          </section>
        </div>
        <!-- Notes Section -->
        <div v-show="selectedTab === 1" class="py-6 px-8">
          <header class="Details__header p-6">
            <h1
              class="Details__title text-black text-2xl font-light tracking-wide text-center uppercase"
            >
              Settings
            </h1>
          </header>
        </div>
      </main>
      <footer class="p-4">
        <!-- Profile Details -->
        <div v-show="selectedTab === 0" class="flex flex-wrap px-16 gap-4">
          <!-- Name -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Name</p>
            <h1 class="font-bold text-xl whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.first_name }} {{ user?.last_name }}
            </h1>
          </div>
          <!-- Company Name -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Company Name</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              DeviseHR
            </h1>
          </div>
          <!-- Email -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Email</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.email }}
            </h1>
          </div>
          <!-- Date of Birth -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Date of Birth</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              01/01/2000
            </h1>
          </div>
          <!-- Phone -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Phone Number</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              0300-1234567
            </h1>
          </div>
          <!-- UserRole -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Role</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.role }}
            </h1>
          </div>
          <!-- Verified Status -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Verified Status</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              Verified
            </h1>
          </div>
        </div>

        <!-- Notes -->
        <div v-show="selectedTab === 1" class="flex flex-wrap px-16 gap-4">
          <div class="bg-gray-50 p-10 rounded-md">
            <ul class="">
              <!-- Edit Company Main Content -->
              <li class="mb-6">
                <div class="flex items-center justify-between gap-4">
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">Edit User email</h3>
                      <small class="text-gray-600">
                        When replacing the User email, make sure to edit the correct email.
                      </small>
                    </div>
                  </div>
                  <div class="group mt-8">
                    <input type="email" class="bg-gray-50 input" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                </div>
              </li>
              <li class="mb-6">
                <div class="flex items-center justify-between gap-4">
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">Reset User Password</h3>
                      <small class="text-gray-600">
                        When resetting the User password, make sure to edit the correct password.
                      </small>
                    </div>
                  </div>

                  <div class="mt-8 inline-flex items-center">
                    <input
                      class="relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                      type="checkbox"
                      checked
                    />
                    <span
                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
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
.input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}
.input:focus {
  outline: none;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
.input:focus ~ label,
.input:valid ~ label {
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
.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
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
.input:focus ~ .highlight {
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
