import { Species } from "@/features/species/types/species.type"
import { Option } from "@/shared/types/common.types"

export const speciesMock: Species[] = [
  { id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", name: "Cachorro" },
  { id: "b2c3d4e5-f6a1-8907-bcde-fa2345678901", name: "Gato" },
]

export const speciesOptionsMock: Option[] = speciesMock.map((species) => ({
  label: species.name,
  value: species.id,
}))
