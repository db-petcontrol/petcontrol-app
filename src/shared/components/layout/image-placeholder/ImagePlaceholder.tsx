import { cn } from "@/shared/lib/utils"
import { PawPrint } from "lucide-react"

interface ImagePlaceholderProps {
  className?: string
  iconSize?: number
}

export function ImagePlaceholder({
  className,
  iconSize = 65,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-200",
        className
      )}
    >
      <PawPrint size={iconSize} className="text-gray-300" />
    </div>
  )
}
