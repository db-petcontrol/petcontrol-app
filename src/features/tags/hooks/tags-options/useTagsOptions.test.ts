import { renderHook } from "@testing-library/react"
import { useTagsOptions } from "./useTagsOptions"
import { tagsMock, tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"
import * as useTagsModule from "../tags/useTags"

jest.mock("../tags/useTags", () => ({
  useTags: jest.fn(),
}))

const baseHookMock = {
  data: tagsMock,
  isLoading: false,
  isError: false,
}

describe(useTagsOptions.name, () => {
  beforeEach(() => {
    ;(useTagsModule.useTags as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should return the correct options when data is present", () => {
    const { result } = renderHook(() => useTagsOptions())
    expect(result.current.options).toEqual(tagsOptionsMock)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it("should return an empty array when there is no data", () => {
    ;(useTagsModule.useTags as jest.Mock).mockReturnValue({
      ...baseHookMock,
      data: undefined,
    })

    const { result } = renderHook(() => useTagsOptions())
    expect(result.current.options).toEqual([])
  })

  it("should return loading and error states correctly", () => {
    ;(useTagsModule.useTags as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      isError: true,
    })

    const { result } = renderHook(() => useTagsOptions())
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(true)
  })
})
