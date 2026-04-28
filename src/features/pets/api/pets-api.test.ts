import { petsApi } from "./pets-api"
import { api } from "@/shared/lib/api.config"
import { petMock } from "@/shared/test-utils/mocks/pets-mocks"

describe("petsApi", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should call api.post with the correct data when creating a pet", async () => {
    ;(api.post as jest.Mock).mockResolvedValue(undefined)

    await petsApi.create(petMock)

    expect(api.post).toHaveBeenCalledWith("/pets", petMock)
  })
})
