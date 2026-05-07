"use client"

import { useSpeciesOptions } from "@/features/species"
import { useTagsOptions } from "@/features/tags"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { showErrorToast } from "@/shared/utils/toast-utils"
import { useEffect } from "react"
import { Option } from "@/shared/types/common.types"
import { toast } from "sonner"
import { PetSchema } from "../../schemas/pet.schema"
import { useQueryClient } from "@tanstack/react-query"
import { usePet } from "../pet/usePet"
import { useForm } from "react-hook-form"
import { mapPetToForm } from "../../mapper/pets.mapper"
import { useFormPet } from "../form-pet/useFormPet"
import { useUpdatePet } from "../update-pet/useUpdatePet"

interface UseUpdatePetPageViewModelResult {
  formMethods: ReturnType<typeof useForm<PetSchema>>
  speciesOptions: Option[]
  tagsOptions: Option[]
  isLoading: boolean
  handleUpdatePet: (data: PetSchema) => void
}

export function useUpdatePetPageViewModel(
  id: string
): UseUpdatePetPageViewModelResult {
  const formMethods = useFormPet()
  const queryClient = useQueryClient()
  const { toPets, goBack } = useNavigate()

  const pets = usePet(id)
  const species = useSpeciesOptions()
  const tags = useTagsOptions()

  const updatePetMutation = useUpdatePet()

  const isLoading =
    species.isLoading ||
    tags.isLoading ||
    pets.isLoading ||
    updatePetMutation.isPending

  const hasError = species.isError || tags.isError || pets.isError

  function handleUpdatePet(data: PetSchema): void {
    updatePetMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["pets"] })
          queryClient.invalidateQueries({ queryKey: ["pet", id] })
          toast.success("Pet atualizado com sucesso!")
          goBack()
        },
        onError: () => {
          showErrorToast()
        },
      }
    )
  }

  useEffect(() => {
    if (hasError) {
      showErrorToast()
      toPets()
    }
  }, [hasError, toPets])

  useEffect(() => {
    if (pets.data) {
      formMethods.reset(mapPetToForm(pets.data))
    }
  }, [pets.data, formMethods])

  return {
    formMethods,
    speciesOptions: species.options,
    tagsOptions: tags.options,
    isLoading,
    handleUpdatePet,
  }
}
