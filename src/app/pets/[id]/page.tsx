"use client"

import {
  PetActionButtons,
  PetDetails,
  usePetPageViewModel,
} from "@/features/pets"
import { PageLayout, PageLoader } from "@/shared/components"
import React from "react"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function Page({ params }: PageProps) {
  const { id } = React.use(params)
  const { pet, isLoading, handleDeletePet } = usePetPageViewModel(id)

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <PageLayout
        title="Detalhes do Pet"
        subtitle="Visualização completa"
        headerActions={
          <PetActionButtons
            onDelete={handleDeletePet}
            petId={id}
            containerClassName="flex-col md:flex-row"
            infoButtonClassName="self-center text-sm p-4 md:p-5 md:text-md"
            deleteButtonClassName="self-center text-sm p-4 md:p-5 md:text-md"
          />
        }
      >
        <PetDetails pet={pet} />
      </PageLayout>
    </>
  )
}
