import { renderWithProviders } from "@/shared/test-utils/custom-render"
import { Footer } from "./Footer"
import { screen } from "@testing-library/react"

describe(Footer.name, () => {
  test("should display the copyright text", () => {
    const expectedText = "© 2026 PetControl Todos os direitos reservados."

    renderWithProviders(<Footer />)

    expect(screen.getByRole("paragraph")).toHaveTextContent(expectedText)
  })
})
