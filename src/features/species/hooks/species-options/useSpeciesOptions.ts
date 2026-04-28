import { Species } from "../../types/species.type"
import { useSpecies } from "../species/useSpecies"
import { Option } from "@/shared/types/common.types"

interface UseSpeciesOptionsResult {
  options: Option[]
  isLoading: boolean
  isError: boolean
}

export function useSpeciesOptions(): UseSpeciesOptionsResult {
  const { data, isLoading, isError } = useSpecies()

  return {
    options:
      data?.map((s: Species) => ({
        label: s.name,
        value: s.id,
      })) ?? [],
    isLoading,
    isError,
  }
}
