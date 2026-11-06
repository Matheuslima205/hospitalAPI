# Hospital API

Uma API REST desenvolvida em **Node.js, TypeScript e Fastify**, com o objetivo de disponibilizar informações de profissionais de uma instituição hospitalar por meio de endpoints HTTP.

O projeto está em desenvolvimento e tem como propósito explorar conceitos de desenvolvimento backend, organização modular, criação de rotas, tipagem estática e testes automatizados.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **TypeScript** — tipagem estática e organização do código.
- **Fastify** — framework para construção da API REST.
- **Vitest** — execução de testes automatizados.
- **JSON** — armazenamento inicial dos dados utilizados pela aplicação.

## Funcionalidades atuais

Atualmente, a API disponibiliza três endpoints:

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/health` | Verifica o estado da aplicação. |
| GET | `/api/doctors` | Retorna os dados dos médicos cadastrados. |
| GET | `/api/nurses` | Retorna os dados dos enfermeiros cadastrados. |

### Exemplos de respostas

**Health Check**

`GET /api/health`

```json
{
  "status": "ok"
}
```

**Doctors**

`GET /api/doctors`

Retorna informações como CRM, nome e setor de atuação dos médicos.

**Nurses**

`GET /api/nurses`

Retorna informações como COREN, nome e setor de atuação dos enfermeiros.

## Estrutura do projeto

```text
hospitalAPI/
├── src/
│   ├── data/
│   │   ├── doctorsList.json
│   │   └── nursesList.json
│   │
│   ├── modules/
│   │   ├── doctors/
│   │   │   └── doctors.routes.ts
│   │   ├── health/
│   │   │   └── health.routes.ts
│   │   └── nurses/
│   │       └── nurses.routes.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── test/
│   ├── doctors.test.ts
│   ├── health.test.ts
│   └── nurses.test.ts
│
├── package.json
├── tsconfig.json
└── tsconfig.build.json
```

A aplicação utiliza uma organização modular, separando as responsabilidades de cada conjunto de rotas. Isso facilita a manutenção e permite adicionar novos módulos conforme o projeto evolui.

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/hospitalAPI.git
```

Entre no diretório:

```bash
cd hospitalAPI
```

Instale as dependências:

```bash
npm install
```

### Executando a aplicação

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

### Executando os testes

Para executar os testes automatizados:

```bash
npm test -- --run
```

Os testes utilizam o mecanismo de injeção de requisições do Fastify (`app.inject()`), permitindo validar os endpoints sem precisar iniciar um servidor HTTP externo.

### Build

Para compilar o projeto:

```bash
npm run build
```

## Próximos passos

O projeto continuará evoluindo. Algumas melhorias consideradas para as próximas etapas:

- [ ] Implementar operações CRUD para médicos e enfermeiros.
- [ ] Integrar um banco de dados.
- [ ] Implementar validação de dados nas requisições.
- [ ] Desenvolver tratamento padronizado de erros.
- [ ] Implementar filtros e parâmetros de consulta.
- [ ] Melhorar a cobertura dos testes automatizados.
- [ ] Implementar autenticação e autorização.
- [ ] Documentar os endpoints com Swagger/OpenAPI.

## Status

**Em desenvolvimento.**

Este projeto é um laboratório de aprendizado e experimentação com desenvolvimento backend, arquitetura de APIs e boas práticas de engenharia de software.