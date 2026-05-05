import { cn } from "@/shared/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination"

interface CustomPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  isLoading?: boolean
}

export function CustomPagination({
  page,
  totalPages,
  onPageChange,
  isLoading = false,
}: CustomPaginationProps) {
  if (totalPages <= 1) return null

  const firstPage = 0
  const lastPage = totalPages - 1
  const isPrevDisabled = page === firstPage || isLoading
  const isNextDisabled = page === lastPage || isLoading

  const disabledClass = "pointer-events-none opacity-50"

  return (
    <Pagination className="text-primary duration-300 hover:text-sky-700">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(page - 1, firstPage))}
            aria-disabled={isPrevDisabled}
            className={cn(isPrevDisabled && disabledClass)}
            text="Anterior"
          />
        </PaginationItem>

        <PaginationItem>
          <span className="px-5 text-sm tracking-wide">
            Página <strong>{page + 1}</strong> de <strong>{totalPages}</strong>
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(page + 1, lastPage))}
            aria-disabled={isNextDisabled}
            className={cn(isNextDisabled && disabledClass)}
            text="Próximo"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
