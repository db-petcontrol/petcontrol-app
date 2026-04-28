import { renderHook, waitFor } from "@testing-library/react"
import { useTags } from "./useTags"
import { tagsApi } from "../../api/tags-api"
import { QueryClientProviderMock } from "@/shared/test-utils/providers/query-client-provider.mock"
import { tagsMock } from "@/shared/test-utils/mocks/tags-mocks"

jest.mock("../../api/tags-api", () => ({
  tagsApi: {
    getTags: jest.fn(),
  },
}))

describe(useTags.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return species when the query is successful", async () => {
    ;(tagsApi.getTags as jest.Mock).mockResolvedValue(tagsMock)

    const { result } = renderHook(() => useTags(), {
      wrapper: QueryClientProviderMock,
    })

    await waitFor(() => expect(result.current.data).toEqual(tagsMock))
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it("should return error when the query fails", async () => {
    ;(tagsApi.getTags as jest.Mock).mockRejectedValue(new Error("Erro"))

    const { result } = renderHook(() => useTags(), {
      wrapper: QueryClientProviderMock,
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.data).toBeUndefined()
    expect(result.current.isError).toBe(true)
  })
})
