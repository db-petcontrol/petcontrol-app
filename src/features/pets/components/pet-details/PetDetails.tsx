import { ContainerLayout, ImagePlaceholder } from "@/shared/components"
import { Pet } from "../../types/pets.types"
import { PetStatusBadge } from "../pet-status-badge/PetStatusBadge"
import { PetTagBadge } from "../pet-tag-badge/PetTagBadge"

interface PetDetailsProps {
  pet: Pet | undefined
}

export function PetDetails({ pet }: PetDetailsProps) {
  if (!pet) return

  return (
    <div className="flex w-full flex-col gap-6 md:max-w-5xl md:flex-row">
      <ContainerLayout title="Fotos do Pet" className="w-full">
        <ImagePlaceholder className="min-h-50 md:min-h-80" />
        <div className="mt-5 hidden w-full justify-between gap-5 md:flex md:min-h-30">
          <ImagePlaceholder className="flex-1" />
          <ImagePlaceholder className="flex-1" />
          <ImagePlaceholder className="flex-1" />
        </div>
      </ContainerLayout>
      <ContainerLayout title="Informações do Pet" className="w-full md:w-11/12">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-0.5 text-gray-700">ID</h4>
            <p className="font-bold">{pet.id}</p>
          </div>
          <div>
            <h4 className="mb-0.5 text-gray-700">Nome</h4>
            <p className="font-bold">{pet.name}</p>
          </div>
          <div>
            <h4 className="mb-0.5 text-gray-700">Espécie</h4>
            <p className="font-bold">{pet.species}</p>
          </div>
          <div>
            <h4 className="mb-1.5 text-gray-700">Status</h4>
            <PetStatusBadge status={pet.status} />
          </div>
          <div>
            <h4 className="text-gray-700">Tags</h4>
            {pet.tags.length === 0 ? (
              <span className="mt-1.5 pl-0.5 text-xs text-gray-500 italic">
                Nenhuma tag foi cadastrada
              </span>
            ) : (
              <div className="mt-2 flex flex-wrap gap-2">
                {pet.tags.map((tag) => (
                  <PetTagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}
