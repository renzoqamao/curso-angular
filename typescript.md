# Typescript

## Introducción a TypeScript

Para poder trabajar con typescript vamos a instalar vite `npm create vite@latest`, que es un empaquetador(bundler).

```bash
npm create vite@latest
Need to install the following packages:
create-vite@8.0.2
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  01-typescript-intro
│
◇  Select a framework:
│  Vanilla
│
◇  Select a variant:
│  TypeScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\Users\renzoqa\Documents\proyectos\rquispe\curso-angular\01-typescript-intro...
│
◇  Installing dependencies with npm...
added 15 packages, and audited 16 packages in 25s

5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> 01-typescript-intro@0.0.0 dev
> vite


  VITE v7.1.12  ready in 818 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

2. Borramos `counter.ts` y en `main.ts` nos quedamos con el siguiente contenido:

```typescript
import './style.css'
const app=document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML=`Hola mundo`;
```

## Tipos básicos

Creamos el siguiente archivo: `01-typescript-intro\src\topics\01-basic-types.ts`.

## Objetos, arreglos e interfaces

Creamos el siguiente archivo: `01-typescript-intro\src\topics\02-object-interface.ts`.

## Funciones y sus argumentos

Creamos el siguiente archivo: `01-typescript-intro\src\topics\03-functions.ts`.

## Desestructuración de arreglos y objetos

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\05-basic-destructuring.ts`.
`01-typescript-intro\src\topics\06-function-destructuring.ts`.

## Importaciones y exportaciones

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\07-import-export.ts`.

## Clases, constructores

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\08-classes.ts`.

## Tipos genéricos

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\09-generics.ts`.

## Decoradores

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\10-decorators.ts`.

[documentación](https://www.typescriptlang.org/docs/handbook/decorators.html)

## Encadenamiento opcional

Creamos los siguientes archivos: 
`01-typescript-intro\src\topics\11-optional-chaining.ts`.
