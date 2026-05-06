import { render, screen } from "@testing-library/react"
import { PetDetails } from "./PetDetails"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"

jest.mock("@/shared/components", () => ({
  ...jest.requireActual("@/shared/components"),
  ImagePlaceholder: () => <div data-testid="image-placeholder" />,
}))

describe(PetDetails.name, () => {
  it("should display content section titles", () => {
    render(<PetDetails pet={petResponseMock} />)

    expect(screen.getByText("Fotos do Pet")).toBeInTheDocument()
    expect(screen.getByText("Informações do Pet")).toBeInTheDocument()
  })

  it("should display the subtitles in the 'Informações do Pet' section", () => {
    render(<PetDetails pet={petResponseMock} />)

    expect(screen.getByText("ID")).toBeInTheDocument()
    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Espécie")).toBeInTheDocument()
    expect(screen.getByText("Status")).toBeInTheDocument()
    expect(screen.getByText("Tags")).toBeInTheDocument()
  })

  it("should display 4 image placeholders", () => {
    render(<PetDetails pet={petResponseMock} />)
    expect(screen.getAllByTestId("image-placeholder")).toHaveLength(4)
  })

  it("should display pet information (id, name, species and status)", () => {
    render(<PetDetails pet={petResponseMock} />)

    expect(screen.getByText(petResponseMock.id)).toBeInTheDocument()
    expect(screen.getByText(petResponseMock.name)).toBeInTheDocument()
    expect(screen.getByText(petResponseMock.species.name)).toBeInTheDocument()
    expect(screen.getByText(/disponível/i)).toBeInTheDocument()
  })

  it("should display all pet tags", () => {
    render(<PetDetails pet={petResponseMock} />)
    petResponseMock.tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument()
    })
  })

  it('should display "Nenhuma tag foi cadastrada" when there are no tags', () => {
    const pet = { ...petResponseMock, tags: [] }
    render(<PetDetails pet={pet} />)
    expect(screen.getByText(/nenhuma tag foi cadastrada/i)).toBeInTheDocument()
  })
})
