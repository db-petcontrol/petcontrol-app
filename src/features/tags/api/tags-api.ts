import { api } from "@/shared/lib/api.config"
import { Tag } from "../types/tags.types"

const BASE_URL = "/tags"

export const tagsApi = {
  getTags: async (): Promise<Tag[]> => {
    const { data } = await api.get(BASE_URL)
    return data
  },
}
