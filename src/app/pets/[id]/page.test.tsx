import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { screen } from "@testing-library/react"
import React from "react"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import { usePetPageViewModel } from "@/features/pets"

jest.mock("@/features/pets", () => ({
  ...jest.requireActual("@/features/pets"),
  usePetPageViewModel: jest.fn(),
}))

const baseHookMock = {
  pet: petResponseMock,
  isLoading: false,
}

const mockParams = { id: petResponseMock.id }

describe("Pet Details Page", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    React.use = jest.fn().mockReturnValue(mockParams)
    ;(usePetPageViewModel as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should display the title and subtitle", () => {
    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)

    expect(
      screen.getByRole("heading", { name: /detalhes do pet/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/visualização completa/i)).toBeInTheDocument()
  })

  it("should display the edit and delete buttons", () => {
    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)

    expect(screen.getByRole("button", { name: /editar/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /excluir/i })).toBeInTheDocument()
  })

  it("should render the PetDetails component", () => {
    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)

    expect(
      screen.getByRole("heading", { level: 3, name: /informações do pet/i })
    ).toBeInTheDocument()
    expect(screen.queryByTestId("page-loader")).not.toBeInTheDocument()
  })

  it("should render the Loader page when loading", () => {
    ;(usePetPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })
    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)

    expect(screen.getByTestId("page-loader")).toBeInTheDocument()
  })
})
