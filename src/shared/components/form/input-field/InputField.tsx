"use client"

import type { InputHTMLAttributes } from "react"
import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form"
import { FormField } from "../form-field/FormField"
import { Input } from "../../ui/input"

interface InputFieldProps<
  T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: Path<T>
  required?: boolean
}

export function InputField<T extends FieldValues>({
  label,
  name,
  required,
  ...inputProps
}: InputFieldProps<T>) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormField
          label={label}
          name={name}
          required={required}
          error={fieldState.error}
        >
          <Input
            {...field}
            {...inputProps}
            data-testid={`input-${name}`}
            id={name}
            aria-invalid={fieldState.invalid}
            className="rounded-md border-gray-300 bg-gray-100 px-4 py-5 shadow-sm focus-visible:ring-gray-300"
          />
        </FormField>
      )}
    />
  )
}
