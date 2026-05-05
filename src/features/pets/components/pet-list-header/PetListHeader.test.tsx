import userEvent from "@testing-library/user-event"
import { PetListHeader } from "./PetListHeader"
import { renderWithProviders } from "@/shared/test-utils/custom-render"
import { screen } from "@testing-library/react"
import { mockNavigation } from "../../../../../jest.setup"

describe(PetListHeader.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render the 'Adicionar Pet' button", () => {
    renderWithProviders(<PetListHeader totalPets={0} />)
    expect(
      screen.getByRole("button", { name: /adicionar pet/i })
    ).toBeInTheDocument()
  })

  it("should navigate to '/pets/novo' when the button is clicked", async () => {
    renderWithProviders(<PetListHeader totalPets={0} />)
    await userEvent.click(
      screen.getByRole("button", { name: /adicionar pet/i })
    )
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith(
      "/pets/novo"
    )
  })
})
