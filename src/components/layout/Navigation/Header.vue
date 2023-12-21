<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '../../../hooks/useSidebar'
import { useRouter } from 'vue-router'
import BurgerIcon from '../../icons/TopNav/burger menu/BurgerIcon.vue'
import BellIcon from '../../icons/TopNav/Bell/BellIcon.vue'
import ArrowIcon from '../../icons/TopNav/P&A/ArrowIcon.vue'
import PlusIcon from '../../icons/TopNav/P&A/PlusIcon.vue'
import SearchIcon from '../../icons/TopNav/Search/Search.vue'
import Operator from '../../icons/TopNav/Operator/OperatorIcon.vue'
import company from '../../icons/TopNav/company/Company.vue'
import NoteIcon from '../../icons/TopNav/Note/NoteIcon.vue'
import ProfileIcon from '../../icons/TopNav/user Profile/ProfileIcon.vue'
import Settings from '../../icons/TopNav/Settings/Settings.vue'
import Logout from '../../icons/SideNav/Logout.vue'


const dropdownOpen = ref(false)
const { isOpen } = useSidebar()
const notificationOpen = ref(false)
const createNew = ref(false)
</script>

<template>
  <header
    class="flex items-center justify-between px-6 py-2 bg-gray-100 border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <!-- hamburger menu -->
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <burgerIcon />
      </button>
        <!-- search -->
      <div class="max-w-md mx-4">
        <div
          class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
        >
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <searchIcon />
          </div>

          <input
            class="w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            placeholder="Search something.."
          />
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex items-center justify-end gap-2">
        <!-- create new -->
        <div class="relative">
          <button
            class="flex p-1 text-gray-600 border-[1px] border-black rounded-md focus:outline-none"
            @click="createNew = !createNew"
          >
            <PlusIcon />
            <ArrowIcon />
          </button>
          <div
            v-show="createNew"
            class="absolute right-0 mt-2 w-44 py-3 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            style="width: 11rem"
          >
            <RouterLink
              to="/CreateOperator"
              class="flex items-center justify-center  text-gray-600"
            >
              <div class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-indigo-600">
                <operator />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create Operator
                </span>
              </div>
            </RouterLink>

            <RouterLink
              to="/CreateCompany"
              class="flex items-center justify-center  text-gray-600 "
            >
              <div class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-indigo-600">
                <company />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create Company
                </span>
              </div>
            </RouterLink>

            <RouterLink
              to="/CreateCompany"
              class="flex items-center justify-center text-gray-600 hover:text-white"
            >
              <div class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-indigo-600">
                <NoteIcon />
                <span class="mx-5 text-xs  font-semibold flex flex-row justify-between">
                  Create Note
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
          <!-- Notification -->
        <div class="relative">
          <button
            @click="notificationOpen = !notificationOpen"
            class="flex mr-4 p-1 text-gray-600 border-[1px] border-black rounded-md focus:outline-none"
          >
            <BellIcon />
          </button>

          <div
            v-show="notificationOpen"
            @click="notificationOpen = false"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="notificationOpen"
            class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            style="width: 20rem"
          >
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Evan Josh</span> replied on the
                <span class="font-bold text-indigo-400" href="#">Upload Image</span>
                artical . 2m
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Slick Net</span> start following you . 45m
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Jane Doe</span> Like Your reply on
                <span class="font-bold text-indigo-400" href="#">Test with TDD</span>
                artical . 1h
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Abigail Bennett</span>
                start following you . 3h
              </p>
            </a>
          </div>
        </div>
      </div>
      <!-- Avatar -->
      <div class="relative">
        
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        >
          <img
            class="object-cover w-full h-full "
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>
        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white rounded-lg shadow-xl"
          >
            <a
              href="#"
              class="px-4 py-2 flex rounded-md text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              <ProfileIcon />
              Profile</a
            >
            <a
              href="#"
              class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
             <settings />
              Settings</a
            >
            <router-link
              to="/"
              class="flex px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              <Logout />
              Log out</router-link
            >
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
