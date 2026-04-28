import { tagsApi } from "./tags-api"
import { api } from "@/shared/lib/api.config"
import { tagsMock } from "@/shared/test-utils/mocks/tags-mocks"

describe("tagsApi", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should call api.get and return the list of tags", async () => {
    ;(api.get as jest.Mock).mockResolvedValue({ data: tagsMock })
    const result = await tagsApi.getTags()

    expect(api.get).toHaveBeenCalledWith("/tags")
    expect(result).toEqual(tagsMock)
  })
})
