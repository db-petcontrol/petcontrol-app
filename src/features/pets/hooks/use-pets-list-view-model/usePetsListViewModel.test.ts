import { renderHook, act } from "@testing-library/react"
import { usePetsListPageViewModel } from "./usePetsListViewModel"
import { usePets } from "../pets/usePets"
import * as toastUtils from "@/shared/utils/toast-utils"
import { petPageMock } from "@/shared/test-utils/mocks/pets-mocks"

jest.mock("../pets/usePets", () => ({
  usePets: jest.fn(),
}))
jest.mock("@/shared/utils/toast-utils", () => ({
  showErrorToast: jest.fn(),
}))

const baseHookMock = {
  data: petPageMock,
  isLoading: false,
  isFetching: false,
  isError: false,
}

describe(usePetsListPageViewModel.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(usePets as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should return pets page data correctly", () => {
    const { result } = renderHook(() => usePetsListPageViewModel())
    expect(result.current.pagePetCurrent).toEqual(petPageMock)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.page).toBe(0)
  })

  it("should set isLoading true when loading", () => {
    ;(usePets as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })
    const { result } = renderHook(() => usePetsListPageViewModel())
    expect(result.current.isLoading).toBe(true)
  })

  it("should set isLoading true when fetching", () => {
    ;(usePets as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isFetching: true,
    })
    const { result } = renderHook(() => usePetsListPageViewModel())
    expect(result.current.isLoading).toBe(true)
  })

  it("should call showErrorToast when isError is true", () => {
    ;(usePets as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isError: true,
    })
    renderHook(() => usePetsListPageViewModel())
    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalled()
  })

  it("should change page when handleChangePage is called", () => {
    const nextPage = 2
    const { result } = renderHook(() => usePetsListPageViewModel())
    act(() => {
      result.current.handleChangePage(nextPage)
    })
    expect(result.current.page).toBe(nextPage)
  })

  it("should return empty page when data is undefined", () => {
    ;(usePets as jest.Mock).mockReturnValue({
      ...baseHookMock,
      data: undefined,
    })
    const { result } = renderHook(() => usePetsListPageViewModel())
    expect(result.current.pagePetCurrent).toEqual({
      content: [],
      totalPages: 0,
      totalElements: undefined,
      size: 0,
      number: 0,
    })
  })
})
