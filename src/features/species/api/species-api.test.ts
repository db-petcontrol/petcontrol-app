import { speciesApi } from "./species-api"
import { api } from "@/shared/lib/api.config"
import { speciesMock } from "@/shared/test-utils/mocks/species-mocks"

describe("speciesApi", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should call api.get and return the list of species", async () => {
    ;(api.get as jest.Mock).mockResolvedValue({ data: speciesMock })

    const result = await speciesApi.getSpecies()

    expect(api.get).toHaveBeenCalledWith("/species")
    expect(result).toEqual(speciesMock)
  })
})
