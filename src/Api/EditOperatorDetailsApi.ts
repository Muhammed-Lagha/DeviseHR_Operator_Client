import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editOperatorEmail = async (token: string, email: string, userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                email
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data.data
    } catch (error) {
        console.error('Error:', error)
    }
}
export const editOperatorFirstName = async (token: string, firstName: string, userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                firstName
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data.data
    } catch (error) {
        console.error('Error:', error)
    }
}

export const editOperatorLastName = async (token: string, lastName: string, userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                lastName
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data.data
    } catch (error) {
        console.error('Error:', error)
    }
}

export const editOperatorRole = async (token: string, role: string, userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                role
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data.data
    } catch (error) {
        console.error('Error:', error)
    }
}

