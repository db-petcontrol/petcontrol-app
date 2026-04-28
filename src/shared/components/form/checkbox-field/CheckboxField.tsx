"use client"

import { Option } from "@/shared/types/common.types"
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { FormField } from "../form-field/FormField"
import { Field, FieldGroup, FieldLabel } from "../../ui/field"
import { Checkbox } from "../../ui/checkbox"

interface CheckboxFieldProps<T extends FieldValues> {
  label: string
  name: Path<T>
  required?: boolean
  options: Option[]
}

export function CheckboxField<T extends FieldValues>({
  label,
  name,
  required,
  options,
}: CheckboxFieldProps<T>) {
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
          <FieldGroup className="grid auto-cols-[170px] grid-flow-row grid-cols-3 justify-start gap-x-2 gap-y-2 pt-1 pl-0.5">
            {options.map((option) => (
              <Field
                key={option.value}
                orientation="horizontal"
                data-invalid={fieldState.invalid}
                className=""
              >
                <Checkbox
                  id={`form-checkbox-${option.value}`}
                  className="border-2 border-gray-400 checked:border-primary checked:bg-primary"
                  name={name}
                  aria-invalid={fieldState.invalid}
                  checked={((field.value as string[]) || []).includes(
                    option.value
                  )}
                  onCheckedChange={(checked) => {
                    const newValue = checked
                      ? [...(field.value || []), option.value]
                      : field.value.filter(
                          (value: string) => value !== option.value
                        )
                    field.onChange(newValue)
                  }}
                />
                <FieldLabel
                  htmlFor={`form-rhf-checkbox-${option.value}`}
                  className="text-[12px] font-normal"
                >
                  {option.label}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FormField>
      )}
    />
  )
}
