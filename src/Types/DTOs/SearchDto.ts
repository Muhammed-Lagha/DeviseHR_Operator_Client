export interface SearchCompany {
    id: number
    name: string
    licence_number: string
    account_number: string
    expiration_date: string
    phone_number: string
    added_by_operator: number
}

export interface SearchUser {
    id: number
    first_name: string
    last_name: string
    email: string
    is_terminated: boolean
    verification_code: null | string
}