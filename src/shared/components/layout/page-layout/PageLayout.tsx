"use client"
import { useNavigate } from "@/shared/hooks/useNavigate"
import { ArrowLeft } from "lucide-react"
import { LinkButton } from "../../buttons/link-button/LinkButton"

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  headerActions?: React.ReactNode
}

export function PageLayout({
  title,
  subtitle,
  children,
  headerActions,
}: PageLayoutProps) {
  const { goBack } = useNavigate()

  return (
    <section className="w-full border-2">
      <header className="flex justify-center border-b-2 bg-white px-6 py-4">
        <div className="flex w-full items-center justify-between gap-2 lg:max-w-7xl">
          <div className="flex items-center gap-5">
            <LinkButton
              targetLabel="pagina anterior"
              className="text-foreground"
              onClick={goBack}
            >
              <ArrowLeft
                className="scale-150"
                aria-hidden={true}
                data-testid="arrow-left-icon"
              />
            </LinkButton>

            <div>
              <h2 className="text-2xl font-medium">{title}</h2>
              <p className="text-sm font-light text-gray-600">{subtitle}</p>
            </div>
          </div>
          {headerActions && <div>{headerActions}</div>}
        </div>
      </header>
      <div className="m-8 flex justify-center">{children}</div>
    </section>
  )
}
