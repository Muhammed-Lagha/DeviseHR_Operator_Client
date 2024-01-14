import { opApiConnection } from "@/utils/ConnectionStrings";
import axios from "axios";
import type { IServiceResponse } from "@/Types/IServiceResponse";
import type { ISearchResult } from "@/Types/ISearchResult";


const searchApi = async (searchInput: string | undefined, token: string | null) : Promise<IServiceResponse<ISearchResult>> => {
const response = await axios.get(
    `${opApiConnection}/api/company/find-company-and-users?searchTerm=${searchInput}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
    return response.data
}
export default searchApi