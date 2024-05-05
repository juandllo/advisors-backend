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

## Configuración del entorno

Para realizar la configuración del entorno, se debe crear el archivo **`.env`**
en la raiz del proyecto.
Tener en cuenta las configuraciones recomendadas en el archivo **`.env.example`**

```bash
# Se refiere a la cadena de conexión con la base de datos
DATABASE_URL=
# Se refiere al secreto para generar el token jwt al momento del inicio de sesion
JWT_SECRET=
# Se refiere al número utilizado por bcrypt para generar aleatoriedad en el hash de los passwords
SALT=
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
