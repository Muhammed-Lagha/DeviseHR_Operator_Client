export interface Company {
    id: number
    account_number: string
    added_by_operator: number
    logo?: string
    main_contact_id?: number
    max_employees_allowed: number
    phone_number?: string
    send_registration?: boolean
    email?: string
    name: string
    country: string
    main_contact_name?: string
    created_at: string
    updated_at: string
    licence_number: string
    expiration_date: string
    users:[{
      id: number
      first_name: string
      last_name: string
      email: string
      is_terminated: boolean
      is_verified: boolean
      role_id: null
      user_role: string
    }]
  }