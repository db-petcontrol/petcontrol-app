import { renderHook, act } from "@testing-library/react"
import { useDeletePetHandler } from "./useDeletePetHandler"
import { useDeletePet } from "../delete-pet/useDeletePet"
import { toast } from "sonner"
import * as toastUtils from "@/shared/utils/toast-utils"
import { mockNavigation } from "../../../../../jest.setup"
import axios from "axios"
import { QueryClientProviderMock } from "@/shared/test-utils/providers/query-client-provider.mock"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"

jest.mock("../delete-pet/useDeletePet", () => ({
  useDeletePet: jest.fn(),
}))

jest.mock("sonner", () => ({
  toast: { success: jest.fn() },
}))

jest.mock("@/shared/utils/toast-utils", () => ({
  showErrorToast: jest.fn(),
}))

jest.mock("axios", () => ({
  isAxiosError: jest.fn(),
}))

const PET_ID = petResponseMock.id

describe(useDeletePetHandler.name, () => {
  const mutate = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDeletePet as jest.Mock).mockReturnValue({ mutate, isPending: false })
  })

  it("should handle success: show toast and navigate", () => {
    ;(useDeletePet as jest.Mock).mockReturnValue({
      mutate: (_id: string, options: { onSuccess: () => void }) =>
        options.onSuccess(),
    })

    const { result } = renderHook(() => useDeletePetHandler(), {
      wrapper: QueryClientProviderMock,
    })
    act(() => {
      result.current.handleDeletePet(PET_ID)
    })

    expect(toast.success).toHaveBeenCalledWith("Pet excluído com sucesso!")
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })

  it("should handle 404 error: show not found toast, and navigate", () => {
    ;(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true)
    ;(useDeletePet as jest.Mock).mockReturnValue({
      mutate: (
        _id: string,
        options: { onError: (error: { status: number }) => void }
      ) => options.onError({ status: 404 }),
    })

    const { result } = renderHook(() => useDeletePetHandler(), {
      wrapper: QueryClientProviderMock,
    })

    act(() => {
      result.current.handleDeletePet(PET_ID)
    })

    expect(toastUtils.showErrorToast).toHaveBeenCalledWith(
      "O pet informado não foi encontrado."
    )
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })

  it("should handle generic error: show default error toast and navigate", () => {
    ;(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(false)
    ;(useDeletePet as jest.Mock).mockReturnValue({
      mutate: (
        _id: string,
        options: { onError: (error: { status: number }) => void }
      ) => options.onError({ status: 500 }),
    })

    const { result } = renderHook(() => useDeletePetHandler(), {
      wrapper: QueryClientProviderMock,
    })

    act(() => {
      result.current.handleDeletePet(PET_ID)
    })

    expect(toastUtils.showErrorToast).toHaveBeenCalled()
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })
})
