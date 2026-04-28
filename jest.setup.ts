import "@testing-library/jest-dom"

global.ResizeObserver =
  global.ResizeObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

window.HTMLElement.prototype.scrollIntoView = jest.fn()
window.HTMLElement.prototype.hasPointerCapture = jest.fn()
window.HTMLElement.prototype.releasePointerCapture = jest.fn()

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

export const mockApi = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
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

jest.mock("@/shared/lib/api.config", () => ({
  api: mockApi,
}))
