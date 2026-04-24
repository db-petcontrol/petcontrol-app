"use client"
import { useRouter } from "next/navigation"

interface UseNavigateResult {
  toPets: () => void
  toNewPet: () => void
}

export function useNavigate(): UseNavigateResult {
  const router = useRouter()

  function toPets(): void {
    router.push("/pets")
  }

  function toNewPet(): void {
    router.push("/pets/novo")
  }

  return {
    toPets,
    toNewPet,
  }
}
