import { PetStatus } from "../../enums/pet-status.enum"
import { Pet } from "../../types/pets.types"
import { PetCard } from "../pet-card/PetCard"

const MOCK_PETS: Pet[] = [
  {
    id: "d8906906-5136-4ce5-825a-73ee95a267a1",
    name: "Rex",
    specieName: "Cachorro",
    status: PetStatus.AVAILABLE,
    tags: ["vacinado", "treinado"],
  },
  {
    id: "a1234567-b123-c123-d123-e123456789ab",
    name: "Luna",
    specieName: "Gato",
    status: PetStatus.AVAILABLE,
    tags: ["castrada", "calma"],
  },
  {
    id: "f9876543-e987-d987-c987-b987654321ba",
    name: "Thor",
    specieName: "Cachorro",
    status: PetStatus.ADOPTED,
    tags: ["brincalhão"],
  },
]

interface PetListProps {
  pets?: Pet[]
}

export function PetList({ pets }: PetListProps) {
  const displayPets = pets && pets.length > 0 ? pets : MOCK_PETS

  if (displayPets.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-500">Nenhum pet encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
