import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { screen } from "@testing-library/react"
import { petPageMock } from "@/shared/test-utils/mocks/pets-mocks"
import { usePetsListPageViewModel } from "@/features/pets"

jest.mock("@/features/pets", () => ({
  ...jest.requireActual("@/features/pets"),
  usePetsListPageViewModel: jest.fn(),
  PetListHeader: () => <div data-testid="pet-list-header" />,
}))

const baseHookMock = {
  pagePetCurrent: petPageMock,
  isLoading: false,
  page: 0,
  handleChangePage: jest.fn(),
}

describe("Pets Page", () => {
  beforeEach(() => {
    ;(usePetsListPageViewModel as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should render PetListHeader", () => {
    renderWithProviders(<Page />)
    expect(screen.getByTestId("pet-list-header")).toBeInTheDocument()
  })

  it("should render a card for each pet in the list", () => {
    renderWithProviders(<Page />)
    const titleElements = screen.getAllByRole("heading", { level: 3 })
    expect(titleElements).toHaveLength(petPageMock.content.length)
  })

  it('should display "nenhum pet foi encontrado" when the list is empty', () => {
    ;(usePetsListPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      pagePetCurrent: { ...petPageMock, content: [] },
    })

    renderWithProviders(<Page />)
    expect(screen.getByText(/nenhum pet foi encontrado/i)).toBeInTheDocument()
  })

  it("should display only the loader when loading and not render any pet card", () => {
    ;(usePetsListPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })

    renderWithProviders(<Page />)
    expect(screen.getByTestId("section-loader")).toBeInTheDocument()
    expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(0)
  })

  it("should display the current page and total pages correctly in the pagination", () => {
    renderWithProviders(<Page />)

    const strongElements = screen.getAllByRole("strong")

    expect(strongElements.length).toBeGreaterThanOrEqual(2)

    const currentPage = Number(strongElements[0].textContent)
    const totalPages = Number(strongElements[1].textContent)

    expect(currentPage).toBe(baseHookMock.page + 1)
    expect(totalPages).toBe(baseHookMock.pagePetCurrent.totalPages)
  })
})
