import { useMutation } from "@tanstack/react-query"

import { api } from "@/shared/lib/api.config"

interface HealthCheckResponse {
  status: "UP" | "DOWN"
  groups?: string[]
}

export function useHealthCheck() {
  return useMutation<HealthCheckResponse, Error>({
    mutationFn: async () => {
      const response = await api.get<HealthCheckResponse>("/actuator/health")
      return response.data
    },
  })
}
