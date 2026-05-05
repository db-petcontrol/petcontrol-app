import { PetStatus } from "../enums/pet-status.enum"

export interface Pet {
  id: string
  name: string
  species: string
  status: PetStatus
  tags: string[]
}
