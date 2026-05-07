import { api } from "@/shared/lib/api.config"
import { PetSchema } from "../schemas/pet.schema"
import { Pet } from "../types/pets.types"
import { PageResponse } from "@/shared/types/common.types"

const BASE_URL = "/pets"

export const petsApi = {
  create: async (pet: PetSchema): Promise<void> => {
    await api.post(BASE_URL, pet)
  },
  update: async (id: string, pet: PetSchema): Promise<Pet> => {
    const { data } = await api.put(`${BASE_URL}/${id}`, pet)
    return data
  },
  delete: async (id: string): Promise<Pet> => {
    const { data } = await api.delete(`${BASE_URL}/${id}`)
    return data
  },
  get: async (id: string): Promise<Pet> => {
    const { data } = await api.get(`${BASE_URL}/${id}`)
    return data
  },
  getAll: async (page: number, size: number): Promise<PageResponse<Pet>> => {
    const { data } = await api.get(BASE_URL, {
      params: { page, size },
    })
    return data
  },
}
