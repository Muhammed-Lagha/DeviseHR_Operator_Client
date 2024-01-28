<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
      aria-hidden="true"
    ></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref="modalContent"
        class="bg-gray-100 border border-transparent overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
      >
        <!-- Search form -->
        <form class="border-b border-slate-200">
          <div class="relative">
            <label :for="searchId" class="sr-only">Search</label>
            <input
              :id="searchId"
              class="w-full dark:text-slate-300 bg-gray-100 border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
              type="search"
              placeholder="Search Anything…"
              ref="searchInput"
            />
            <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
              <SearchIcon class="w-4 h-4 fill-slate-300 group-hover:fill-slate-400" />
            </button>
          </div>
        </form>
        <div class="py-4 px-2">
          <!-- Recent searches -->
          <div class="mb-3 last:mb-0">
            <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
              Recent searches
            </div>
            <ul class="text-sm">
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Form Builder - 23 hours on-demand video</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Access Mosaic on mobile and TV</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Product Update - Q4 2021</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Master Digital Marketing Strategy course</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Dedicated forms for products</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                    />
                  </svg>
                  <span>Product Update - Q4 2021</span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Recent pages -->
          <div class="mb-3 last:mb-0">
            <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent pages</div>
            <ul class="text-sm">
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
                    />
                  </svg>
                  <span
                    ><span class="font-medium">Messages</span> -
                    <span class="text-slate-600 group-hover:text-white"
                      >Conversation / … / Mike Mills</span
                    ></span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <svg
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
                    />
                  </svg>
                  <span
                    ><span class="font-medium">Messages</span> -
                    <span class="text-slate-600 group-hover:text-white"
                      >Conversation / … / Eva Patrick</span
                    ></span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import SearchIcon from '@/components/icons/TopNav/Search/Search.vue'

const props = defineProps({
  id: {
    type: String,
    default: 'default-modal'
  },
  searchId: {
    type: String,
    default: 'search-modal'
  },
  modalOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['open-modal', 'close-modal'])

const modalContent = ref(null as any)
const searchInput = ref(null as any)

// close on click outside
const clickHandler = ({ target }: { target: any }) => {
  if (!props.modalOpen || modalContent.value.contains(target)) return
  emit('close-modal')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: { keyCode: number }) => {
  if (!props.modalOpen || keyCode !== 27) return
  emit('close-modal')
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(
  () => props.modalOpen,
  (open) => {
    open && nextTick(() => searchInput.value.focus())
  }
)
</script>
