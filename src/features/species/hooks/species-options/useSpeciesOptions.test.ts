import { renderHook } from "@testing-library/react"
import { useSpeciesOptions } from "./useSpeciesOptions"
import {
  speciesMock,
  speciesOptionsMock,
} from "@/shared/test-utils/mocks/species-mocks"
import * as useSpeciesModule from "../species/useSpecies"

jest.mock("../species/useSpecies", () => ({
  useSpecies: jest.fn(),
}))

const baseHookMock = {
  data: speciesMock,
  isLoading: false,
  isError: false,
}

describe(useSpeciesOptions.name, () => {
  beforeEach(() => {
    ;(useSpeciesModule.useSpecies as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should return the correct options when data is present", () => {
    const { result } = renderHook(() => useSpeciesOptions())

    expect(result.current.options).toEqual(speciesOptionsMock)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it("should return an empty array when there is no data", () => {
    ;(useSpeciesModule.useSpecies as jest.Mock).mockReturnValue({
      ...baseHookMock,
      data: undefined,
    })

    const { result } = renderHook(() => useSpeciesOptions())
    expect(result.current.options).toEqual([])
  })

  it("should return loading and error states correctly", () => {
    ;(useSpeciesModule.useSpecies as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      isError: true,
    })

    const { result } = renderHook(() => useSpeciesOptions())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(true)
  })
})
