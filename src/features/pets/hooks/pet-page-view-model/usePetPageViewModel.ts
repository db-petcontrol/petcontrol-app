import { useEffect } from "react"
import { Pet } from "../../types/pets.types"
import { showErrorToast } from "@/shared/utils/toast-utils"
import { usePet } from "../pet/usePet"
import axios from "axios"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { useDeletePetHandler } from "../delete-pet-handler/useDeletePetHandler"

interface UsePetPageViewModelResult {
  pet?: Pet
  isLoading: boolean
  handleDeletePet: (id: string) => void
}

export function usePetPageViewModel(id: string): UsePetPageViewModelResult {
  const { toPets } = useNavigate()
  const { data, isLoading: isPetLoding, isError, error } = usePet(id)
  const { isDeleting, handleDeletePet } = useDeletePetHandler()

  const isLoading = isPetLoding || isDeleting

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
    handleDeletePet,
  }
}
