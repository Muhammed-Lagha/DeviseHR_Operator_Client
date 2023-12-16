<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Operator from '../../icons/SideNav/Operator.vue'
import Companies from '../../icons/SideNav/Companies.vue'
import Analytics from '../../icons/SideNav/Analytics.vue'
import Logout from '../../icons/SideNav/Logout.vue'
</script>

<template>
  <div
    className="fixed bottom-0 top-[62px] left-0
      flex justify-between bg-[#404448] 
      text-white shadow-sm h-full w-16 flex-col pt-16"
  >
    <div>
      <RouterLink
        class="tooltip relative flex items-center justify-center h-12 w-12 mx-2 rounded-[100%] hover:text-[#f2f3f4] text-gray-300 my-2 hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:rounded-2xl transition-all duration-200 cursor-pointer"
        to="/operators"
      >
        <i>
          <Operator />
        </i>
        <span
          class="tooltip__content bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] text-white text-center rounded-md py-2 px-4 absolute z-50 left-16"
          >Operators</span
        >
      </RouterLink>
      <RouterLink
        class="tooltip relative flex items-center justify-center h-12 w-12 mx-2 rounded-[100%] hover:text-[#f2f3f4] text-gray-300 my-2 hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:rounded-2xl transition-all duration-200 cursor-pointer"
        to="/companies"
      >
        <i><Companies /></i>
        <span
          class="tooltip__content bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] text-white text-center rounded-md py-2 px-4 absolute z-[1] left-16"
          >Companies</span
        >
      </RouterLink>
      <RouterLink
        class="tooltip relative flex items-center justify-center h-12 w-12 mx-2 rounded-[100%] hover:text-[#f2f3f4] text-gray-300 my-2 hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:rounded-2xl transition-all duration-200 cursor-pointer"
        to="/analytics"
      >
        <i><Analytics /></i>
        <span
          class="tooltip__content bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] text-white text-center rounded-md py-2 px-4 absolute z-[1] left-16"
          >Analytics</span
        >
      </RouterLink>
      <div class="pt-60 space-y-2">
        <a
          href="#"
          class="tooltip relative flex items-center justify-center h-12 w-12 mx-2 rounded-[100%] hover:text-[#f2f3f4] text-gray-300 my-2 hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:rounded-2xl transition-all duration-200 cursor-pointer"
        >
          <i><Logout /></i>
          <span
            class="tooltip__content bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] text-white text-center rounded-md py-2 px-4 absolute z-[1] left-16"
            >Logout</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip .tooltip__content {
  visibility: hidden;
}
.tooltip:hover .tooltip__content,
.tooltip:focus .tooltip__content {
  visibility: visible;
}
</style>
