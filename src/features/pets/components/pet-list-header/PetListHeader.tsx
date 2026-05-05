"use client"

import { PrimaryButton } from "@/shared/components"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { cn } from "@/shared/lib/utils"
import { Plus } from "lucide-react"
interface PetListHeaderProps {
  totalPets: number | undefined
}

export function PetListHeader({ totalPets }: PetListHeaderProps) {
  const { toNewPet } = useNavigate()

  return (
    <header className="flex items-center justify-between">
      <p
        className={cn(
          "pl-2 tracking-wide text-gray-500",
          totalPets ? "visible" : "invisible"
        )}
      >
        {totalPets ?? 0}{" "}
        {totalPets === 1 ? "pet encontrado" : "pets encontrados"}
      </p>

      <PrimaryButton onClick={toNewPet}>
        <Plus strokeWidth={2.5} className="scale-120" /> Adicionar Pet
      </PrimaryButton>
    </header>
  )
}
