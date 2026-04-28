import {
  defaultValues,
  petSchema,
  PetSchema,
} from "@/features/pets/schemas/pet.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"

interface FormProviderMockProps {
  children: React.ReactNode
}
export function FormProviderMock({ children }: FormProviderMockProps) {
  const methods = useForm<PetSchema>({
    mode: "all",
    resolver: zodResolver(petSchema),
    defaultValues,
  })
  return <FormProvider {...methods}>{children}</FormProvider>
}
