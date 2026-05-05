import { PetStatus, petStatusLabels } from "../../enums/pet-status.enum"

interface PetStatusBadgeProps {
  status: PetStatus
}

const petStatusColors: Record<PetStatus, string> = {
  AVAILABLE: "bg-green-100 text-green-700 border-green-200",
  IN_ANALYSIS: "bg-yellow-100 text-yellow-700 border-yellow-300",
  ADOPTED: "bg-sky-100 text-sky-700 border-sky-200",
}

export function PetStatusBadge({ status }: PetStatusBadgeProps) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
        petStatusColors[status] || "border-gray-500 bg-gray-200 text-gray-700"
      }`}
    >
      {petStatusLabels[status]}
    </span>
  )
}
