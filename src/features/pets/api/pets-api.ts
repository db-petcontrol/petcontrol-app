import { api } from "@/shared/lib/api.config"
import { PetSchema } from "../schemas/pet.schema"
import { Pet } from "../types/pets.types"
import { PageResponse } from "@/shared/types/common.types"

const BASE_URL = "/pets"

export const petsApi = {
  create: async (pet: PetSchema): Promise<void> => {
    await api.post(BASE_URL, pet)
  },

  get: async (page: number, size: number): Promise<PageResponse<Pet>> => {
    const { data } = await api.get(BASE_URL, {
      params: { page, size },
    })
    return data
  },
}
