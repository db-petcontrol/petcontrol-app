import { petsApi } from "./pets-api"
import { api } from "@/shared/lib/api.config"
import { petMock, petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"

const PET_ID = petResponseMock.id
const PET_URL = "/pets"
const PET_URL_ID = `${PET_URL}/${PET_ID}`

describe("petsApi", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should call api.post with the correct data when creating a pet", async () => {
    ;(api.post as jest.Mock).mockResolvedValue(undefined)
    await petsApi.create(petMock)

    expect(api.post).toHaveBeenCalledWith(PET_URL, petMock)
  })

  it("should call api.put with the correct data when updating a pet", async () => {
    ;(api.put as jest.Mock).mockResolvedValue({ data: petMock })
    await petsApi.update(PET_ID, petMock)

    expect(api.put).toHaveBeenCalledWith(PET_URL_ID, petMock)
  })

  it("should call api.delete with the correct id when deleting a pet", async () => {
    ;(api.delete as jest.Mock).mockResolvedValue({ data: petMock })
    await petsApi.delete(PET_ID)

    expect(api.delete).toHaveBeenCalledWith(PET_URL_ID)
  })

  it("should call api.get with the correct id when getting a pet", async () => {
    ;(api.get as jest.Mock).mockResolvedValue({ data: petMock })
    await petsApi.get(PET_ID)

    expect(api.get).toHaveBeenCalledWith(PET_URL_ID)
  })

  it("should call api.get with correct params when getting all pets", async () => {
    const page = 0
    const size = 6

    ;(api.get as jest.Mock).mockResolvedValue({ data: [petMock] })
    await petsApi.getAll(page, size)

    expect(api.get).toHaveBeenCalledWith(PET_URL, { params: { page, size } })
  })
})
