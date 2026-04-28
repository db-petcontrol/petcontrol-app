import { api } from "@/shared/lib/api.config"
import { Species } from "../types/species.type"

const BASE_URL = "/species"

export const speciesApi = {
  getSpecies: async (): Promise<Species[]> => {
    const { data } = await api.get(BASE_URL)
    return data
  },
}
