export type Option = {
  value: string
  label: string
}

export type PageResponse<T> = {
  content: T[]
  totalPages: number
  totalElements: number | undefined
  size: number
  number: number
}
