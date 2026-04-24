"use client"

import { useNavigate } from "@/shared/hooks/useNavigate"
import { PawPrint } from "lucide-react"
import { LinkButton } from "../../buttons/link-button/LinkButton"

export function Header() {
  const { toPets } = useNavigate()

  return (
    <header className="flex justify-center bg-primary px-6 py-4">
      <div className="flex w-full items-center gap-2 text-secondary lg:max-w-7xl">
        <LinkButton targetLabel="lista de pets" onClick={toPets}>
          <PawPrint
            className="scale-300"
            aria-hidden="true"
            data-testid="paw-print-icon"
          />
        </LinkButton>

        <div>
          <h1 className="text-2xl font-bold tracking-wide">PetControl</h1>
          <p className="font-light">Sistema de Gerenciamento de Pets</p>
        </div>
      </div>
    </header>
  )
}
