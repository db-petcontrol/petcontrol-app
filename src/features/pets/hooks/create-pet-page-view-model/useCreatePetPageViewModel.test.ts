import { renderHook, act } from "@testing-library/react"
import { useCreatePetPageViewModel } from "./useCreatePetPageViewModel"
import { toast } from "sonner"
import { PetSchema } from "../../schemas/pet.schema"
import { mockNavigation } from "../../../../../jest.setup"
import { useSpeciesOptions } from "@/features/species"
import { useTagsOptions } from "@/features/tags"
import { useCreatePet } from "../create-pet/useCreatePet"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"
import { petMock } from "@/shared/test-utils/mocks/pets-mocks"
import * as toastUtils from "@/shared/utils/toast-utils"

jest.mock("@/features/species", () => ({
  useSpeciesOptions: jest.fn(),
}))
jest.mock("@/features/tags", () => ({
  useTagsOptions: jest.fn(),
}))

jest.mock("../create-pet/useCreatePet", () => ({
  useCreatePet: jest.fn(),
}))

jest.mock("@/shared/utils/toast-utils", () => ({
  showErrorToast: jest.fn(),
}))
jest.mock("sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}))

describe("useCreatePetPageViewModel", () => {
  const speciesOptions = {
    options: speciesOptionsMock,
    isLoading: false,
    isError: false,
  }
  const tagsOptions = {
    options: tagsOptionsMock,
    isLoading: false,
    isError: false,
  }
  const mutate = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useSpeciesOptions as jest.Mock).mockReturnValue(speciesOptions)
    ;(useTagsOptions as jest.Mock).mockReturnValue(tagsOptions)
    ;(useCreatePet as jest.Mock).mockReturnValue({ mutate, isPending: false })
  })

  it("should return speciesOptions and tagsOptions correctly", () => {
    const { result } = renderHook(() => useCreatePetPageViewModel())

    expect(result.current.speciesOptions).toEqual(speciesOptions.options)
    expect(result.current.tagsOptions).toEqual(tagsOptions.options)
  })

  it("should set isLoading correctly when speciesOptions is loading", () => {
    ;(useSpeciesOptions as jest.Mock).mockReturnValue({
      ...speciesOptions,
      isLoading: true,
    })
    const { result } = renderHook(() => useCreatePetPageViewModel())
    expect(result.current.isLoading).toBe(true)
  })

  it("should set isLoading correctly when tagsOptions is loading", () => {
    ;(useTagsOptions as jest.Mock).mockReturnValue({
      ...tagsOptions,
      isLoading: true,
    })
    const { result } = renderHook(() => useCreatePetPageViewModel())
    expect(result.current.isLoading).toBe(true)
  })

  it("should call mutate when creating a pet", () => {
    const { result } = renderHook(() => useCreatePetPageViewModel())
    act(() => {
      result.current.handleCreatePet(petMock)
    })
    expect(mutate).toHaveBeenCalledWith(petMock, expect.any(Object))
  })

  it("should show success toast and navigate when pet is created successfully", () => {
    ;(useCreatePet as jest.Mock).mockReturnValue({
      mutate: (_data: PetSchema, options: { onSuccess: () => void }) =>
        options.onSuccess(),
      isPending: false,
    })

    const { result } = renderHook(() => useCreatePetPageViewModel())
    act(() => {
      result.current.handleCreatePet(petMock)
    })
    expect(toast.success).toHaveBeenCalledWith("Pet cadastrado com sucesso!")
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })

  it("should show error toast when pet creation fails", () => {
    ;(useCreatePet as jest.Mock).mockReturnValue({
      mutate: (_data: PetSchema, options: { onError: () => void }) =>
        options.onError(),
      isPending: false,
    })

    const { result } = renderHook(() => useCreatePetPageViewModel())
    act(() => {
      result.current.handleCreatePet(petMock)
    })
    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalled()
  })

  it("should show error toast and navigate when loading error is detected", () => {
    ;(useSpeciesOptions as jest.Mock).mockReturnValue({
      options: [],
      isLoading: false,
      isError: true,
    })
    ;(useTagsOptions as jest.Mock).mockReturnValue({
      options: [],
      isLoading: false,
      isError: false,
    })

    renderHook(() => useCreatePetPageViewModel())

    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalled()
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })
})
