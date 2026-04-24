import { render } from "@testing-library/react"
import { AllProvidersMock } from "./providers/all-providers.mock"

function customRender(ui: React.ReactElement, options = {}) {
  render(ui, { wrapper: AllProvidersMock, ...options })
}

export { customRender as renderWithProviders }
