import { Pet } from "../../types/pets.types"
import { ContainerLayout, InfoButton } from "@/shared/components"
import { petStatusLabels } from "../../enums/pet-status.enum"
import { Edit, Trash2, PawPrint } from "lucide-react"

interface PetCardProps {
  pet: Pet
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <ContainerLayout className="flex flex-col gap-4">
      <div className="flex h-40 items-center justify-center rounded-lg bg-gray-200">
        <PawPrint size={65} className="text-gray-400" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">
            {petStatusLabels[pet.status]}
          </span>
        </div>
        <p className="text-sm text-gray-500 italic">{pet.specieName}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {pet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2 flex gap-2 border-t pt-4">
        <InfoButton className="flex h-9 flex-1 items-center justify-center gap-2 text-sm">
          <Edit size={16} /> Editar
        </InfoButton>
        <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-md border-2 border-red-500 text-sm text-red-500 hover:bg-red-50">
          <Trash2 size={16} /> Excluir
        </button>
      </div>
    </ContainerLayout>
  )
}
