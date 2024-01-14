<template>
  <form
    @submit.prevent="search()"
    class="relative flex items-center w-full h-10 border-[1px] border-gray-400 rounded-lg focus:border-green-600 focus-within:shadow-lg bg-white overflow-hidden"
  >
    <button @click="search()" class="grid place-items-center h-full w-12 text-gray-300">
      <SearchIcon class="w-3 h-3" />
    </button>

    <input
      class="max-w-96 outline-none text-sm text-gray-700 pr-2"
      type="text"
      placeholder="Search DeviseHR"
      v-model="searchInput"
    />
  </form>
</template>

<script lang="ts" setup>
import SearchIcon from '@/components/icons/TopNav/Search/Search.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchInput = ref('')

const search = () => {
  router.push({ name: 'searchResults', query: { search: searchInput.value } })
  document.title = `DeviseHR - ${searchInput.value || 'Search'}`
}

// const keyHandler = (event: KeyboardEvent) => {
//   if (event.key === 'Enter') {
//     search()
//   }
// }
// onMounted(() => {
//   document.addEventListener('keydown', keyHandler)
// })
</script>
