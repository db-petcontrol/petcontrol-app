import { renderWithProviders } from "@/shared/test-utils/custom-render"
import Page from "./page"
import { screen } from "@testing-library/react"

jest.mock("@/features/pets", () => ({
  PetListHeader: () => <div data-testid="pet-list-header" />,
}))

jest.mock("@/shared/components/health-check-test/HealthCheckTest", () => ({
  HealthCheckTest: () => <div data-testid="health-check-test" />,
}))

describe("Pets Page", () => {
  it("should render PetListHeader", () => {
    renderWithProviders(<Page />)
    expect(screen.getByTestId("pet-list-header")).toBeInTheDocument()
  })

  it("should render HealthCheckTest", () => {
    renderWithProviders(<Page />)
    expect(screen.getByTestId("health-check-test")).toBeInTheDocument()
  })
})
