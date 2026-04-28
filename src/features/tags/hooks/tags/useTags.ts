import { useQuery } from "@tanstack/react-query"
import { Tag } from "../../types/tags.types"
import { tagsApi } from "../../api/tags-api"

export function useTags() {
  return useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: tagsApi.getTags,
    staleTime: Infinity,
  })
}
