import { useEffect, useState } from "react"
import { usePets } from "../pets/usePets"
import { PageResponse } from "@/shared/types/common.types"
import { Pet } from "../../types/pets.types"
import { showErrorToast } from "@/shared/utils/toast-utils"

interface UsePetsListPageViewModelResult {
  pagePetCurrent: PageResponse<Pet>
  isLoading: boolean
  page: number
  handleChangePage: (page: number) => void
}

export function usePetsListPageViewModel(): UsePetsListPageViewModelResult {
  const [page, setPage] = useState(0)
  const { data, isLoading: petsLoading, isFetching, isError } = usePets(page)

  const isLoading = petsLoading || isFetching

  const emptyPage: PageResponse<Pet> = {
    content: [],
    totalPages: 0,
    totalElements: undefined,
    size: 0,
    number: 0,
  }

  useEffect(() => {
    if (isError) {
      showErrorToast()
    }
  }, [isError])

  function handleChangePage(page: number): void {
    setPage(page)
  }

  return {
    pagePetCurrent: data ?? emptyPage,
    isLoading,
    page,
    handleChangePage,
  }
}
