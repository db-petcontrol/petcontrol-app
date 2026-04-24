import { ButtonHTMLAttributes } from "react"
import { CustomButton } from "../custom-button/CustomButton"
import { cn } from "@/shared/lib/utils"

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  targetLabel: string
}

export function LinkButton({
  targetLabel,
  children,
  className,
  type = "button",
  ...props
}: LinkButtonProps) {
  return (
    <CustomButton
      type={type}
      className={cn(className)}
      aria-label={`Ir para ${targetLabel}`}
      {...props}
    >
      {children}
    </CustomButton>
  )
}
