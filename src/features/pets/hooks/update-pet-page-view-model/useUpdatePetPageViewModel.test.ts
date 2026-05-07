import { renderHook, act } from "@testing-library/react"
import { useUpdatePetPageViewModel } from "./useUpdatePetPageViewModel"
import { toast } from "sonner"
import { mockNavigation } from "../../../../../jest.setup"
import { useSpeciesOptions } from "@/features/species"
import { useTagsOptions } from "@/features/tags"
import { usePet } from "../pet/usePet"
import { useUpdatePet } from "../update-pet/useUpdatePet"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"
import { petMock, petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import * as toastUtils from "@/shared/utils/toast-utils"
import { QueryClientProviderMock } from "@/shared/test-utils/providers/query-client-provider.mock"
import { PetSchema } from "../../schemas/pet.schema"

jest.mock("@/features/species", () => ({
  useSpeciesOptions: jest.fn(),
}))
jest.mock("@/features/tags", () => ({
  useTagsOptions: jest.fn(),
}))
jest.mock("../pet/usePet", () => ({
  usePet: jest.fn(),
}))
jest.mock("../update-pet/useUpdatePet", () => ({
  useUpdatePet: jest.fn(),
}))
jest.mock("@/shared/utils/toast-utils", () => ({
  showErrorToast: jest.fn(),
}))
jest.mock("sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}))

describe(useUpdatePetPageViewModel.name, () => {
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
  const petData = {
    data: petResponseMock,
    isLoading: false,
    isError: false,
  }

  const mutate = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useSpeciesOptions as jest.Mock).mockReturnValue(speciesOptions)
    ;(useTagsOptions as jest.Mock).mockReturnValue(tagsOptions)
    ;(usePet as jest.Mock).mockReturnValue(petData)
    ;(useUpdatePet as jest.Mock).mockReturnValue({ mutate, isPending: false })
  })

  it("should return speciesOptions and tagsOptions correctly", () => {
    const { result } = renderHook(() => useUpdatePetPageViewModel("1"), {
      wrapper: QueryClientProviderMock,
    })

    expect(result.current.speciesOptions).toEqual(speciesOptions.options)
    expect(result.current.tagsOptions).toEqual(tagsOptions.options)
  })

  it("should set isLoading correctly when speciesOptions is loading", () => {
    ;(useSpeciesOptions as jest.Mock).mockReturnValue({
      ...speciesOptions,
      isLoading: true,
    })

    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    expect(result.current.isLoading).toBe(true)
  })

  it("should set isLoading correctly when tagsOptions is loading", () => {
    ;(useTagsOptions as jest.Mock).mockReturnValue({
      ...tagsOptions,
      isLoading: true,
    })

    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    expect(result.current.isLoading).toBe(true)
  })

  it("should set isLoading correctly when pet is loading", () => {
    ;(usePet as jest.Mock).mockReturnValue({
      ...petData,
      isLoading: true,
    })

    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    expect(result.current.isLoading).toBe(true)
  })

  it("should call mutate when updating a pet", () => {
    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    act(() => {
      result.current.handleUpdatePet(petMock)
    })
    expect(mutate).toHaveBeenCalledWith(
      { id: petResponseMock.id, data: petMock },
      expect.any(Object)
    )
  })

  it("should show success toast and navigate when pet is updated successfully", () => {
    ;(useUpdatePet as jest.Mock).mockReturnValue({
      mutate: (_data: PetSchema, options: { onSuccess: () => void }) =>
        options.onSuccess(),
      isPending: false,
    })

    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    act(() => {
      result.current.handleUpdatePet(petMock)
    })

    expect(toast.success).toHaveBeenCalledWith("Pet atualizado com sucesso!")
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })

  it("should show error toast when pet update fails", () => {
    ;(useUpdatePet as jest.Mock).mockReturnValue({
      mutate: (_data: PetSchema, options: { onError: () => void }) =>
        options.onError(),
      isPending: false,
    })

    const { result } = renderHook(
      () => useUpdatePetPageViewModel(petResponseMock.id),
      {
        wrapper: QueryClientProviderMock,
      }
    )

    act(() => {
      result.current.handleUpdatePet(petMock)
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
    ;(usePet as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    })

    renderHook(() => useUpdatePetPageViewModel(petResponseMock.id), {
      wrapper: QueryClientProviderMock,
    })

    expect(toastUtils.showErrorToast as jest.Mock).toHaveBeenCalled()
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })
})
