import { CustomDialog } from "@/shared/components"
import { ReactNode } from "react"

interface PetDeleteDialogProps {
  triggerAction: ReactNode
  onDelete: () => void
}

export function PetDeleteDialog({
  triggerAction,
  onDelete,
}: PetDeleteDialogProps) {
  return (
    <CustomDialog
      title="Excluir Pet"
      description="Tem certeza que deseja excluir este pet? Esta ação não poderá ser desfeita."
      confirmLabel="Excluir"
      cancelLabel="Cancelar"
      triggerAction={triggerAction}
      onConfirm={onDelete}
    />
  )
}
