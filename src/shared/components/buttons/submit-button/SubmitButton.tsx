"use client"

import { useFormContext } from "react-hook-form"
import { PrimaryButton } from "../primary-button/PrimaryButton"
import { ButtonHTMLAttributes } from "react"

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SubmitButton({ children, className }: SubmitButtonProps) {
  const { formState } = useFormContext()
  return (
    <PrimaryButton
      type="submit"
      className={className}
      disabled={!formState.isValid}
    >
      {children}
    </PrimaryButton>
  )
}
