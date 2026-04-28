import { renderHook, waitFor } from "@testing-library/react"
import { useSpecies } from "./useSpecies"
import { speciesApi } from "../../api/species-api"
import { QueryClientProviderMock } from "@/shared/test-utils/providers/query-client-provider.mock"
import { speciesMock } from "@/shared/test-utils/mocks/species-mocks"

jest.mock("../../api/species-api", () => ({
  speciesApi: {
    getSpecies: jest.fn(),
  },
}))

describe(useSpecies.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return species when the query is successful", async () => {
    ;(speciesApi.getSpecies as jest.Mock).mockResolvedValue(speciesMock)

    const { result } = renderHook(() => useSpecies(), {
      wrapper: QueryClientProviderMock,
    })

    await waitFor(() => expect(result.current.data).toEqual(speciesMock))
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it("should return error when the query fails", async () => {
    ;(speciesApi.getSpecies as jest.Mock).mockRejectedValue(new Error("Erro"))

    const { result } = renderHook(() => useSpecies(), {
      wrapper: QueryClientProviderMock,
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.data).toBeUndefined()
    expect(result.current.isError).toBe(true)
  })
})
