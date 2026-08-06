---
name: MiPyUtil — Landing
description: La landing es la app. Panel de control índigo para la mipyme cubana.
colors:
  primary: "#5B5BF4"
  primary-deep: "#4A4AD4"
  primary-light: "#8080F7"
  primary-subtle: "#E8E8FD"
  neutral-bg: "#F5F5FA"
  neutral-surface: "#FFFFFF"
  neutral-surface-sec: "#F0F0F8"
  neutral-surface-ter: "#E8E8F5"
  ink: "#1A1A2E"
  ink-secondary: "#4A4A5E"
  muted: "#6B7280"
  line: "#E5E5EF"
  line-strong: "#D0D0E0"
  dark-bg: "#16161F"
  dark-surface: "#1F1F2E"
  dark-elevated: "#2A2A3E"
  dark-ink: "#F0F0F8"
  dark-ink-secondary: "#C0C0D0"
  dark-line: "#3A3A50"
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"
  info: "#3B82F6"
  overlay-strong: "rgba(0, 0, 0, 0.5)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  scale:
    micro: "0.6875rem"
    tiny: "0.7rem"
    caption: "0.75rem"
    label: "0.8125rem"
    small: "0.875rem"
    body-sm: "0.9375rem"
    body: "1rem"
    lead-sm: "1.0625rem"
    title: "1.125rem"
    title-lg: "1.25rem"
    xl: "1.5rem"
    stat: "2rem"
    hero-min: "2.5rem"
    display-min: "2.75rem"
    hero-max: "3.5rem"
    display-max: "4rem"
rounded:
  xs: "2px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "9999px"
  phone: "32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  section-sm: "80px"
  section-lg: "120px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  nav-pill:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
---

# Design System: MiPyUtil — Landing

<!-- SEED: dirección establecida con el usuario (05-direccion-visual.md, confirmada en entrevista, ajustada a tema Confianza índigo + modo oscuro por decisión del dueño del producto); los tokens provienen de la implementación. Re-ejecutar `$impeccable document` tras el build para carbonizar valores exactos. -->

## Overview

**Creative North Star: "El Día de Trabajo en una Sola Pantalla"**

La landing replica el panel de control de la app: cada sección es una pantalla de MiPyUtil y se ancla en un screenshot real dentro de un mockup de teléfono. No es una landing genérica de SaaS (hero + grid de features + pricing); es la propia app contando su día de trabajo. El visitante recorre Resumen → Inventario → Ventas → Cuadre → Temas como navegaría el dueño en su teléfono, y al final cierra con la descarga de la APK.

El carácter visual es **calmo y operativo**: superficies planas, un único acento índigo que solo aparece donde hay acción o dato vivo (CTAs, checks, alertas de stock, métricas), y tipografía Inter en pesos bien escalonados. La página respeta el tema claro u oscuro que elija el visitante con el toggle del nav (modo oscuro con la paleta del producto, nunca negro puro). Las bandas "modo noche" de problema y descarga renderizan la paleta oscura siempre, independiente del toggle: exhiben el dark mode del producto y separan los momentos de problema/descarga del resto. La prueba es la pantalla real, nunca el placeholder: mientras no exista la captura, el mockup muestra el nombre esperado.

La emoción es confianza: esto se ve como una herramienta que no se cae cuando se va el internet. Nada de gradientes sobre contenido, nada de glow disperso, nada de "revolucionario".

**Key Characteristics:**
- Flat surfaces, indigo voice on tinted neutrals.
- Phone mockups as the material center of every feature section.
- Inter everywhere — the same family the app ships.
- Dark mode via toggle; "modo noche" bands always dark (`#16161F` / `#1F1F2E`), never pure black.
- Calm, operative, no hype.

## Colors

Paleta operativa con un solo acento: índigo sobre neutros fríos. La oscuridad es un azul noche, nunca negro puro.

