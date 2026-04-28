import { useMutation } from "@tanstack/react-query"
import { petsApi } from "../../api/pets-api"
import { PetSchema } from "../../schemas/pet.schema"

export function useCreatePet() {
  return useMutation({
    mutationFn: (data: PetSchema) => petsApi.create(data),
  })
}
