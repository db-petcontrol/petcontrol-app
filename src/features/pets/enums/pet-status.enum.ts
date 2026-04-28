export enum PetStatus {
  AVAILABLE = "AVAILABLE",
  IN_ANALYSIS = "IN_ANALYSIS",
  ADOPTED = "ADOPTED",
}

export const PetStatusArray = Object.values(PetStatus) as [string, ...string[]]

export const petStatusLabels: Record<PetStatus, string> = {
  [PetStatus.AVAILABLE]: "Disponível",
  [PetStatus.IN_ANALYSIS]: "Em Análise",
  [PetStatus.ADOPTED]: "Adotado",
}
