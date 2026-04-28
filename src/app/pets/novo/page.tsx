"use client"

import { PetForm, useCreatePetPageViewModel } from "@/features/pets"
import { ContainerLayout, PageLayout, PageLoader } from "@/shared/components"

export default function Page() {
  const {
    speciesOptions,
    tagsOptions,
    isLoading,
    handleCreatePet,
    isCreating,
  } = useCreatePetPageViewModel()

  return (
    <>
      <PageLoader isLoading={isLoading || isCreating} />

      <PageLayout
        title="Adicionar Novo Pet"
        subtitle="Preencha os dados do novo pet"
      >
        <ContainerLayout className="w-full md:max-w-150">
          <PetForm
            speciesOptions={speciesOptions}
            tagsOptions={tagsOptions}
            onSubmit={handleCreatePet}
          />
        </ContainerLayout>
      </PageLayout>
    </>
  )
}
