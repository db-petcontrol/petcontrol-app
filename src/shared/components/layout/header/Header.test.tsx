import { renderWithProviders } from "@/shared/test-utils/custom-render"
import userEvent from "@testing-library/user-event"
import { Header } from "./Header"
import { mockNavigation } from "../../../../../jest.setup"
import { screen } from "@testing-library/react"

describe(Header.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render the logo and title", () => {
    const expectedTitle = "PetControl"
    const expectedSubTitle = "Sistema de Gerenciamento de Pets"

    renderWithProviders(<Header />)

    expect(screen.getByRole("heading")).toHaveTextContent(expectedTitle)
    expect(screen.getByRole("paragraph")).toHaveTextContent(expectedSubTitle)
  })

  it("should render the PawPrint icon", () => {
    renderWithProviders(<Header />)

    expect(screen.getByTestId("paw-print-icon")).toBeInTheDocument()
  })

  it("should navigate to '/pets' when the PawPrint icon is clicked", async () => {
    renderWithProviders(<Header />)

    await userEvent.click(screen.getByTestId("paw-print-icon"))
    expect(mockNavigation.routerFunctions.push).toHaveBeenCalledWith("/pets")
  })
})
