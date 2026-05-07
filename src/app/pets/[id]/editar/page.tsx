"use client"

import { PetForm, useUpdatePetPageViewModel } from "@/features/pets"
import { ContainerLayout, PageLayout, PageLoader } from "@/shared/components"
import React from "react"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function Page({ params }: PageProps) {
  const { id } = React.use(params)
  const {
    formMethods,
    speciesOptions,
    tagsOptions,
    isLoading,
    handleUpdatePet,
  } = useUpdatePetPageViewModel(id)

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <PageLayout title="Editar Pet" subtitle="Atualize as informações do pet">
        <ContainerLayout className="w-full md:max-w-150">
          <PetForm
            formMethods={formMethods}
            speciesOptions={speciesOptions}
            tagsOptions={tagsOptions}
            onSubmit={handleUpdatePet}
            btnName="Atualizar Pet"
          />
        </ContainerLayout>
      </PageLayout>
    </>
  )
}
