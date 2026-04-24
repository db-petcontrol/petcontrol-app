"use client"
import { useRouter } from "next/navigation"

interface UseNavigateResult {
  toPets: () => void
  toNewPet: () => void
  goBack: () => void
}

export function useNavigate(): UseNavigateResult {
  const router = useRouter()

  function toPets(): void {
    router.push("/pets")
  }

  function toNewPet(): void {
    router.push("/pets/novo")
  }

  function goBack(): void {
    router.back()
  }

  return {
    toPets,
    toNewPet,
    goBack,
  }
}
