---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief — index.astro (MiPyUtil landing, página única)

**Scope:** la landing de MiPyUtil completa, una sola página de marketing web. El mundo visual ya está anclado (DESIGN.md, "El Día de Trabajo en una Sola Pantalla", tema Prosperidad); este brief solo fija la estrategia de esta superficie.

**Visitor mode:** Persuade.

## Audience & job

- **Quién:** dueño/a de MiPyme o TCP en Cuba (bodegón, cafetería, tienda, taller, ferretería) con internet inestable; decide e instala en su teléfono Android.
- **Job:** entender que inventario, ventas, turnos y cuadre viven en un solo teléfono que funciona sin internet, y **descargar la APK** (y contactar por WhatsApp/Telegram si duda).

## What must happen

1. **Creer** que funciona offline y que controla la caja (promesa central, primer viewport).
2. **Reconocer** su tienda en las pantallas reales de la app (proof = screenshots en mockups, no claims).
3. **Actuar**: tocar "Descargar APK" (CTA primario repetido en hero, banda de problema y cierre). CTAs de contacto como segundo plano.

## Proof & content

- Screenshots reales de la app (8 requeridas, ver 03-screenshots-requeridos.md) en mockups de teléfono; mientras no existan, placeholder con el nombre esperado.
- Copy completo aprobado en 04-copy-es.md (no inventar precios, testimonios, cifras ni cloud operativo).
- CTAs con marcadores `#` hasta que el usuario dé destinos reales (APK/WhatsApp/Telegram/canal).

## Direction & memorable moment

- Estructura "panel de control": la landing replica las pantallas de la app (Resumen → Inventario → Ventas → Cuadre → Temas) y cada sección se ancla en un screenshot.
- **Moment:** el hero como espejo del Resumen del admin — el primer viewport muestra la app real funcionando (mockup con `01-resumen.png`), no una ilustración.
- Bandas oscuras "modo noche" (bosque) para el problema y la descarga, exhibiendo el dark mode del producto.

## Constraints

- Accesibilidad: AA en todo el copy, `prefers-reduced-motion` a fades, `lang="es"`, FAQ con `<button>`, foco visible.
- Tono: directo, cercano, cubano-latino, sin hype.
- Stack: Astro estático, sin framework de UI; Inter vía Google Fonts; tokens como variables CSS.

## Unresolved

- Destinos reales de los CTAs (marcadores `#`).
- Screenshots reales (pendientes del usuario en `public/screens/`).
- Logo definitivo (hoy marca tipográfica).
