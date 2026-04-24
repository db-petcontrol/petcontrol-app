"use client"

import { useHealthCheck } from "@/shared/hooks/useHealthCheck"
import { Button } from "../ui/button"

export function HealthCheckTest() {
  const { data, error, isPending, mutate } = useHealthCheck()

  const handleTest = () => {
    mutate()
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-semibold text-black">
        Teste de Conexão Backend
      </h2>

      <Button
        onClick={handleTest}
        disabled={isPending}
        className="rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Testando..." : "Testar Conexão"}
      </Button>

      {error && (
        <div className="w-full rounded-lg bg-red-100 p-3 text-red-700">
          <p className="font-semibold">❌ Erro na conexão</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}

      {data && (
        <div className="w-full space-y-2 rounded-lg bg-green-100 p-3 text-green-700">
          <p className="font-semibold">✅ Backend conectado com sucesso</p>
          <p className="text-sm">
            <strong>Status:</strong> {data.status}
          </p>
          {data.groups && (
            <p className="text-sm">
              <strong>Grupos:</strong> {data.groups.join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
