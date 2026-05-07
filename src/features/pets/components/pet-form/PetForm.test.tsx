import { render, screen, waitFor } from "@testing-library/react"
import { PetForm, PetFormProps } from "./PetForm"
import { FormProviderMock } from "@/shared/test-utils/providers/form-provider.mock"
import userEvent from "@testing-library/user-event"
import { speciesOptionsMock } from "@/shared/test-utils/mocks/species-mocks"
import { tagsOptionsMock } from "@/shared/test-utils/mocks/tags-mocks"
import { useForm } from "react-hook-form"
import { PetSchema } from "../../schemas/pet.schema"


function PetFormTestWrapper(props: Omit<PetFormProps, "formMethods">) {
  const formMethods = useForm<PetSchema>()
  return (
    <FormProviderMock methods={formMethods}>
      <PetForm {...props} formMethods={formMethods} />
    </FormProviderMock>
  )
}

describe(PetForm.name, () => {
  it("should render all form fields", async () => {
    await waitFor(() =>
      render(
        <PetFormTestWrapper
          speciesOptions={speciesOptionsMock}
          tagsOptions={tagsOptionsMock}
          onSubmit={jest.fn()}
          btnName="Cadastrar Pet"
        />
      )
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

    await waitFor(() =>
      render(
        <PetFormTestWrapper
          speciesOptions={speciesOptionsMock}
          tagsOptions={tagsOptionsMock}
          onSubmit={jest.fn()}
          btnName="Cadastrar Pet"
        />
      )
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
    await waitFor(() =>
      render(
        <PetFormTestWrapper
          speciesOptions={speciesOptionsMock}
          tagsOptions={tagsOptionsMock}
          onSubmit={jest.fn()}
          btnName="Cadastrar Pet"
        />
      )
    )

    expect(screen.getByText("Fofo")).toBeInTheDocument()
    expect(screen.getByText("Bravo")).toBeInTheDocument()
  })
})
