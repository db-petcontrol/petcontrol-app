import { useNavigate } from "@/shared/hooks/useNavigate"
import { useQueryClient } from "@tanstack/react-query"
import { useDeletePet } from "../delete-pet/useDeletePet"
import { toast } from "sonner"
import { showErrorToast } from "@/shared/utils/toast-utils"
import axios from "axios"

interface UseDeletePetHandlerResult {
  handleDeletePet: (id: string) => void
  isDeleting: boolean
}

export function useDeletePetHandler(): UseDeletePetHandlerResult {
  const queryClient = useQueryClient()
  const { toPets } = useNavigate()

  const deletePetMutation = useDeletePet()

  function handleDeletePet(id: string) {
    deletePetMutation.mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["pets"] })
          toast.success("Pet excluído com sucesso!")
          toPets()
        },
        onError: (error) => {
          if (axios.isAxiosError(error) && error.status === 404) {
            queryClient.invalidateQueries({ queryKey: ["pets"] })
            showErrorToast("O pet informado não foi encontrado.")
          } else {
            showErrorToast()
          }
          toPets()
        },
      }
    )
  }

  return {
    handleDeletePet,
    isDeleting: deletePetMutation.isPending,
  }
}
