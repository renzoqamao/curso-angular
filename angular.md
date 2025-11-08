# Angular

## Introducción

Framework de Angular: Desarrollado por Google, es utilizado para crear aplicaciones web, incluyendo SPAs (aplicaciones de una sola página), renderizado del lado del servidor y sitios estáticos.

Desarrollo Móvil y de Escritorio: Permite crear aplicaciones móviles con Ionic o NativeScript y aplicaciones de escritorio con Electron, utilizando el mismo código de Angular.

Componentes: Son la base de la interfaz de usuario en Angular. Cada componente contiene lógica en TypeScript, estilos y plantillas HTML.

Sistema de Enrutamiento: Facilita la navegación entre componentes y controla el acceso y la autorización.

Directivas: Modifican el comportamiento de los elementos HTML, incluyendo directivas de atributos y estructurales como ngIf y ngFor.

Servicios: Encapsulan la lógica de negocio y gestionan datos, siendo fundamentales para la inyección de dependencias.

Módulos: Organizan funcionalidades relacionadas y permiten la carga bajo demanda, priorizando el uso de componentes independientes (standalone components).

Pipes: Transforman información para su representación visual en HTML, diferenciándose entre pipes puros e impuros.

```bash
PS C:\Users\renzoqa\Documents\proyectos\rquispe\curso-angular> ng --version
20.3.8
PS C:\Users\renzoqa\Documents\proyectos\rquispe\curso-angular> ng new bases

Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
✔ Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
✔ Do you want to create a 'zoneless' application without zone.js? No
✔ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai None
CREATE bases/angular.json (2485 bytes)
CREATE bases/package.json (1128 bytes)
CREATE bases/README.md (1527 bytes)
CREATE bases/tsconfig.json (1026 bytes)
CREATE bases/.editorconfig (331 bytes)
CREATE bases/.gitignore (647 bytes)
CREATE bases/tsconfig.app.json (444 bytes)
CREATE bases/tsconfig.spec.json (422 bytes)
CREATE bases/.vscode/extensions.json (134 bytes)
CREATE bases/.vscode/launch.json (490 bytes)
CREATE bases/.vscode/tasks.json (980 bytes)
CREATE bases/src/main.ts (228 bytes)
CREATE bases/src/index.html (304 bytes)
CREATE bases/src/styles.css (81 bytes)
CREATE bases/src/app/app.spec.ts (686 bytes)
CREATE bases/src/app/app.ts (299 bytes)
CREATE bases/src/app/app.css (0 bytes)
CREATE bases/src/app/app.html (20464 bytes)
CREATE bases/src/app/app.config.ts (412 bytes)
CREATE bases/src/app/app.routes.ts (80 bytes)
CREATE bases/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```
En los siguientes archivos se vio:
- Señales
- Estado
- Propiedades
- Rutas
- Métodos
- Eventos
- Cambios en el DOM
- Cada archivo y directorio de un proyecto

ver el siguiente archivo:
`02-bases\src\app\pages\counter`.
`02-bases\src\app\pages\hero`.

[zoneless](https://angular.dev/guide/zoneless)

> Nota: tambien es posible crear componentes de la siguiente forma: `ng generate component component-name`.


