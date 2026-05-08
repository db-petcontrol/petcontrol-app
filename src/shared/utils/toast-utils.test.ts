import { toast } from "sonner"
import { showErrorToast } from "./toast-utils"

jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
  },
}))

describe(showErrorToast.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should display the toast with the default message if no message is provided", () => {
    showErrorToast()
    expect(toast.error).toHaveBeenCalledWith(
      "Ocorreu um erro inesperado. Tente novamente mais tarde."
    )
  })

  it("should display the toast with the custom message if provided", () => {
    const errorMessage = "Erro interno"

    showErrorToast(errorMessage)
    expect(toast.error).toHaveBeenCalledWith(errorMessage)
  })
})
