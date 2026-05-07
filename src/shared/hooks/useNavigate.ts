"use client"
import { useRouter } from "next/navigation"

interface UseNavigateResult {
  toPets: () => void
  toPet: (id: string) => void
  toNewPet: () => void
  toEditPet: (id: string) => void
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

  function toEditPet(id: string): void {
    router.push(`${BASE_PET_URL}/${id}/editar`)
  }

  function goBack(): void {
    const appOrigin = window.location.origin

    if (document.referrer && document.referrer.startsWith(appOrigin)) {
      router.back()
    } else {
      toPets()
    }
  }

  return {
    toPets,
    toPet,
    toNewPet,
    toEditPet,
    goBack,
  }
}
