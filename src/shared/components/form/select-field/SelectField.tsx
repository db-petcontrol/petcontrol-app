"use client"

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { FormField } from "../form-field/FormField"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { Option } from "@/shared/types/common.types"

interface SelectFieldProps<T extends FieldValues> {
  label: string
  name: Path<T>
  placeholder: string
  required?: boolean
  options: Option[]
}

export function SelectField<T extends FieldValues>({
  label,
  name,
  required,
  placeholder,
  options,
}: SelectFieldProps<T>) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField
          label={label}
          name={name}
          required={required}
          error={fieldState.error}
        >
          <Select
            onValueChange={field.onChange}
            onOpenChange={(open) => {
              if (!open) {
                field.onBlur()
              }
            }}
            value={field.value}
          >
            <SelectTrigger
              id={name}
              ref={field.ref}
              aria-invalid={!!fieldState.error}
              data-testid={`select-${name}`}
              className="rounded-md border-gray-300 bg-neutral-100 px-4 py-5 shadow-sm focus-visible:ring-gray-300"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent
              position="popper"
              className="max-h-35 overflow-y-auto"
            >
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    data-testid={`select-item-${name}`}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
      )}
    />
  )
}
