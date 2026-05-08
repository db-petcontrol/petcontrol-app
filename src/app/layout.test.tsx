import { screen } from "@testing-library/react"
import RootLayout from "./layout"
import { renderWithProviders } from "@/shared/test-utils/custom-render"

describe(RootLayout.name, () => {
  it("should render the Header, Footer and the internal content", () => {
    const title = "Test"

    renderWithProviders(
      <RootLayout>
        <h1>{title}</h1>
      </RootLayout>
    )
    expect(
      screen.getByText(/Sistema de Gerenciamento de Pets/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Todos os direitos reservados/i)
    ).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
