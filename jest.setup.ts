import "@testing-library/jest-dom"

export const mockNavigation = {
  redirect: jest.fn(),
  routerFunctions: {
    push: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  },
}

jest.mock("next/navigation", () => ({
  redirect: mockNavigation.redirect,
  useRouter() {
    return mockNavigation.routerFunctions
  },
  usePathname() {
    return "/"
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
    themes: ["light", "dark"],
    systemTheme: "light",
    resolvedTheme: "light",
  }),
}))
