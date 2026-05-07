"use client"

import { useSpeciesOptions } from "@/features/species"
import { useTagsOptions } from "@/features/tags"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { showErrorToast } from "@/shared/utils/toast-utils"
import { useEffect } from "react"
import { Option } from "@/shared/types/common.types"
import { useCreatePet } from "../create-pet/useCreatePet"
import { toast } from "sonner"
import { PetSchema } from "../../schemas/pet.schema"
import { useQueryClient } from "@tanstack/react-query"
import { useFormPet } from "../form-pet/useFormPet"
import { useForm } from "react-hook-form"

interface UseCreatePetPageViewModelResult {
  formMethods: ReturnType<typeof useForm<PetSchema>>
  speciesOptions: Option[]
  tagsOptions: Option[]
  isLoading: boolean
  handleCreatePet: (data: PetSchema) => void
}

export function useCreatePetPageViewModel(): UseCreatePetPageViewModelResult {
  const formMethods = useFormPet()
  const queryClient = useQueryClient()
  const { toPets } = useNavigate()

  const species = useSpeciesOptions()
  const tags = useTagsOptions()

  const createPetMutation = useCreatePet()

  const isLoading =
    species.isLoading || tags.isLoading || createPetMutation.isPending
  const hasError = species.isError || tags.isError

  function handleCreatePet(data: PetSchema): void {
    createPetMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["pets"] })
        toast.success("Pet cadastrado com sucesso!")
        toPets()
      },
      onError: () => {
        showErrorToast()
      },
    })
  }

  useEffect(() => {
    if (hasError) {
      showErrorToast()
      toPets()
    }
  }, [hasError, toPets])

  return {
    formMethods,
    speciesOptions: species.options,
    tagsOptions: tags.options,
    isLoading,
    handleCreatePet,
  }
}
