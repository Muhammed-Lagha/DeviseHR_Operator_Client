export interface ISearchResult {
    companies: ICompany[];
    users: IUser[];
  }
  

export  interface ICompany {
    account_number: string;
    added_by_operator: number;
    expiration_date: string;
    id: number;
    licence_number: string;
    name: string;
    phone_number: string;
  }
  
export interface IUser {
    email: string;
    first_name: string;
    id: number;
    is_terminated: boolean;
    last_name: string;
    verification_code: null | string;
  }