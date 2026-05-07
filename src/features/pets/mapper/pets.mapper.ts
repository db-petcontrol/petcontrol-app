import { PetSchema } from "../schemas/pet.schema"
import { Pet } from "../types/pets.types"

export function mapPetToForm(pet: Pet): PetSchema {
  return {
    name: pet.name,
    specieId: pet.species.id,
    status: pet.status,
    tagsIds: pet.tags.map((tag) => tag.id),
  }
}
