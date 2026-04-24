import { ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/utils"
import { CustomButton } from "../custom-button/CustomButton"

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({
  children,
  className,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  return (
    <CustomButton
      type={type}
      className={cn(
        "shadow-md shadow-neutral-200 hover:bg-sky-800 disabled:bg-sky-500 disabled:text-sky-300",
        className
      )}
      {...props}
    >
      {children}
    </CustomButton>
  )
}
