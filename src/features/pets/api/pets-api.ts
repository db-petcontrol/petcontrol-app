import { api } from "@/shared/lib/api.config"
import { PetSchema } from "../schemas/pet.schema"

const BASE_URL = "/pets"

export const petsApi = {
  create: async (pet: PetSchema): Promise<void> => {
    await api.post(BASE_URL, pet)
  },
}
