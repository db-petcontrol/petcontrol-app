"use client"
import {
  DefaultValues,
  FieldValues,
  Resolver,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form"

type FormBaseProps<T extends FieldValues> = {
  children: React.ReactNode
  resolver: Resolver<T>
  defaultValues?: DefaultValues<T>
  onSubmit: SubmitHandler<T>
}

export function FormBase<T extends FieldValues>({
  children,
  resolver,
  defaultValues,
  onSubmit,
}: FormBaseProps<T>) {
  const methods = useForm<T>({
    mode: "all",
    resolver,
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
