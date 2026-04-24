import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

interface QueryClientProviderMockProps {
  children: React.ReactNode
}

export function QueryClientProviderMock({
  children,
}: QueryClientProviderMockProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: 0,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
