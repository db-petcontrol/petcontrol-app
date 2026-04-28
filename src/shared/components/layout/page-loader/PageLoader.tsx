"use client"

import { cn } from "@/shared/lib/utils"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"

interface PageLoaderProps {
  isLoading: boolean
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  if (!isLoading) return null

  return (
    <div
      data-testid="page-loader"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-sky-900/30 backdrop-blur-md"
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-2 text-white">
        <Loader2 className="h-16 w-16 animate-spin text-gray-100" />
      </div>
    </div>
  )
}
