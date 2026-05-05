interface PetTagBadgeProps {
  tag: string
}

export function PetTagBadge({ tag }: PetTagBadgeProps) {
  return (
    <span
      data-testid="pet-tag"
      className="rounded-2xl border border-gray-200 bg-gray-100 px-2 py-0.5 text-center text-[11px] font-medium text-gray-700"
    >
      {tag}
    </span>
  )
}
