import { z } from "zod"
import { PetStatusArray, PetStatus } from "../enums/pet-status.enum"

export const petSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("O nome é obrigatório")
    .regex(/^[\p{L}\s]+$/u, "O nome deve conter apenas letras e espaços"),
  specieId: z.uuid("A espécie é obrigatória"),
  status: z.enum(PetStatusArray, { message: "O status é obrigatório" }),
  tagsIds: z.array(z.uuid()),
})

export type PetSchema = z.infer<typeof petSchema>

export const defaultValues: PetSchema = {
  name: "",
  specieId: "",
  status: PetStatus.AVAILABLE,
  tagsIds: [],
}
