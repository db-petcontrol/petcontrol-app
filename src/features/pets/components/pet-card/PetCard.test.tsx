import { render, screen } from "@testing-library/react"
import { PetCard } from "./PetCard"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import { renderWithProviders } from "@/shared/test-utils/custom-render"

describe(PetCard.name, () => {
  it("should display pet name, status and specie", () => {
    renderWithProviders(<PetCard pet={petResponseMock} />)

    expect(screen.getByText("Rex")).toBeInTheDocument()
    expect(screen.getByText("Disponível")).toBeInTheDocument()
    expect(screen.getByText("Cachorro")).toBeInTheDocument()
  })

  it("should display edit and delete buttons", () => {
    renderWithProviders(<PetCard pet={petResponseMock} />)

    expect(screen.getByRole("button", { name: /editar/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /excluir/i })).toBeInTheDocument()
  })

  it("should not display any tag when tags array is empty", () => {
    const pet = { ...petResponseMock, tags: [] }
    renderWithProviders(<PetCard pet={pet} />)

    expect(screen.queryAllByTestId("pet-tag")).toHaveLength(0)
  })

  it("should display exactly 4 tags", () => {
    const tags = ["vacinado", "treinado", "amigável", "tímido"]
    const pet = { ...petResponseMock, tags }
    renderWithProviders(<PetCard pet={pet} />)

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
    expect(screen.queryByText("...")).not.toBeInTheDocument()
  })

  it("should display ellipsis when more than 4 tags", () => {
    const tags = ["vacinado", "treinado", "amigável", "tímido", "sociável"]
    const pet = { ...petResponseMock, tags }
    render(<PetCard pet={pet} />)

    tags.slice(0, 4).forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
    expect(screen.getByText("...")).toBeInTheDocument()
  })
})
