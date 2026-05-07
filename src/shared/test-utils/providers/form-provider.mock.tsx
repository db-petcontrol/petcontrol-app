import { PetSchema } from "@/features/pets/schemas/pet.schema"
import { FormProvider, UseFormReturn } from "react-hook-form"

interface FormProviderMockProps {
  children: React.ReactNode
  methods: UseFormReturn<PetSchema>
}

export function FormProviderMock({ children, methods }: FormProviderMockProps) {
  return <FormProvider {...methods}>{children}</FormProvider>
}
