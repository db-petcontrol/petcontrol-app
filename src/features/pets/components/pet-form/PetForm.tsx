"use client"
import {
  InputField,
  FormBase,
  SelectField,
  CheckboxField,
  InfoButton,
  SubmitButton,
} from "@/shared/components"
import { FieldGroup } from "@/shared/components/ui/field"
import { PetSchema } from "@/features/pets/schemas/pet.schema"
import { PetStatus, petStatusLabels } from "../../enums/pet-status.enum"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { Option } from "@/shared/types/common.types"
import { useForm } from "react-hook-form"

export interface PetFormProps {
  formMethods: ReturnType<typeof useForm<PetSchema>>
  speciesOptions: Option[]
  tagsOptions: Option[]
  btnName: string
  onSubmit: (data: PetSchema) => void
}

export function PetForm({
  formMethods,
  speciesOptions,
  tagsOptions,
  btnName,
  onSubmit,
}: PetFormProps) {
  const { goBack } = useNavigate()

  const statusOptions = Object.values(PetStatus).map((status) => ({
    value: status,
    label: petStatusLabels[status],
  }))

  return (
    <FormBase<PetSchema> onSubmit={onSubmit} formMethods={formMethods}>
      <FieldGroup>
        <InputField<PetSchema>
          label="Nome do Pet"
          name="name"
          placeholder="Ex: Rex, Mimi, Thor"
          required
          maxLength={20}
        />

        <SelectField<PetSchema>
          label="Espécie"
          name="specieId"
          placeholder="Selecione a espécie"
          required
          options={speciesOptions}
        />

        <SelectField<PetSchema>
          label="Status"
          name="status"
          placeholder="Selecione o status"
          required
          options={statusOptions}
        />

        <CheckboxField<PetSchema>
          label="Tags"
          name="tagsIds"
          options={tagsOptions}
        />
      </FieldGroup>
      <div className="mt-2 flex w-full justify-between gap-4 border-t-2 pt-4">
        <InfoButton className="flex-1" onClick={goBack}>
          Cancelar
        </InfoButton>
        <SubmitButton className="flex-1">{btnName}</SubmitButton>
      </div>
    </FormBase>
  )
}
