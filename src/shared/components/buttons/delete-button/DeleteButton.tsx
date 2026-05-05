import { ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/utils"
import { CustomButton } from "../custom-button/CustomButton"

type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function DeleteButton({
  children,
  className,
  type = "button",
  ...props
}: DeleteButtonProps) {
  return (
    <CustomButton
      type={type}
      className={cn(
        "hover:border-sky border-2 border-red-600 bg-transparent text-red-600 shadow-md shadow-neutral-200 hover:border-red-700 hover:text-red-700",
        className
      )}
      {...props}
    >
      {children}
    </CustomButton>
  )
}
