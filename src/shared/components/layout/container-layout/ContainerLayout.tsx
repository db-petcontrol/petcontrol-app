import { cn } from "@/shared/lib/utils"

interface ContainerLayoutProps {
  title?: string
  className?: string
  children: React.ReactNode
}

export function ContainerLayout({
  title,
  className,
  children,
}: ContainerLayoutProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 bg-white px-5 py-6 shadow-md shadow-gray-200",
        className
      )}
    >
      {title && <h3 className="mb-5 text-2xl font-semibold">{title}</h3>}
      {children}
    </div>
  )
}
