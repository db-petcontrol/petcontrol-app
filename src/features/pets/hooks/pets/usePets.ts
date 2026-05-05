import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { petsApi } from "../../api/pets-api"
import { PageResponse } from "@/shared/types/common.types"
import { Pet } from "../../types/pets.types"

export function usePets(page = 0, size = 6) {
  return useQuery<PageResponse<Pet>>({
    queryKey: ["pets", page],
    queryFn: () => petsApi.get(page, size),
    placeholderData: keepPreviousData,
  })
}
