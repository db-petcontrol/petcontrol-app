import { Frown } from "lucide-react"
import { Pet } from "../../types/pets.types"
import { PetCard } from "../pet-card/PetCard"

interface PetListProps {
  pets: Pet[]
}

export function PetList({ pets }: PetListProps) {
  if (pets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10">
        <Frown size={72} className="text-gray-300" />
        <p className="text-gray-500">Nenhum pet foi encontrado.</p>
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
