import { PetList, PetListHeader } from "@/features/pets"
import { PageLoader } from "@/shared/components"

export default function Page() {
  // const { pets, isLoading } = usePetsListPageViewModel();

  return (
    <section className="flex w-full flex-col px-10 py-8 lg:max-w-7xl">
      {/* <PageLoader isLoading={isLoading} /> */}

      <PetListHeader />

      <div className="mt-8 flex w-full flex-col items-center justify-center">
        <PetList />
      </div>
    </section>
  )
}
