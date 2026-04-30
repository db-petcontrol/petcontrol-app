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
import {
  defaultValues,
  petSchema,
  PetSchema,
} from "@/features/pets/schemas/pet.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { PetStatus, petStatusLabels } from "../../enums/pet-status.enum"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { Option } from "@/shared/types/common.types"

interface PetFormProps {
  speciesOptions: Option[]
  tagsOptions: Option[]
  onSubmit: (data: PetSchema) => void
}

export function PetForm({
  speciesOptions,
  tagsOptions,
  onSubmit,
}: PetFormProps) {
  const { toPets } = useNavigate()

  const statusOptions = Object.values(PetStatus).map((status) => ({
    value: status,
    label: petStatusLabels[status],
  }))

  return (
    <FormBase<PetSchema>
      resolver={zodResolver(petSchema)}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
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
        <InfoButton className="flex-1" onClick={toPets}>
          Cancelar
        </InfoButton>
        <SubmitButton className="flex-1">Cadastrar Pet</SubmitButton>
      </div>
    </FormBase>
  )
}
