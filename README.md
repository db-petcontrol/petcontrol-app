# 🐾 PetControl App — Frontend

Aplicação web construída em Next.js como frontend do sistema PetControl, consumindo a API REST desenvolvida em Java Spring Boot.

---

🔗 APP disponível em produção: [link](https://petcontrol-app.onrender.com)

_⚠️ A aplicação pode levar alguns segundos para responder na primeira requisição devido ao cold start da plataforma._

<br>

```
[Navegador do Usuário]
         ↕
[Next.js — Frontend (esta stack)]
         ↕  HTTP / REST / JSON
[Java Spring Boot — Backend]
```

---

## 🚀 Tecnologias Utilizadas

| Categoria         | Tecnologia      | Versão |
| ----------------- | --------------- | ------ |
| Framework         | Next.js         | 16     |
| UI                | React           | 19     |
| Linguagem         | TypeScript      | 5      |
| Estilo            | Tailwind CSS    | 4      |
| Componentes       | shadcn/ui       | —      |
| HTTP Client       | Axios           | 1      |
| Estado assíncrono | TanStack Query  | 5      |
| Formulários       | React Hook Form | 7      |
| Validação         | Zod             | 3      |
| Testes — Runner   | Jest            | 30     |
| Testes — UI       | Testing Library | 16     |
| Testes — Mock API | MSW             | 2      |
| Linting           | ESLint          | 9      |
| Formatação        | Prettier        | 3      |

---

## 🏗️ Estrutura do Projeto

## ⛔ _Seção em construção_

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 22+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/db-petcontrol/petcontrol-app.git

# Acesse a pasta do projeto
cd petcontrol-app

# Instale as dependências
npm install
```

---

## 🖥️ Rodando Localmente (backend local)

Nenhuma configuração extra é necessária. O Axios já tem `http://localhost:8080` como fallback padrão quando nenhuma variável de ambiente está definida:

```typescript
// src/lib/api.config.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080"
```

Basta garantir que o backend Spring Boot está rodando em `localhost:8080` e iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

---

## ☁️ Rodando Apontando para Produção (Render)

O arquivo `.env.example` contém a URL da API em produção. Para usá-la, basta copiá-lo para `.env`:

```bash
cp .env.example .env
```

```env
# .env.example / .env
NEXT_PUBLIC_API_URL=https://petcontrol-api-h7vz.onrender.com
```

> **Atenção:** a API no Render pode levar alguns segundos para responder na primeira requisição (cold start do plano gratuito).

### Como a URL é resolvida

```
NEXT_PUBLIC_API_URL definida (.env presente) → usa a URL configurada (Render)
NEXT_PUBLIC_API_URL ausente (sem .env)       → fallback para localhost:8080
```

---

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento (Turbopack)
npm run build        # Build para produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o ESLint
npm run format       # Formata o código com Prettier
npm run format:check # Verifica formatação sem alterar arquivos
npm run typecheck    # Verifica erros de tipo TypeScript
npm run test         # Executa testes em modo watch
npm run test:ci      # Executa testes com relatório de coverage (CI)
```

---

<p align="center">
    Feito com apoio de ☕ por 👩‍💻
    <a href="https://www.linkedin.com/in/gabrieladecastrolaurindo" target="_blank">
    Gabriela de Castro Laurindo
    </a>
    e
    <a href="https://br.linkedin.com/in/rachel-pizane" target="_blank">
    Rachel Pizane Maia
    </a>
</p>
