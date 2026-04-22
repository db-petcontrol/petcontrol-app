import { HealthCheckTest } from "@/components/health-check-test/HealthCheckTest"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">PetControl App</h1>
      <HealthCheckTest />
    </main>
  )
}
