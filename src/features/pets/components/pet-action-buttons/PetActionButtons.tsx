import { DeleteButton, InfoButton } from "@/shared/components"
import { cn } from "@/shared/lib/utils"
import { Edit, Trash2 } from "lucide-react"

interface PetActionButtonsProps {
  containerClassName?: string
  infoButtonClassName?: string
  deleteButtonClassName?: string
}

export function PetActionButtons({
  containerClassName,
  infoButtonClassName,
  deleteButtonClassName,
}: PetActionButtonsProps) {
  return (
    <div className={cn("flex gap-3", containerClassName)}>
      <InfoButton className={infoButtonClassName}>
        <Edit size={16} /> Editar
      </InfoButton>
      <DeleteButton className={deleteButtonClassName}>
        <Trash2 size={16} /> Excluir
      </DeleteButton>
    </div>
  )
}
