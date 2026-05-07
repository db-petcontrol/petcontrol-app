import { useMutation } from "@tanstack/react-query"
import { petsApi } from "../../api/pets-api"

interface DeletePetParams {
  id: string
}

export function useDeletePet() {
  return useMutation({
    mutationFn: ({ id }: DeletePetParams) => petsApi.delete(id),
  })
}
