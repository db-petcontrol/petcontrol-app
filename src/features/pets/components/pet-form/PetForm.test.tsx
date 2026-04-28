import { render, screen } from "@testing-library/react"
import { PetForm } from "./PetForm"
import { FormProviderMock } from "@/shared/test-utils/providers/form-provider.mock"
import React from "react"
import userEvent from "@testing-library/user-event"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"

function renderWithFormProvider(children: React.ReactNode) {
  return render(<FormProviderMock>{children}</FormProviderMock>)
}

describe(PetForm.name, () => {
  it("should render all form fields", () => {
    jest.resetModules()
    renderWithFormProvider(
      <PetForm
        speciesOptions={speciesOptionsMock}
        tagsOptions={tagsOptionsMock}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByLabelText(/nome do pet/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/espécie/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument()
    expect(screen.getByText(/tags/i)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /cadastrar pet/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /cancelar/i })
    ).toBeInTheDocument()
  })

  it("should display species options", async () => {
    const user = userEvent.setup()

    renderWithFormProvider(
      <PetForm
        speciesOptions={speciesOptionsMock}
        tagsOptions={tagsOptionsMock}
        onSubmit={jest.fn()}
      />
    )

    await screen.findByText(/selecione a espécie/i)
    await user.click(screen.getByTestId("select-specieId"))
    expect(
      screen.getByRole("option", { name: /cachorro/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("option", { name: /gato/i })).toBeInTheDocument()

    expect(screen.getByText("Fofo")).toBeInTheDocument()
    expect(screen.getByText("Bravo")).toBeInTheDocument()
  })

  it("should display tag options", async () => {
    renderWithFormProvider(
      <PetForm
        speciesOptions={speciesOptionsMock}
        tagsOptions={tagsOptionsMock}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByText("Fofo")).toBeInTheDocument()
    expect(screen.getByText("Bravo")).toBeInTheDocument()
  })
})
