import { ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/utils"
import { CustomButton } from "../custom-button/CustomButton"

type InfoButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function InfoButton({
  children,
  className,
  type = "button",
  ...props
}: InfoButtonProps) {
  return (
    <CustomButton
      type={type}
      className={cn(
        "hover:border-sky border-2 border-sky-600 bg-transparent text-sky-600 shadow-md shadow-neutral-200 hover:border-sky-800 hover:text-sky-800",
        className
      )}
      {...props}
    >
      {children}
    </CustomButton>
  )
}
