import { useUpdatePetPageViewModel } from "@/features/pets"
import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { screen } from "@testing-library/react"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import React from "react"

jest.mock("@/features/pets", () => ({
  ...jest.requireActual("@/features/pets"),
  useUpdatePetPageViewModel: jest.fn(),
}))

jest.mock("@/shared/components", () => ({
  ...jest.requireActual("@/shared/components"),
  InputField: () => <div data-testid="input-field-mock" />,
  SelectField: () => <div data-testid="select-field-mock" />,
  CheckboxField: () => <div data-testid="checkbox-field-mock" />,
}))

const baseHookMock = {
  speciesOptions: speciesOptionsMock,
  tagsOptions: tagsOptionsMock,
  isLoading: false,
  handleUpdatePet: jest.fn(),
  formMethods: {
    handleSubmit: jest.fn(),
    formState: {
      isValid: true,
    },
  },
}

const mockParams = { id: petResponseMock.id }

describe("Edit Page", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    React.use = jest.fn().mockReturnValue(mockParams)
    ;(useUpdatePetPageViewModel as jest.Mock).mockReturnValue(baseHookMock)
  })

  it("should render the page title", () => {
    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)
    expect(
      screen.getByRole("heading", { name: /editar pet/i })
    ).toBeInTheDocument()
  })

  it("should render the PageLoader when isLoading is true", () => {
    ;(useUpdatePetPageViewModel as jest.Mock).mockReturnValue({
      ...baseHookMock,
      isLoading: true,
    })

    renderWithProviders(<Page params={Promise.resolve(mockParams)} />)
    expect(screen.getByTestId("page-loader")).toBeInTheDocument()
  })
})
