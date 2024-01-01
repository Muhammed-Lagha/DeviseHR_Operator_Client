export type TLoginRefreshUserResponse = {
  data: {
    id: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    profile_picture: null
    is_terminated: boolean
    is_verified: boolean
    user_role: string
    created_at: string
    updated_at: string
    refresh_tokens: any[] // You can replace 'any' with a more specific type if needed
    added_by: number
    updated_by_oprtator: null
    verfication_code: null
    login_attempt: number
    last_login_time: string
    last_active_time: string
  }
  token: string
  refreshToken: string
  success: boolean
  message: string
}
