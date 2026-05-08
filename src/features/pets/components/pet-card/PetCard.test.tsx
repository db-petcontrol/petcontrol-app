import { render, screen } from "@testing-library/react"
import { PetCard } from "./PetCard"
import { petResponseMock } from "@/shared/test-utils/mocks/pets-mocks"
import { renderWithProviders } from "@/shared/test-utils/custom-render"

describe(PetCard.name, () => {
  it("should display pet name, status and specie", () => {
    renderWithProviders(<PetCard pet={petResponseMock} onDelete={jest.fn()} />)

    expect(screen.getByText("Rex")).toBeInTheDocument()
    expect(screen.getByText("Disponível")).toBeInTheDocument()
    expect(screen.getByText("Cachorro")).toBeInTheDocument()
  })

  it("should display edit and delete buttons", () => {
    renderWithProviders(<PetCard pet={petResponseMock} onDelete={jest.fn()} />)

    expect(screen.getByRole("button", { name: /editar/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /excluir/i })).toBeInTheDocument()
  })

  it("should not display any tag when tags array is empty", () => {
    const pet = { ...petResponseMock, tags: [] }
    renderWithProviders(<PetCard pet={pet} onDelete={jest.fn()} />)

    expect(screen.queryAllByTestId("pet-tag")).toHaveLength(0)
  })

  it("should display exactly 4 tags", () => {
    const tags = [
      { id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", name: "Vacinado" },
      { id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e", name: "Treinado" },
      { id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f", name: "Amigável" },
      { id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a", name: "Tímido" },
    ]
    const pet = { ...petResponseMock, tags }
    renderWithProviders(<PetCard pet={pet} onDelete={jest.fn()} />)

    tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument()
    })
    expect(screen.queryByText("...")).not.toBeInTheDocument()
  })

  it("should display ellipsis when more than 4 tags", () => {
    const tags = [
      { id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", name: "Vacinado" },
      { id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e", name: "Treinado" },
      { id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f", name: "Amigável" },
      { id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a", name: "Tímido" },
      { id: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f", name: "Sociável" },
    ]
    const pet = { ...petResponseMock, tags }
    render(<PetCard pet={pet} onDelete={jest.fn()} />)

    tags.slice(0, 4).forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument()
    })
    expect(screen.getByText("...")).toBeInTheDocument()
  })
})
