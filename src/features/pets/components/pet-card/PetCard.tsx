import { Pet } from "../../types/pets.types"
import { ContainerLayout, DeleteButton, InfoButton } from "@/shared/components"
import { Edit, Trash2, PawPrint } from "lucide-react"
import { PetStatusBadge } from "../pet-status-badge/PetStatusBadge"

interface PetCardProps {
  pet: Pet
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <ContainerLayout
      key={pet.id}
      className="flex flex-col gap-1 px-3 py-4 duration-100 hover:border-2 hover:border-primary"
    >
      <div className="mb-2 flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-200">
        <PawPrint size={65} className="text-gray-300" />
      </div>

      <div className="mb-3 flex flex-col gap-0.5">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <PetStatusBadge status={pet.status} />
        </div>
        <p className="text-2xlg text-gray-500 italic">{pet.species}</p>
      </div>

      <div className="flex h-15 flex-wrap items-start gap-x-2 gap-y-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {pet.tags.slice(0, 4).map((tag) => (
          <span
            data-testid="pet-tag"
            key={tag}
            className="rounded-2xl border border-gray-200 bg-gray-100 px-2 py-0.5 text-center text-[11px] font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
        {pet.tags.length > 4 && (
          <span className="text-xs font-bold text-gray-400">...</span>
        )}
      </div>

      <div className="mt-2 flex gap-3 border-t-2 pt-4">
        <InfoButton className="flex-1 text-sm">
          <Edit size={16} /> Editar
        </InfoButton>
        <DeleteButton className="text-sm">
          <Trash2 size={16} /> Excluir
        </DeleteButton>
      </div>
    </ContainerLayout>
  )
}
