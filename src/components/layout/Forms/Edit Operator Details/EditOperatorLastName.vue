<script setup lang="ts">
import EditNameIconVue from '@/components/icons/other/EditNameIcon.vue'
import { editOperatorLastName } from '@/Api/EditOperatorDetailsApi'
import { getAuthToken } from '@/utils/getTokens'
import { ref } from 'vue'

const props = defineProps<{
  userId?: number
}>()

const last_name = ref('')

const editEmail = async () => {
  const token = getAuthToken()
  if (token) await editOperatorLastName(token, last_name.value, props.userId)
}

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
</script>
<template>
  <el-button class="main" @click="dialogFormVisible = true">
    <el-icon><EditNameIconVue /></el-icon>
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Edit Last Name">
    <el-form>
      <el-form-item label="first name" :label-width="formLabelWidth">
        <el-input v-model="last_name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editEmail"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.main {
  margin-right: 5px;
  border: 0cap;
  background-color: #f1f5f9;
}
.el-button--text {
  margin-right: 15px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
