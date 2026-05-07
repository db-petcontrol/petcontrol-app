import { renderHook } from "@testing-library/react"
import { usePetPageViewModel } from "./usePetPageViewModel"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import { usePet } from "../pet/usePet"
import * as toastUtils from "@/shared/utils/toast-utils"
import { mockNavigation } from "../../../../../jest.setup"
import axios from "axios"
import { QueryClientProviderMock } from "@/shared/test-utils/providers/query-client-provider.mock"

jest.mock("@/features/pets/hooks/pet/usePet", () => ({
  usePet: jest.fn(),
}))
jest.mock("@/shared/utils/toast-utils", () => ({
  showErrorToast: jest.fn(),
}))
jest.mock("axios", () => ({
  isAxiosError: jest.fn(),
}))

const baseHookMock = {
  data: petResponseMock,
  isLoading: false,
  isError: false,
  error: undefined,
}

describe(usePetPageViewModel.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(usePet as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should return the pet correctly", () => {
    const { result } = renderHook(
      () => usePetPageViewModel(petResponseMock.id),
      { wrapper: QueryClientProviderMock }
    )
    expect(result.current.pet).toEqual(petResponseMock)
  })

  it("should return loading true when usePet is loading", () => {
    ;(usePet as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })
    const { result } = renderHook(
      () => usePetPageViewModel(petResponseMock.id),
      { wrapper: QueryClientProviderMock }
    )
    expect(result.current.isLoading).toBe(true)
  })

  it("should return loading false when usePet is not loading", () => {
    const { result } = renderHook(
      () => usePetPageViewModel(petResponseMock.id),
      { wrapper: QueryClientProviderMock }
    )
    expect(result.current.isLoading).toBe(false)
  })

  it('should show error toast with "Ops! Esse pet não está disponível." and navigate to Pets on 404 error', () => {
    const error = { status: 404 }
    ;(usePet as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isError: true,
      error,
    })
    ;(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true)
    renderHook(() => usePetPageViewModel(petResponseMock.id), {
      wrapper: QueryClientProviderMock,
    })

    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalledWith(
      "Ops! Esse pet não está disponível."
    )
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })

  it("should show default error toast and navigate to Pets on generic error", () => {
    const error = { status: 500 }
    ;(usePet as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isError: true,
      error,
    })
    ;(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true)
    renderHook(() => usePetPageViewModel(petResponseMock.id), {
      wrapper: QueryClientProviderMock,
    })

    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalled()
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })
})
