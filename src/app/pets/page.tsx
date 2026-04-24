import { HealthCheckTest } from "@/shared/components/health-check-test/HealthCheckTest"
import { PetListHeader } from "@/features/pets"

export default function Page() {
  return (
    <section className="w-full px-10 py-8 lg:max-w-7xl">
      <PetListHeader />
      <div className="flex items-center justify-center p-12">
        <HealthCheckTest />
      </div>
    </section>
  )
}
