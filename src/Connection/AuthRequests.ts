import { opApiConnection } from '@/Connection/ConnectionStrings'
import { getTokensFromCookies } from '@/helpers/getTokens'
import axios from 'axios'

export const loginRequest = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${opApiConnection}/api/operator-logging/login`, {
        email,
        password
      })
  
      return response.data
    } catch (err) {
      return err
    }
}

export const refreshRequest = async (token: string, refreshToken: string) => {
  try {
    const response = await axios.post(
      `${opApiConnection}/api/operator-logging/refresh`,
      {
        refreshToken
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  } catch (error) {
    return {
      data: null,
      error: error,
      success: false
    }
  }
}

