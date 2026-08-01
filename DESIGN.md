---
name: MiPyUtil — Landing
description: La landing es la app. Panel de control emerald para la mipyme cubana.
colors:
  primary: "#059669"
  primary-deep: "#047857"
  primary-light: "#34D399"
  forest-bg: "#0F1A14"
  forest-surface: "#1A2E22"
  forest-line: "#2A4A38"
  forest-ink: "#EEF4F0"
  neutral-bg: "#F8FAF7"
  neutral-surface: "#FFFFFF"
  neutral-surface-sec: "#ECF7F0"
  ink: "#1A2E1A"
  muted: "#6B7280"
  line: "#E2EBE5"
  success: "#059669"
  warning: "#D97706"
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
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
  phone: "32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
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

<!-- SEED: dirección establecida con el usuario (05-direccion-visual.md, confirmada en entrevista); los tokens provienen del brief comprometido. Re-ejecutar `$impeccable document` tras el build para carbonizar valores exactos. -->

## Overview

**Creative North Star: "El Día de Trabajo en una Sola Pantalla"**

La landing replica el panel de control de la app: cada sección es una pantalla de MiPyUtil y se ancla en un screenshot real dentro de un mockup de teléfono. No es una landing genérica de SaaS (hero + grid de features + pricing); es la propia app contando su día de trabajo. El visitante recorre Resumen → Inventario → Ventas → Cuadre → Temas como navegaría el dueño en su teléfono, y al final cierra con la descarga de la APK.

El carácter visual es **calmo y operativo**: superficies planas teñidas de verde, un único acento esmeralda que solo aparece donde hay acción o dato vivo (CTAs, checks, alertas de stock, métricas), y tipografía Inter en pesos bien escalonados. Las bandas oscuras "modo noche" (bosque, no negro) exhiben el dark mode del producto y separan los momentos de problema/descarga del resto. La prueba es la pantalla real, nunca el placeholder: mientras no exista la captura, el mockup muestra el nombre esperado.

La emoción es confianza: esto se ve como una herramienta que no se cae cuando se va el internet. Nada de gradientes sobre contenido, nada de glow disperso, nada de "revolucionario".

**Key Characteristics:**
- Flat surfaces, green-tinted neutrals, single emerald voice.
- Phone mockups as the material center of every feature section.
- Inter everywhere — the same family the app ships.
- Dark bands in forest `#0F1A14`, never pure black.
- Calm, operative, no hype.

## Colors

Paleta operativa con un solo acento: esmeralda sobre neutros teñidos de verde. La oscuridad es bosque, nunca negro puro.

