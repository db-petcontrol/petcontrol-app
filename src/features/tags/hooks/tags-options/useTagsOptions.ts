import { Tag } from "../../types/tags.types"
import { useTags } from "../tags/useTags"
import { Option } from "@/shared/types/common.types"

interface UseTagsOptionsResult {
  options: Option[]
  isLoading: boolean
  isError: boolean
}

export function useTagsOptions(): UseTagsOptionsResult {
  const { data, isLoading, isError } = useTags()

  return {
    options:
      data?.map((s: Tag) => ({
        label: s.name,
        value: s.id,
      })) ?? [],
    isLoading,
    isError,
  }
}
