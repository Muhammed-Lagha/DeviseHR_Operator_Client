<template>
  <nav class="text-sm font-semibold mb-4" aria-label="Breadcrumb">
    <ol class="list-none p-0 inline-flex">
      <li class="flex items-center text-purple">
        <a href="/Home" class="text-gray-500">Home</a>
        <RightArrowIcon class="w-3 h-3 mx-3" />
      </li>
      <li :key="breadcrumb" class="flex items-center">
        <a :href="'/' + breadcrumb" class="text-gray-600">{{
          breadcrumbName
        }}</a>
      </li>
    </ol>
  </nav>
</template>
<script lang="ts" setup>
import RightArrowIcon from '@/components/icons/other/RightArrow.vue'
import { defineProps, computed } from 'vue'
const props = defineProps<{ breadcrumb: string }>()
const breadcrumbName = computed(() => {
  return props.breadcrumb.toUpperCase()
})
</script>
