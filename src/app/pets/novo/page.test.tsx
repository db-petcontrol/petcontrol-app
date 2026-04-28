import { useCreatePetPageViewModel } from "@/features/pets"
import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { screen } from "@testing-library/react"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"

jest.mock("@/features/pets", () => ({
  ...jest.requireActual("@/features/pets"),
  useCreatePetPageViewModel: jest.fn(),
}))

jest.mock("@/shared/components", () => ({
  ...jest.requireActual("@/shared/components"),
  InputField: () => <div data-testid="input-field-mock" />,
  SelectField: () => <div data-testid="select-field-mock" />,
  CheckboxField: () => <div data-testid="checkbox-field-mock" />,
}))

const baseHookMock = {
  speciesOptionsMock,
  tagsOptionsMock,
  isLoading: false,
  handleCreatePet: jest.fn(),
  isCreating: false,
}

describe("Create Page", () => {
  beforeEach(() => {
    ;(useCreatePetPageViewModel as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should render the page title", () => {
    renderWithProviders(<Page />)
    expect(
      screen.getByRole("heading", { name: /adicionar novo pet/i })
    ).toBeInTheDocument()
  })

  it("should render the PageLoader when isLoading is true", () => {
    ;(useCreatePetPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })

    renderWithProviders(<Page />)
    expect(screen.getByTestId("page-loader")).toBeInTheDocument()
  })

  it("should render the PageLoader when isCreating is true", () => {
    ;(useCreatePetPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isCreating: true,
    })

    renderWithProviders(<Page />)
    expect(screen.getByTestId("page-loader")).toBeInTheDocument()
  })
})
