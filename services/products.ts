import { Product } from "@prisma/client"
import { axiosInstanse } from "./instance"
import { ApiRoutes } from "./constants"

export const search = async (query: string): Promise <Product[]> => {
  return (await axiosInstanse.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {params : {query}})).data
}