"use client"
import { useRouter } from "next/navigation"

interface UseNavigateResult {
  toPets: () => void
  toPet: (id: string) => void
  toNewPet: () => void
  goBack: () => void
}

export function useNavigate(): UseNavigateResult {
  const BASE_PET_URL = "/pets"

  const router = useRouter()

  function toPet(id: string): void {
    router.push(`${BASE_PET_URL}/${id}`)
  }

  function toPets(): void {
    router.push(BASE_PET_URL)
  }

  function toNewPet(): void {
    router.push(`${BASE_PET_URL}/novo`)
  }

  function goBack(): void {
    router.back()
  }

  return {
    toPets,
    toPet,
    toNewPet,
    goBack,
  }
}
