import { Ingredient, Product } from "@prisma/client"
import { axiosInstanse } from "./instance"
import { ApiRoutes } from "./constants"

export const getAll = async (): Promise <Ingredient[]> => {
  return (await axiosInstanse.get<Ingredient[]>(ApiRoutes.INGREDIENTS, )).data
}