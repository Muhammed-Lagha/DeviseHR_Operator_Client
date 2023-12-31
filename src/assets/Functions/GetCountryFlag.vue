<template>
  <span>{{ getFlag(props.countryName) }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  countryName: string
}>()

const getFlag = (countryName: string) => {
  switch (countryName) {
    case 'Tunisia':
      return '🇹🇳'
    case 'Egypt':
      return '🇪🇬'
    case 'Algeria':
      return '🇩🇿'
    case 'Morocco':
      return '🇦🇷'
    case 'Libya':
      return '🇱🇾'
    default:
      return ''
  }
}


</script>
