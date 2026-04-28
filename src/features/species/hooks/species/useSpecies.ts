import { speciesApi } from "./../../api/species-api"
import { useQuery } from "@tanstack/react-query"
import { Species } from "../../types/species.type"

export function useSpecies() {
  return useQuery<Species[]>({
    queryKey: ["species"],
    queryFn: speciesApi.getSpecies,
    staleTime: Infinity,
  })
}
