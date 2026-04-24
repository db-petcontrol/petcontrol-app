import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { mockNavigation } from "../../jest.setup"

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should redirect to /pets", () => {
    renderWithProviders(<Page />)
    expect(mockNavigation.redirect).toHaveBeenCalledWith("/pets")
  })
})
