# MiPyUtil Landing Page

Landing page para MiPyUtil, aplicación móvil de gestión para MiPymes y TCPs en Cuba.

## Requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalación

```bash
git clone https://github.com/tu-usuario/mipyutil-landing.git
cd mipyutil-landing
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo inicia en `http://localhost:4321`

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run check` | Verifica tipos y sintaxis de Astro |
## Estructura del proyecto

```text
mipyutil-landing/
├── public/
│   ├── screens/          # Screenshots de la aplicación
│   └── icon.png          # Ícono del proyecto
├── src/
│   ├── components/       # Componentes Astro reutilizables
│   ├── layouts/          # Layouts base
│   ├── pages/            # Páginas de la aplicación
│   └── styles/           # Estilos globales
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## Configuración

### Enlaces externos

En `src/pages/index.astro` y componentes relacionados, actualiza los siguientes enlaces:

- URL de descarga del APK
- Números de WhatsApp (`https://wa.me/TU_NUMERO`)
- Usuarios de Telegram (`https://t.me/TU_USUARIO`)
- Canal de Telegram (`https://t.me/MipyUtil`)

## Sistema de diseño

Ver [DESIGN.md](./DESIGN.md) para el sistema completo (paleta claro/oscuro, tipografía, componentes). Resumen:

### Colores

```css
--accent: #B4472A;   /* Óxido de rótulo (claro) / #E8A33D ámbar (oscuro) */
--board: #E7DFC9;    /* Tablón, fondo de página (claro) / #121210 (oscuro) */
--ink: #262019;      /* Tinta, texto principal (claro) / #EDE6D8 (oscuro) */
```

### Tipografía

Display: Anton (un solo uso por página, el h1 del hero)
Body/UI: Archivo — pesos 400, 500, 600, 700, 800

### Breakpoints

| Punto de quiebre | Ancho mínimo |
|------------------|--------------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

## Accesibilidad

El proyecto implementa:

- Contraste de color conforme a WCAG AA
- Navegación por teclado
- Focus visible en elementos interactivos
- Respeto a `prefers-reduced-motion`
- Semántica HTML5
- Atributo `lang=\"es\"` declarado

## Stack tecnológico

- [Astro](https://astro.build) ^7.1.6 - Framework web
- [TypeScript](https://www.typescriptlang.org) ^6.0.3 - Tipado estático

## Licencia

MIT

## Contacto

- WhatsApp: [Enlace por configurar]
- Telegram: [Enlace por configurar]
- Canal: [@MipyUtil](https://t.me/MipyUtil)
