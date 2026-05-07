import { useMutation } from "@tanstack/react-query"
import { petsApi } from "../../api/pets-api"
import { PetSchema } from "../../schemas/pet.schema"

interface UpdatePetParams {
  id: string
  data: PetSchema
}

export function useUpdatePet() {
  return useMutation({
    mutationFn: ({ id, data }: UpdatePetParams) => petsApi.update(id, data),
  })
}
