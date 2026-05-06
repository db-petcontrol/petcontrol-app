import { useEffect } from "react"
import { Pet } from "../../types/pets.types"
import { showErrorToast } from "@/shared/utils/toast-utils"
import { usePet } from "../pet/usePet"
import axios from "axios"
import { useNavigate } from "@/shared/hooks/useNavigate"

interface UsePetPageViewModelResult {
  pet?: Pet
  isLoading: boolean
}

export function usePetPageViewModel(id: string): UsePetPageViewModelResult {
  const { toPets } = useNavigate()
  const { data, isLoading, isError, error } = usePet(id)

  useEffect(() => {
    if (isError && axios.isAxiosError(error)) {
      if (error.status === 404) {
        showErrorToast("Ops! Esse pet não está disponível.")
      } else {
        showErrorToast()
      }

      toPets()
    }
  }, [isError, error, toPets])

  return {
    pet: data,
    isLoading,
  }
}
