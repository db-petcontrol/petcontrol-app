import { renderWithProviders } from "@/shared/test-utils/custom-render"
import { CustomDialog } from "./CustomDialog"
import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"

describe(CustomDialog.name, () => {
  it("should call onConfirm when the confirm button is clicked", async () => {
    const title = "Test Dialog"
    const onConfirm = jest.fn()

    renderWithProviders(
      <CustomDialog
        title={title}
        description="Test Description"
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        triggerAction={<button>Abrir</button>}
        onConfirm={onConfirm}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /abrir/i }))
    expect(await screen.findByText(title)).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: /confirmar/i }))

    expect(onConfirm).toHaveBeenCalled()
    expect(screen.queryByText(title)).not.toBeInTheDocument()
  })
})
