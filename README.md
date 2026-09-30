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

supabase/
└── functions/
    └── tasa-publica/  # Copia de la Edge Function desplegada (ver "Precios y tasa de cambio")
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

## Precios y tasa de cambio

Los planes mensuales cuestan en USD (`plans` en `src/components/sections/Precios.astro`) y se pueden pagar en CUP al cambio de elTOQUE. El plan anual sigue siendo en USD con Tarjeta Clásica.

La tasa sale de la función pública `tasa-publica` del proyecto MiPyUtil en Supabase. Lee la última fila de `tasas_cambio`, que `tasa-cambio` (pg_cron, cada hora) llena desde elTOQUE, y devuelve solo el dólar y su antigüedad. La landing no llama a elTOQUE ni lleva su token.

```
GET https://sqnrvtwrvgxszkxuuyjb.supabase.co/functions/v1/tasa-publica
→ { "usd": 755, "dia": "2026-09-30", "tomada_en": "2026-09-30T15:05:02.181+00:00", "edad_seg": 312 }
```

Cómo se comporta la página:

- El HTML ya trae los precios en USD. Al cargar, un script consulta la tasa y añade el equivalente en CUP bajo cada precio (`USD × tasa`, sin redondear).
- La placa "Pagas en CUP" muestra la tasa y la hora de Cuba de la última actualización, y los botones de WhatsApp incluyen los precios y la tasa que vio el visitante.
- Si la consulta falla, tarda más de 4 s o la tasa tiene más de `HORAS_TASA_VIEJA` horas (24, en `Precios.astro`), los montos en CUP desaparecen y se manda a WhatsApp.
- La tasa se guarda 10 minutos en `localStorage`, así que no hay una consulta por cada visita.

La URL se puede cambiar con la variable `PUBLIC_TASA_URL`. `supabase/functions/tasa-publica/index.ts` es una copia de la función desplegada: si la cambias, despliégala también en Supabase. Solo permite leerla desde `https://mipyutil.vercel.app`, `http://localhost:4321` y las vistas previas de Vercel del equipo (`ORIGENES_PERMITIDOS` y `PREVIEWS_VERCEL`); si el dominio o el equipo de Vercel cambian hay que actualizarlos ahí y redesplegar.

## Contacto real

El sitio usa estos enlaces de contacto:

- WhatsApp: [+53 5377 0707](https://wa.me/5353770707)
- Telegram: [@MipyUtil](https://t.me/MipyUtil)

Si necesitas cambiarlos, busca `WHATSAPP_NUMBER` en `src/components/sections/Precios.astro` y los enlaces directos en `src/layouts/Layout.astro`.

## Stack

- [Astro](https://astro.build) 5.0 — Generador de sitios estáticos
- TypeScript — Tipado en componentes
