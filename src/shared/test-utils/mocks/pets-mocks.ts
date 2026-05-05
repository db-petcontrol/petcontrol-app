import { PetStatus } from "@/features/pets/enums/pet-status.enum"
import { PetSchema } from "@/features/pets/schemas/pet.schema"
import { Pet } from "@/features/pets/types/pets.types"
import { PageResponse } from "@/shared/types/common.types"

export const petMock: PetSchema = {
  name: "Rex",
  specieId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  status: "AVAILABLE",
  tagsIds: [],
}

export const petResponseMock: Pet = {
  id: "d8906906-5136-4ce5-825a-73ee95a267a1",
  name: "Rex",
  species: "Cachorro",
  status: PetStatus.AVAILABLE,
  tags: ["vacinado", "treinado"],
}

export const petPageMock: PageResponse<Pet> = {
  content: [
    petResponseMock,
    { ...petResponseMock, id: "edf13119-3f44-4896-953f-e4595dd4eb9c" },
  ],
  totalPages: 2,
  totalElements: 4,
  size: 2,
  number: 0,
}
