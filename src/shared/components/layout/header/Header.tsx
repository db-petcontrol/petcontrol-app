"use client"

import { useNavigate } from "@/shared/hooks/useNavigate"
import { PawPrint } from "lucide-react"

export function Header() {
  const { toPets } = useNavigate()

  return (
    <header className="flex justify-center bg-primary px-6 py-4">
      <div className="flex w-full gap-2 text-secondary lg:max-w-7xl">
        <PawPrint size={52} onClick={toPets} className="cursor-pointer" />
        <div>
          <h1 className="text-2xl font-bold tracking-wide">PetControl</h1>
          <p className="font-light">Sistema de Gerenciamento de Pets</p>
        </div>
      </div>
    </header>
  )
}
