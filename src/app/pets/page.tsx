"use client"

import { PetList, PetListHeader, usePetsPageViewModel } from "@/features/pets"
import {
  CustomPagination,
  PageLoader,
  SectionLoader,
} from "@/shared/components"

export default function Page() {
  const {
    pagePetCurrent,
    isLoading,
    isDeleting,
    page,
    handleChangePage,
    handleDeletePet,
  } = usePetsPageViewModel()

  return (
    <>
      <PageLoader isLoading={isDeleting} />

      <section className="flex w-full flex-col px-10 py-8 lg:max-w-7xl">
        <PetListHeader totalPets={pagePetCurrent.totalElements} />

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-10">
          <SectionLoader
            className="min-h-90 items-start pt-10"
            isLoading={isLoading}
          />

          {!isLoading && (
            <PetList pets={pagePetCurrent.content} onDelete={handleDeletePet} />
          )}

          <CustomPagination
            page={page}
            totalPages={pagePetCurrent.totalPages}
            onPageChange={handleChangePage}
            isLoading={isLoading}
          />
        </div>
      </section>
    </>
  )
}
