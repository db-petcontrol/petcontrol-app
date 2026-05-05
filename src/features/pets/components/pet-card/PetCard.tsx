import { Pet } from "../../types/pets.types"
import { ContainerLayout, ImagePlaceholder } from "@/shared/components"
import { PetStatusBadge } from "../pet-status-badge/PetStatusBadge"
import { PetTagBadge } from "../pet-tag-badge/PetTagBadge"
import { PetActionButtons } from "../pet-action-buttons/PetActionButtons"

interface PetCardProps {
  pet: Pet
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <ContainerLayout
      key={pet.id}
      className="flex flex-col gap-1 px-3 py-4 duration-100 hover:border-2 hover:border-primary"
    >
      <ImagePlaceholder className="mb-4 h-40" />

      <div className="mb-4 flex flex-col gap-0.5">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <PetStatusBadge status={pet.status} />
        </div>
        <p className="text-2xlg text-gray-500 italic">{pet.species}</p>
      </div>

      <div className="flex h-15 flex-wrap items-start gap-x-2 gap-y-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {pet.tags.slice(0, 4).map((tag) => (
          <PetTagBadge key={tag} tag={tag} />
        ))}
        {pet.tags.length > 4 && (
          <span className="text-xs font-bold text-gray-400">...</span>
        )}
      </div>

      <PetActionButtons
        containerClassName="mt-2 border-t-2 pt-4"
        infoButtonClassName="flex-1 text-sm"
        deleteButtonClassName="text-sm"
      />
    </ContainerLayout>
  )
}
