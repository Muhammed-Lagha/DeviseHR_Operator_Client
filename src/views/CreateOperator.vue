<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Create Operator" />
    <div class="mt-5 ">
      <CreateOperatorForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue';
import CreateOperatorForm from '@/components/layout/Forms/CreateOperatorForm.vue';
</script>
