import { api } from "@/shared/lib/api.config"
import { PetSchema } from "../schemas/pet.schema"
import { Pet } from "../types/pets.types"

const BASE_URL = "/pets"

export const petsApi = {
  create: async (pet: PetSchema): Promise<void> => {
    await api.post(BASE_URL, pet)
  },

  get: async (): Promise<Pet[]> => {
    const { data } = await api.get(BASE_URL)
    return data
  },
}
