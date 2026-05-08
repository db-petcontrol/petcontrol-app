# 🐾 PetControl App

O PetControl é uma aplicação web construída em Next.js para cadastro e gerenciamento de pets disponíveis para adoção. O sistema permite listar, cadastrar, editar, visualizar e remover pets por meio de uma interface intuitiva e integrada a uma API REST.

<br>

🔗 Disponível em produção: [https://petcontrol-app.onrender.com](https://petcontrol-app.onrender.com)

_⚠️ A aplicação pode levar alguns segundos para responder na primeira requisição devido ao cold start da plataforma._

<br>

## ✨ Principais funcionalidade

- Cadastro de pets com validação de formulários
- Listagem paginada de pets em formato de cards
- Visualização detalhada das informações de cada pet
- Edição de pets cadastrados
- Exclusão de pets com confirmação via modal
- Feedback visual para estados de carregamento e erros
- Interface responsiva e componentizada
- Testes automatizados para componentes, hooks e fluxos principais

<br>

## 🛠️ Tecnologias Utilizadas

| Tecnologia      | Versão | Categoria         |
| --------------- | ------ | ----------------- |
| Next.js         | 16     | Framework         |
| React           | 19     | UI                |
| TypeScript      | 5      | Linguagem         |
| Tailwind CSS    | 4      | Estilo            |
| shadcn/ui       | —      | Componentes       |
| Axios           | 1      | HTTP Client       |
| TanStack Query  | 5      | Estado assíncrono |
| React Hook Form | 7      | Formulários       |
| Zod             | 3      | Validação         |
| Jest            | 30     | Testes — Runner   |
| Testing Library | 16     | Testes — UI       |
| ESLint          | 9      | Linting           |
| Prettier        | 3      | Formatação        |

<br>

## 🚀 Como rodar o projeto

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

<br>

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

<br>

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

<br>

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

<br>

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
