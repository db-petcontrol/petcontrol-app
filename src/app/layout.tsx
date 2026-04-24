import { Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { Providers } from "@/shared/providers/providers"
import { cn } from "@/shared/lib/utils"
import { Footer, Header } from "@/shared/components"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable
      )}
    >
      <body className="grid min-h-screen grid-cols-1 grid-rows-[min-content_1fr_min-content] bg-secondary">
        <Providers>
          <ThemeProvider>
            <Header />
            <main className="flex w-full justify-center">{children}</main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
