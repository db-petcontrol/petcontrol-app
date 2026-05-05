"use client"

import { cn } from "@/shared/lib/utils"
import { Loader2 } from "lucide-react"

interface SectionLoaderProps {
  isLoading: boolean
  className?: string
  loaderClassName?: string
}

export function SectionLoader({
  isLoading,
  className,
  loaderClassName,
}: SectionLoaderProps) {
  if (!isLoading) return null

  return (
    <div
      className={cn("flex w-full items-center justify-center gap-2", className)}
    >
      <Loader2
        className={cn("h-16 w-16 animate-spin text-sky-600", loaderClassName)}
      />
    </div>
  )
}
