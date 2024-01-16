<script setup>
import { getOperatorById } from '@/Api/GetOperatorByIdApi'
import { getAuthToken } from '@/utils/getTokens'

const props = defineProps({
  id: { type: Number, required: true }
})
const findOperatorById = async () => {
  const token = getAuthToken()
  const data = await getOperatorById(token, props.id)
  return data.first_name
}
</script>

<template>
  <div>
    <p class="font-bold text-lg">{{ await findOperatorById() }}</p>
  </div>
</template>
