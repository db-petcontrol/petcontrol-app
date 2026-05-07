"use client"
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form"

type FormBaseProps<T extends FieldValues> = {
  formMethods: ReturnType<typeof useForm<T>>
  children: React.ReactNode
  onSubmit: SubmitHandler<T>
}

export function FormBase<T extends FieldValues>({
  formMethods,
  children,
  onSubmit,
}: FormBaseProps<T>) {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
