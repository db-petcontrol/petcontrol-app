import { Toaster } from "sonner"

export function CustomToaster() {
  return (
    <Toaster
      data-testid="app-toaster"
      position="top-right"
      toastOptions={{
        className:
          "pointer-events-none !rounded-lg !py-3 !px-5 data-[type=success]:!bg-green-500 !text-white data-[type=success]:!border-green-700 data-[type=error]:!bg-red-500 data-[type=error]:!border-red-500",
      }}
    />
  )
}
