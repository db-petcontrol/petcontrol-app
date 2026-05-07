import { useForm } from "react-hook-form"
import { defaultValues, petSchema, PetSchema } from "../../schemas/pet.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function useFormPet() {
  return useForm<PetSchema>({
    mode: "all",
    resolver: zodResolver(petSchema),
    defaultValues,
  })
}
