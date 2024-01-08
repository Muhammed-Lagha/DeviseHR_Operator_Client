export interface Operator {
    firstName: string
    lastName: string
    role: 'admin' | 'manager' | 'employee'
    email: string
    sendRegistration: boolean
  }

  