import { ThemeProvider } from "@/shared/providers/theme-provider"
import { QueryClientProviderMock } from "./query-client-provider.mock"

interface AllProvidersMockProps {
  children: React.ReactNode
}
export function AllProvidersMock({ children }: AllProvidersMockProps) {
  return (
    <QueryClientProviderMock>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProviderMock>
  )
}