### Primary
- **Prosperidad Emerald** (#059669): CTAs, enlaces, checks, métricas vivas y acentos activos. En oscuro, la versión clara (#34D399) brilla sobre el bosque. Solo se usa donde hay acción o dato vivo.
- **Emerald Deep** (#047857): hover del primario.

### Neutral
- **Paper** (#F8FAF7): fondo base de la página, teñido de verde.
- **White** (#FFFFFF): cards y superficies de sección.
- **Mint Wash** (#ECF7F0): fondos alternos, chips, hover de filas.
- **Ink** (#1A2E1A): texto principal.
- **Muted** (#6B7280): solo metadatos y textos secundarios.
- **Line** (#E2EBE5): bordes y separadores.
- **Amber Stock** (#D97706): alertas de stock bajo (único acento de advertencia).

### Named Rules
**The One Voice Rule.** La esmeralda es el único acento y su rareza es el punto: aparece en CTAs, checks, alertas y métricas; el resto del sistema vive en neutros. Dos acentos compitiendo rompen el contrato.

**The Forest Rule.** Toda superficie oscura es bosque (#0F1A14) o su derivado (#1A2E22, #2A4A38), nunca negro puro. El texto en oscuro es verde pálido (#EEF4F0).

## Typography

**Display Font:** Inter (400 / 500 / 600 / 700 / 800) vía Google Fonts — la misma familia que la app (`assets/fonts/Inter-*.ttf`).

**Character:** una sola familia en pesos bien escalonados; la jerarquía se construye con tamaño y peso, no con familias nuevas. Es la letra de una herramienta de trabajo: legible, directa, sin dramatismo.

### Hierarchy
- **Display** (800, clamp 2.75–4rem, 1.05, −0.02em): solo el H1 del hero.
- **Headline** (700, clamp 1.75–2.25rem, 1.15, −0.02em): títulos de sección.
- **Title** (600, 1.125rem, 1.3): títulos de tarjeta.
- **Body** (400, 1rem, 1.6): texto de lectura; medida 65–75ch.
- **Label** (600, 0.8125rem, 1.2, +0.08em, mayúsculas): eyebrows y metadatos; solo en el punto donde el sistema lo elige, no en toda sección.

### Named Rules
**The Inter Rule.** No se introduce una segunda familia. La identidad tipográfica de la landing es idéntica a la de la app: Inter, en pesos y tamaños.

## Layout

Sistema mobile-first de una columna con contenedor centrado (~1120px). Ritmo de espaciado base 4px; las secciones respiran 80–120px de vertical, con más espacio arriba del encabezado que abajo.

- **< 640px:** 1 columna; mockups de teléfono a ancho completo (máx. 320px, centrados).
- **≥ 768px:** hero en 2 columnas (texto | mockup); features en grid de 2.
- **≥ 1024px:** grid de 3 para "Para quién"; hero display a 64px; mockups flanqueando el texto.
- **Breakpoints:** 640 / 768 / 1024.

El patrón de sección es: encabezado (label + H2 + lead), luego la evidencia — screenshot en mockup o grid de tarjetas planas. Las bandas oscuras "modo noche" alternan el ritmo entre el mundo claro operativo y el problema/descarga.

## Elevation & Depth

Sistema plano por defecto, fiel al anti-patrón de la app ("sin gradientes de fondo"). La profundidad la da el contraste tonal y las líneas, no las sombras.

### Shadow Vocabulary
- **subtle** (`0 2px 4px rgba(6,78,59,0.06)`): única sombra del sistema. Exclusiva para mockups de teléfono y bandas que lo requieran; nunca en cards de contenido.

### Named Rules
**The Flat-by-Default Rule.** Las cards son planas, separadas por línea y superficie. La sombra subtle es un material reservado al teléfono; si una tarjeta necesita levantar, se usa superficie clara (o bordes), no sombra.

## Shapes

Lenguaje de formas con radios generosos y una sola silueta protagonista: el teléfono.

- **Cards:** 16px.
- **Botones:** 12px.
- **Pills:** 9999px (solo controles pequeños: nav CTA, chips, badges).
- **Mockup de teléfono:** 32px, marco oscuro (#1A2E1A) sobre superficies claras o blanco sobre bandas oscuras, con muesca superior.

### Named Rules
**The Phone Rule.** Toda captura de la app se muestra dentro de un mockup de teléfono; nunca recortada contra el fondo ni suelta sobre la página.

## Components

### Buttons
- **Shape:** 12px.
- **Primary:** esmeralda (#059669), texto blanco, padding 16px 28px, peso 600.
- **Hover / Focus:** fondo #047857; foco visible con anillo esmeralda 2px.
- **Secondary:** outline esmeralda sobre fondo transparente.
- **Ghost:** texto esmeralda, sin borde; para enlaces inline.

### Navigation
- Fija, fondo `paper` con blur ligero y línea inferior `line`. Logo tipográfico "MiPyUtil" en peso 800, enlaces en Inter 500 con hover esmeralda, CTA pill esmeralda a la derecha.
- **Mobile:** colapsa a hamburguesa con panel desplegable; enlaces alcanzables por teclado.

### Phone Mockup (signature)
- Marco #1A2E1A (o blanco sobre banda oscura), radio 32px, muesca superior, sombra `subtle`.
- Contenido: la captura de la app. Si el archivo no existe, un placeholder con el nombre esperado del screenshot.

### Checklist
- Ítems con check esmeralda (#059669), texto ink; marca de verificación como icono línea, no emoji.

### FAQ (accordion)
- Ítem con borde `line`, encabezado en `<button>` real, ítem activo con acento esmeralda; panel expandible con animación de altura respetando `prefers-reduced-motion`.

### Dark Band
- Sección completa en bosque (#0F1A14): superficie #1A2E22 para tarjetas internas, líneas #2A4A38, texto #EEF4F0, acentos esmeralda claro (#34D399).

## Do's and Don'ts

### Do:
- **Do** anclar cada sección de features a un screenshot real de la app dentro de un mockup de teléfono.
- **Do** usar bosque (#0F1A14) en todo fondo oscuro y teñir todos los neutros de verde.
- **Do** reservar la esmeralda para acción y dato vivo: CTAs, checks, alertas, métricas.
- **Do** escribir el texto del hero en Display 800 con tracking −0.02em.
- **Do** respetar `prefers-reduced-motion` reduciendo todo a fades.

### Don't:
- **Don't** usar negro puro en superficies oscuras.
- **Don't** poner gradientes sobre cards de contenido.
- **Don't** dispersar glow fuera del hero y los estados activos.
- **Don't** usar gris genérico en fondos; siempre neutros teñidos de verde.
- **Don't** introducir una segunda tipografía o un sistema de sombras sobre las cards.
- **Don't** inventar claims, precios o testimonios en el copy de la página.
