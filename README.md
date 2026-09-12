# MiPyUtil Landing

Sitio web para [MiPyUtil](https://t.me/MipyUtil), la app de gestión para MiPyMEs y TCPs en Cuba que funciona 100% sin internet.

## Qué es esto

Landing page de producto hecha con Astro. Una sola página, sin rutas complicadas ni CMS. El diseño responde a la identidad visual de la app: un tablón de precios curtido por el sol en modo claro, el mismo tablón durante un apagón en modo oscuro.

## Correr localmente

Necesitas Node 18 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`. Los cambios se reflejan al instante.

Para generar el build de producción:

```bash
npm run build
```

La salida cae en `dist/`. Para probar el build antes de desplegarlo:

```bash
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── sections/      # Secciones de la landing (Hero, Precios, FAQ...)
│   └── ui/            # Componentes reutilizables (Button, CheckList...)
├── layouts/
│   └── Layout.astro   # Layout base con meta tags y footer
├── pages/
│   ├── index.astro    # Página principal
│   └── 404.astro      # Página de error
└── styles/
    └── global.css     # Variables CSS y estilos globales

public/
├── icon.png           # Favicon e ícono de la app
└── mipyutil-mark.png  # Marca para el hero
```

Cada sección de la landing vive en su propio componente. Para editar el contenido, abre el componente correspondiente en `src/components/sections/`.

## Identidad visual

El sistema de diseño sigue la metáfora del "tablón curtido": superficies claras y cálidas en modo claro (`#E7DFC9`), casi negro en modo oscuro (`#121210`). El acento cambia según el tema: óxido de rótulo (`#B4472A`) en claro, ámbar de indicador (`#E8A33D`) en oscuro.

**Tipografía:**
- Display: [Anton](https://fonts.google.com/specimen/Anton) — solo para el h1 del hero
- Body: [Archivo](https://fonts.google.com/specimen/Archivo) — todo lo demás, pesos 400-800

**Variables principales:**
```css
--accent: #B4472A;  /* óxido en claro, #E8A33D en oscuro */
--board: #E7DFC9;   /* fondo claro, #121210 en oscuro */
--ink: #262019;     /* texto claro, #EDE6D8 en oscuro */
```

Los componentes respetan `prefers-color-scheme` y `prefers-reduced-motion`. La paleta cumple WCAG AA en ambos modos.

## Contacto real

El sitio usa estos enlaces de contacto:

- WhatsApp: [+53 5377 0707](https://wa.me/5353770707)
- Telegram: [@MipyUtil](https://t.me/MipyUtil)

Si necesitas cambiarlos, busca `WHATSAPP_NUMBER` en `src/components/sections/Precios.astro` y los enlaces directos en `src/layouts/Layout.astro`.

## Stack

- [Astro](https://astro.build) 5.0 — Generador de sitios estáticos
- TypeScript — Tipado en componentes
