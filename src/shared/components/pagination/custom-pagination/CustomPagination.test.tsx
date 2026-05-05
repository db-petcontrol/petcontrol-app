import { render, screen } from "@testing-library/react"
import { CustomPagination } from "./CustomPagination"
import { renderWithProviders } from "@/shared/test-utils/custom-render"
import userEvent from "@testing-library/user-event"

const onPageChange = jest.fn()
const previousLabel = /go to previous page/i
const nextLabel = /go to next page/i

describe(CustomPagination.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should show page 1 of total, disable previous and enable next on first page", () => {
    renderWithProviders(
      <CustomPagination page={0} totalPages={3} onPageChange={onPageChange} />
    )
    expect(screen.getByText(/Página/i)).toHaveTextContent("Página 1 de 3")
    expect(screen.getByLabelText(previousLabel)).toHaveAttribute(
      "aria-disabled",
      "true"
    )
    expect(screen.getByLabelText(nextLabel)).toHaveAttribute(
      "aria-disabled",
      "false"
    )
  })

  it("should show last page, enable previous and disable next on last page", () => {
    renderWithProviders(
      <CustomPagination page={2} totalPages={3} onPageChange={onPageChange} />
    )
    expect(screen.getByText(/Página/i)).toHaveTextContent("Página 3 de 3")
    expect(screen.getByLabelText(previousLabel)).toHaveAttribute(
      "aria-disabled",
      "false"
    )
    expect(screen.getByLabelText(nextLabel)).toHaveAttribute(
      "aria-disabled",
      "true"
    )
  })

  it("should disable both previous and next when loading", () => {
    renderWithProviders(
      <CustomPagination
        page={1}
        totalPages={3}
        onPageChange={onPageChange}
        isLoading
      />
    )
    expect(screen.getByLabelText(previousLabel)).toHaveAttribute(
      "aria-disabled",
      "true"
    )
    expect(screen.getByLabelText(nextLabel)).toHaveAttribute(
      "aria-disabled",
      "true"
    )
  })

  it("should call onPageChange with next page when next is clicked", async () => {
    renderWithProviders(
      <CustomPagination page={0} totalPages={3} onPageChange={onPageChange} />
    )
    await userEvent.click(screen.getByLabelText(nextLabel))
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it("should call onPageChange with previous page when previous is clicked", async () => {
    renderWithProviders(
      <CustomPagination page={1} totalPages={3} onPageChange={onPageChange} />
    )
    await userEvent.click(screen.getByLabelText(previousLabel))
    expect(onPageChange).toHaveBeenCalledWith(0)
  })

  it("should not render anything if totalPages is 1 or less", () => {
    const { container } = render(
      <CustomPagination page={0} totalPages={1} onPageChange={onPageChange} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
