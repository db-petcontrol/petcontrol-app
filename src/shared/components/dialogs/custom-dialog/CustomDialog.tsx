"use client"

import { ReactNode, useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { InfoButton } from "../../buttons/info-button/InfoButton"
import { PrimaryButton } from "../../buttons/primary-button/PrimaryButton"

interface AppDialogProps extends React.ComponentProps<typeof Dialog> {
  title: string
  description: string
  confirmLabel: string
  cancelLabel: string
  triggerAction: ReactNode
  onConfirm: () => void
}

export function CustomDialog({
  title,
  description,
  confirmLabel,
  cancelLabel,
  triggerAction,
  onConfirm,
  ...props
}: AppDialogProps) {
  const [open, setOpen] = useState(false)

  function handleConfirm() {
    onConfirm()
    setOpen(false)
  }

  return (
    <Dialog {...props} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerAction}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="px-3 py-2">
          <DialogTitle className="text-lg">{title}</DialogTitle>
          <DialogDescription className="">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex border-0 bg-transparent">
          <DialogClose asChild>
            <InfoButton className="flex-1">{cancelLabel}</InfoButton>
          </DialogClose>
          <PrimaryButton className="flex-1" onClick={handleConfirm}>
            {confirmLabel}
          </PrimaryButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
