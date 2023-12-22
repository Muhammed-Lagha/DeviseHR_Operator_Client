<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainComponent from "@/components/MainComponent.vue";

</script>

<template>
  <MainComponent />
  <RouterView />
</template>

<style scoped></style> -->

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const defaultLayout = 'default'

const { currentRoute } = useRouter()

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)
</script>
