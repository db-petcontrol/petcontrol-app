import { Tag } from "@/features/tags/types/tags.types"

export const tagsMock: Tag[] = [
  { id: "c3d4e5f6-a1b2-9078-cdef-ab3456789012", name: "Fofo" },
  { id: "d4e5f6a1-b2c3-0789-defa-bc4567890123", name: "Bravo" },
]

export const tagsOptionsMock = tagsMock.map((tag) => ({
  label: tag.name,
  value: tag.id,
}))
