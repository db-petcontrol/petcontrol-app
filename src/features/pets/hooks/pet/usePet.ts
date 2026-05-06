import { useQuery } from "@tanstack/react-query"
import { petsApi } from "../../api/pets-api"
import { Pet } from "../../types/pets.types"

export function usePet(id: string) {
  return useQuery<Pet>({
    queryKey: ["pet", id],
    queryFn: () => petsApi.get(id),
  })
}
