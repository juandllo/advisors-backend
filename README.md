# Advisors Backend

Microaplicación que permite la creación y gestión de las APIS
necesarias para interacturar con la base de datos y sistemas
externos para el proyecto de Advisors.

## Instalación

```bash
pnpm install
```

## Ejecutando la app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Estructura del Proyecto

```bash
📦 advisors-backend
├─ 📁src
│  ├─ 📁[FEATURE_NAME]
│  │  ├─ 📄[FEATURE_NAME].controller.spec.ts
│  │  ├─ 📄[FEATURE_NAME].controller.ts
│  │  ├─ 📄[FEATURE_NAME].service.ts
│  │  └─ 📄[FEATURE_NAME].module.ts
│  ├─ 📄app.module.ts
│  ├─ 📄app.service.ts
│  └─ 📄main.ts
├─ 📁test
│  ├─ 📄app.e2e-spec.ts
│  └─ 📄jest-e2e.json
├─ 📄.eslintrc.js
├─ 📄.gitignore
├─ 📄.prettierrc
├─ 📄nest-cli.json
├─ 📄package.json
├─ 📄pnpm-lock.yaml
├─ 📄README.md
├─ 📄tsconfig.build.json
└─ 📄tsconfig.json
```