### Primary
- **Confianza Indigo** (#5B5BF4): CTAs, enlaces, checks, métricas vivas y acentos activos. Solo se usa donde hay acción o dato vivo.
- **Indigo Deep** (#4A4AD4): hover del primario.
- **Indigo Light** (#8080F7): acentos de texto y enlaces sobre superficies oscuras (contraste AA en modo noche).
- **Indigo Wash** (#E8E8FD): fondos de chips y badges.

### Neutral
- **Paper** (#F5F5FA): fondo base de la página, teñido de índigo.
- **White** (#FFFFFF): cards y superficies de sección.
- **Wash** (#F0F0F8): fondos alternos (secciones de features), chips, hover de filas.
- **Ink** (#1A1A2E): texto principal.
- **Ink Secondary** (#4A4A5E): textos de apoyo.
- **Muted** (#6B7280): solo metadatos y textos secundarios.
- **Line** (#E5E5EF): bordes y separadores.
- **Amber Stock** (#F59E0B): alertas de stock bajo (único acento de advertencia).

### Dark palette (modo oscuro y bandas "modo noche")
- **Night** (#16161F): fondo base oscuro y bandas.
- **Night Surface** (#1F1F2E): cards sobre noche.
- **Night Elevated** (#2A2A3E): superficies que sobresalen.
- **Night Ink** (#F0F0F8): texto sobre oscuro.
- **Night Line** (#3A3A50): bordes sobre oscuro.

### Named Rules
**The One Voice Rule.** El índigo es el único acento y su rareza es el punto: aparece en CTAs, checks, alertas y métricas; el resto del sistema vive en neutros. Dos acentos compitiendo rompen el contrato.

**The Night Rule.** Toda superficie oscura es azul noche (#16161F) o su derivado (#1F1F2E, #2A2A3E), nunca negro puro. El texto en oscuro es #F0F0F8; los acentos pasan a la versión clara (#8080F7) para mantener AA.

**The Band Rule.** Las bandas "modo noche" (problema, descarga) usan la paleta oscura siempre, en ambos temas del toggle: son el dark mode del producto exhibido como material de la landing.

## Typography

**Display Font:** Inter (400 / 500 / 600 / 700 / 800) vía Google Fonts — la misma familia que la app (`assets/fonts/Inter-*.ttf`).

**Character:** una sola familia en pesos bien escalonados; la jerarquía se construye con tamaño y peso, no con familias nuevas. Es la letra de una herramienta de trabajo: legible, directa, sin dramatismo.

### Hierarchy
- **Display** (800, clamp 2.75–4rem, 1.05, −0.02em): solo el H1 del hero.
- **Headline** (700, clamp 1.75–2.25rem, 1.15, −0.02em): títulos de sección.
- **Title** (600, 1.125rem, 1.3): títulos de tarjeta.
- **Lead** (500, 1.125rem, 1.5): intros de sección y cierres enfatizados.
- **Body** (400, 1rem, 1.6): texto de lectura; medida 65–75ch.
- **Label** (600, 0.8125rem, 1.2, +0.08em, mayúsculas): eyebrows y metadatos; solo en el punto donde el sistema lo elige, no en toda sección.

### Named Rules
**The Inter Rule.** No se introduce una segunda familia. La identidad tipográfica de la landing es idéntica a la de la app: Inter, en pesos y tamaños.

## Layout

Sistema mobile-first de una columna con contenedor centrado (~1120px). Ritmo de espaciado base 4px; las secciones respiran 80–120px de vertical, con más espacio arriba del encabezado que abajo. Gaps de composición generosos (64px) entre texto y mockup en pantallas ≥ 768px.

- **< 640px:** 1 columna; mockups de teléfono a ancho completo (máx. 320px, centrados).
- **≥ 768px:** hero en 2 columnas (texto | mockup); features en grid de 2.
- **≥ 1024px:** grid de 3 para "Para quién"; hero display a 64px; mockups flanqueando el texto.
- **Breakpoints:** 640 / 768 / 1024.

El patrón de sección es: encabezado (H2 + lead), luego la evidencia — screenshot en mockup o grid de tarjetas planas. El ritmo se construye alternando superficies: las secciones de features alternan paper y wash, y las bandas "modo noche" (problema/descarga) separan los momentos de problema y cierre del resto. Las secciones de historia (ComoFunciona) centran su encabezado y sus cierres; las operativas alinean a la izquierda.

## Elevation & Depth

Sistema plano por defecto, fiel al anti-patrón de la app ("sin gradientes de fondo"). La profundidad la dan el contraste tonal y las líneas, no las sombras.

### Shadow Vocabulary
- **subtle** (`0 1px 2px rgba(26,26,46,0.04), 0 2px 4px rgba(26,26,46,0.02)`): única sombra del sistema. Exclusiva para mockups de teléfono; nunca en cards de contenido.

### Named Rules
**The Flat-by-Default Rule.** Las cards son planas, separadas por línea y superficie. La sombra subtle es un material reservado al teléfono; si una tarjeta necesita levantar, se usa superficie clara (o bordes), no sombra. Los hovers de cards cambian solo el color de borde.

## Shapes

Lenguaje de formas con radios generosos y una sola silueta protagonista: el teléfono.

- **Cards:** 16px.
- **Botones:** 12px.
- **Pills:** 9999px (solo controles pequeños: nav CTA, chips, badges).
- **Mockup de teléfono:** 32px, marco oscuro (#1A1A2E) sobre superficies claras o superficie noche (#2F2F45) sobre bandas oscuras, con muesca superior.

### Named Rules
**The Phone Rule.** Toda captura de la app se muestra dentro de un mockup de teléfono; nunca recortada contra el fondo ni suelta sobre la página.

## Components

### Buttons
- **Shape:** 12px.
- **Primary:** índigo (#5B5BF4), texto blanco, padding 16px 28px, peso 600.
- **Hover / Focus:** fondo #4A4AD4; foco visible con anillo índigo 2px.
- **Secondary:** outline índigo sobre fondo transparente.
- **Ghost:** texto índigo, sin borde; para enlaces inline.

### Navigation
- Sticky, fondo `surface` con blur ligero y línea inferior `line`. Logo tipográfico "MiPyUtil" en peso 800, enlaces en Inter 500 con hover índigo, CTA pill índigo a la derecha. Toggle claro/oscuro junto a los enlaces (persistido en `localStorage`, respeta `prefers-color-scheme` como default sin parpadeo).
- **Mobile:** colapsa a hamburguesa con panel desplegable; enlaces alcanzables por teclado.

### Phone Mockup (signature)
- Marco #1A1A2E (o superficie noche #2F2F45 sobre banda oscura), radio 32px, muesca superior, sombra `subtle`.
- Contenido: la captura de la app. Si el archivo no existe, un placeholder con el nombre esperado del screenshot.

### Checklist
- Ítems con check índigo (#5B5BF4), texto ink; marca de verificación como icono línea, no emoji.

### FAQ (accordion)
- Ítem con borde `line`, encabezado en `<button>` real, ítem activo con acento índigo; panel expandible con animación de altura respetando `prefers-reduced-motion`. Pregunta y respuesta comparten la misma alineación horizontal.

### Dark Band (modo noche)
- Sección completa en #16161F (siempre, en ambos temas): superficie #1F1F2E para tarjetas internas, líneas #3A3A50, texto #F0F0F8, acentos índigo claro (#8080F7) para enlaces y métricas.

## Do's and Don'ts

### Do:
- **Do** anclar cada sección de features a un screenshot real de la app dentro de un mockup de teléfono.
- **Do** usar la paleta noche (#16161F) en toda superficie oscura y neutros fríos en las claras.
- **Do** reservar el índigo para acción y dato vivo: CTAs, checks, alertas, métricas.
- **Do** escribir el texto del hero en Display 800 con tracking −0.02em.
- **Do** respetar `prefers-reduced-motion` reduciendo todo a fades y el toggle de tema.
- **Do** dejar las bandas "modo noche" oscuras en ambos temas.

### Don't:
- **Don't** usar negro puro en superficies oscuras.
- **Don't** poner gradientes sobre cards de contenido.
- **Don't** dispersar glow fuera del hero y los estados activos.
- **Don't** usar gris genérico en fondos; siempre neutros del sistema.
- **Don't** introducir una segunda tipografía o un sistema de sombras sobre las cards.
- **Don't** inventar claims, precios o testimonios en el copy de la página.
