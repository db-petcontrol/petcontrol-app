import { ButtonHTMLAttributes } from "react"
import { Button } from "../../ui/button"
import { cn } from "@/shared/lib/utils"

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function CustomButton({
  children,
  className,
  type = "button",
  ...props
}: CustomButtonProps) {
  return (
    <Button
      type={type}
      className={cn(
        "text-md flex w-auto cursor-pointer gap-3 rounded-md p-5 font-medium duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
