"use client"

import { PrimaryButton } from "@/shared/components"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { Plus } from "lucide-react"

export function PetListHeader() {
  const { toNewPet } = useNavigate()

  return (
    <header className="flex items-center justify-between">
      <p>4 pets encontrados</p>
      <PrimaryButton onClick={toNewPet}>
        <Plus strokeWidth={2.5} className="scale-120" /> Adicionar Pet
      </PrimaryButton>
    </header>
  )
}
