import { Tag } from "./../../tags/types/tags.types"
import { Species } from "@/features/species/types/species.type"
import { PetStatus } from "../enums/pet-status.enum"

export interface Pet {
  id: string
  name: string
  species: Species
  status: PetStatus
  tags: Tag[]
}
