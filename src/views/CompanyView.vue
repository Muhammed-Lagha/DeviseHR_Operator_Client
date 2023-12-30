<template>
  <!--  -->
  <Breadcrumb breadcrumb="Companies" />

  <div class="pt-0 max-h-fit flex flex-col">
    <RenderCompanies />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import RenderCompanies from '../components/layout/Tables/RenderCompanies.vue'

</script>

<style></style>
