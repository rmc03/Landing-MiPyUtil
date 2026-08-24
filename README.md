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

### Screenshots

Coloca las capturas de pantalla de la app en `public/screens/` con los siguientes nombres:

- `01-resumen.png` - Panel de resumen (administrador)
- `02-nueva-venta.png` - Punto de venta
- `03-confirmar-pago.png` - Confirmación de pago con QR
- `04-inventario.png` - Lista de inventario
- `05-cuadres.png` - Cuadres pendientes
- `06-mi-turno.png` - Vista de dependiente
- `07-ganancias.png` - Reporte de ganancias
- `08-temas.png` - Selector de temas (opcional)

### Enlaces externos

En `src/pages/index.astro` y componentes relacionados, actualiza los siguientes enlaces:

- URL de descarga del APK
- Números de WhatsApp (`https://wa.me/TU_NUMERO`)
- Usuarios de Telegram (`https://t.me/TU_USUARIO`)
- Canal de Telegram (`https://t.me/MipyUtil`)

## Sistema de diseño

### Colores

```css
--violet-600: #7C3AED;    /* Color principal */
--violet-700: #6D28D9;    /* Hover states */
--neutral-950: #16161F;   /* Background */
--neutral-900: #1F1F2E;   /* Surface */
```

### Tipografía

Familia: Plus Jakarta Sans  
Pesos: 400, 500, 600, 700, 800

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
