<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { refreshRequest } from '@/Api/AuthRequestsApi'
import type { TLoginRefreshUserResponse } from '@/Types/LoginAndRefreshResponse'
import { addTokensToCookies, clearTokenCookies, getTokensFromCookies } from '@/utils/getTokens'
import useUserStore from './stores/UserStore'
import router from './router'

const defaultLayout = 'default'

const { currentRoute } = useRouter()
const userStore = useUserStore()

onMounted(async () => {
  if (window.location.pathname !== '/registration') {
    console.log('hi3')

    const [token, refreshToken] = getTokensFromCookies()
    let userDate: TLoginRefreshUserResponse = await refreshRequest(token, refreshToken)

    if (userDate.success === true) {
      addTokensToCookies(userDate.token, userDate.refreshToken)

      setInterval(
        async () => {
          const [token, refreshToken] = getTokensFromCookies()
          userDate = await refreshRequest(token, refreshToken)

          if (userDate.success) {
            userStore.user.id = userDate.data.id
            userStore.user.user_role = userDate.data.user_role
            addTokensToCookies(userDate.token, userDate.refreshToken)
          }
        },
        1000 * 60 * 14
      )

      userStore.user.email = userDate.data.email
      userStore.user.firstName = userDate.data.first_name
      userStore.user.lastName = userDate.data.last_name
      userStore.user.id = userDate.data.id
      userStore.user.user_role = userDate.data.user_role
      userStore.user.profile_picture = userDate.data.profile_picture
    } else {
      clearTokenCookies()
      router.push('/login')
    }
  }
})

const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)
</script>
