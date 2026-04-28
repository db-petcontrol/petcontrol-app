import type { FieldError as RHFFieldError } from "react-hook-form"
import { Field, FieldError, FieldLabel } from "../../ui/field"

interface FormFieldProps {
  label: string
  name: string
  required?: boolean
  error?: RHFFieldError
  children: React.ReactNode
}

export function FormField({
  label,
  name,
  required,
  error,
  children,
}: FormFieldProps) {
  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={name} className="text-md">
        {label} {required && <span className="text-destructive">*</span>}
      </FieldLabel>

      {children}
      <div className="h-2">{error && <FieldError errors={[error]} />}</div>
    </Field>
  )
}
