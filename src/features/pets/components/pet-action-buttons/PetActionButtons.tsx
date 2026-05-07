import { DeleteButton, InfoButton } from "@/shared/components"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { cn } from "@/shared/lib/utils"
import { Edit, Trash2 } from "lucide-react"
import { PetDeleteDialog } from "../pet-delete-dialog/PetDeleteDialog"

interface PetActionButtonsProps {
  petId: string
  onDelete: (id: string) => void
  containerClassName?: string
  infoButtonClassName?: string
  deleteButtonClassName?: string
}

export function PetActionButtons({
  petId,
  onDelete,
  containerClassName,
  infoButtonClassName,
  deleteButtonClassName,
}: PetActionButtonsProps) {
  const { toEditPet } = useNavigate()

  return (
    <div className={cn("flex gap-3", containerClassName)}>
      <InfoButton
        className={infoButtonClassName}
        onClick={() => toEditPet(petId)}
      >
        <Edit size={16} /> Editar
      </InfoButton>
      <PetDeleteDialog
        onDelete={() => {
          onDelete(petId)
        }}
        triggerAction={
          <DeleteButton className={deleteButtonClassName}>
            <Trash2 size={16} /> Excluir
          </DeleteButton>
        }
      ></PetDeleteDialog>
    </div>
  )
}
