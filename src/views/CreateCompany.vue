<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import CreateCompanyForm from '@/components/layout/Forms/CreateCompanyForm.vue'
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Create Company" />

    <div class="mt-5">
      <CreateCompanyForm />
    </div>
  </div>
</template>
