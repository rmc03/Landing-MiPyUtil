---
name: MiPyUtil
description: La pizarra de precios curtida por el sol que controla tu MiPyME, con un segundo estado nocturno para el apagón.
colors:
  board-light: "#E7DFC9"
  board-panel-light: "#DAD0B4"
  plate-light: "#F2ECDC"
  ink-light: "#262019"
  ink-muted-light: "#57503F"
  line-light: "rgba(38,32,25,0.16)"
  line-strong-light: "rgba(38,32,25,0.30)"
  accent-light: "#B4472A"
  accent-deep-light: "#8F3820"
  success-light: "#6B4A10"
  board-dark: "#121210"
  board-panel-dark: "#1A1712"
  plate-dark: "#211D17"
  ink-dark: "#EDE6D8"
  ink-muted-dark: "#A99C82"
  line-dark: "rgba(237,230,216,0.12)"
  line-strong-dark: "rgba(237,230,216,0.24)"
  accent-dark: "#E8A33D"
  accent-deep-dark: "#F3BA63"
  success-dark: "#F0D875"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(2.25rem, 8vw + 0.5rem, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.002em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 4vw + 0.4rem, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 2vw + 0.4rem, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.03em"
rounded:
  sm: "3px"
  md: "4px"
  lg: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary-light:
    backgroundColor: "{colors.accent-light}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-primary-light-hover:
    backgroundColor: "{colors.accent-deep-light}"
  button-primary-dark:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.board-dark}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-primary-dark-hover:
    backgroundColor: "{colors.accent-deep-dark}"
  button-secondary-light:
    backgroundColor: "{colors.plate-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-secondary-dark:
    backgroundColor: "{colors.plate-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  plate-light:
    backgroundColor: "{colors.plate-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.sm}"
  plate-dark:
    backgroundColor: "{colors.plate-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.sm}"
---

# Design System: MiPyUtil

## Overview

**Creative North Star: "El Tablón Curtido"**

MiPyUtil se anuncia como el objeto que su propio usuario ya conoce de memoria: el tablón de precios de mostrador, pintado a mano, corregido a mano y expuesto al sol de un negocio cubano real, no la pizarra de café tipo Pinterest ni la postal turística de La Habana en pastel. El sistema rechaza deliberadamente dos categorías: el "SaaS oscuro genérico" (fondo casi negro, acento violeta o neón, glow radial, blur de vidrio) que era la implementación anterior de este mismo producto, y el cliché opuesto de tropicalismo pastel. En su lugar, el tablón vive de día: pintura clara curtida por el sol, tinta oscura de brocha, una sola placa de corrección donde el negocio demuestra que ya no cuadra a mano.

El sistema tiene un segundo estado deliberado, no un "modo oscuro" genérico: el apagón. Cuando el visitante activa el interruptor, el mismo tablón, la misma composición, los mismos componentes, pasan a leerse solo por lo que un indicador ámbar alcanza a iluminar sobre un fondo casi negro real. El cambio de tema no es una preferencia de accesibilidad aislada: es la demostración en vivo de la promesa central del producto ("con luz o sin luz, tu negocio sigue"). El claro es el estado por defecto; el oscuro se activa, nunca al revés.

**Key Characteristics:**
- Pintura de sol, no vidrio: superficies mate, sin blur ni glassmorphism, sin glow.
- Un solo acento por estado (óxido de rótulo en claro, ámbar de indicador en oscuro), nunca ambos a la vez.
- Las cifras reales del negocio (ventas, cuadre, stock) viven en "placas" de texto real y accesible, nunca disfrazadas de captura de pantalla. El tour visual de producto (mockup de teléfono con esqueleto de respaldo) es una categoría aparte y sí está permitido: ver "Phone Mockup" en Components.
- Esquinas casi rectas, sombras con desplazamiento duro reservadas para un único momento de firma (el CTA principal), el resto de la elevación es suave y teñida hacia la tinta.

## Colors

Paleta de dos estados con la misma estructura de roles; el claro es el estado por defecto y el que se evalúa primero en cada decisión de contraste.

### Primary
- **Óxido de Rótulo** (`#B4472A` claro / `#E8A33D` oscuro, tokens `accent-light` / `accent-dark`): el único acento interactivo. CTA primario, subrayado del título, alertas de stock, indicador de "encendido" en modo apagón. En claro es un óxido de rótulo pintado; en oscuro se convierte literalmente en la luz ámbar del indicador. Nunca coexiste con un segundo acento saturado en la misma vista.

### Secondary
- **Dorado de Cuadre** (`#6B4A10` claro / `#F0D875` oscuro, tokens `success-light` / `success-dark`): exclusivo para el estado de confirmación positiva ("Cuadre: OK"). No se usa decorativamente. Separado de `accent` por luminosidad, no solo por matiz —en oscuro `accent` es ámbar medio y `success` es oro pálido— para que los dos seteos sigan leyéndose distintos incluso siendo ambos cálidos.

### Neutral
- **Tablón** (`#E7DFC9` claro / `#121210` oscuro, tokens `board-light` / `board-dark`): fondo de página. En claro, pintura de madera desgastada por el sol; en oscuro, la ausencia real de luz durante un apagón.
- **Panel de Tablón** (`#DAD0B4` claro / `#1A1712` oscuro): fondo de los contenedores de segundo plano (bandas, paneles del tablón de resumen).
- **Placa** (`#F2ECDC` claro / `#211D17` oscuro): superficie de cada placa individual dentro de un panel (una cifra, un ítem de instalación, una fila de precio).
- **Tinta** (`#262019` claro / `#EDE6D8` oscuro): texto principal.
- **Tinta Atenuada** (`#57503F` claro / `#A99C82` oscuro): texto secundario, leyendas, metadatos. Verificado en ≥5:1 contra `board`, `board-panel` y `plate` en ambos estados; nunca se escribe un gris a ojo en un componente, siempre este token.
- **Línea** (`rgba(38,32,25,0.16)` claro / `rgba(237,230,216,0.12)` oscuro): bordes y divisores.

### Named Rules
**La Regla del Acento Único.** Un solo color interactivo vive en cada estado del tema. Si un componente necesita un segundo color, es `success` (confirmación) o es un error de sistema, no una decisión de marca.

**La Regla de la Placa Honesta.** Ninguna cifra del negocio (ventas, cuadre, stock) se dibuja como arte decorativo oculto a lectores de pantalla. Toda placa que muestre un dato es contenido real (`<dl>`/lista), nunca un div `aria-hidden` disfrazado de captura de pantalla.

## Typography

**Display Font:** Anton (con system-ui, sans-serif de respaldo)
**Body Font:** Archivo (con system-ui, sans-serif de respaldo)

**Character:** Anton es la rotulación pintada a brocha, reservada para el único titular de portada de cada página; Archivo en 800 hace el trabajo de todos los demás titulares de sección sin agotar el gesto de póster. Ninguna de las dos es una fuente prohibida por sobreuso (Inter, Plus Jakarta Sans, Space Grotesk, IBM Plex, Fraunces, Playfair y similares quedan fuera del sistema).

### Hierarchy
- **Display** (400, `clamp(2.25rem, 8vw + 0.5rem, 4.5rem)`, line-height 0.95): el titular único del hero de cada página. Anton, mayúsculas y minúsculas mixtas (Anton ya tiene el peso de un póster; forzar `text-transform: uppercase` encima lo vuelve indistinguible del wordmark del nav).
- **Headline** (800, `clamp(1.5rem, 4vw + 0.4rem, 2.25rem)`, line-height 1.12): títulos de sección (`h2`). Archivo.
- **Title** (700, `clamp(1.0625rem, 2vw + 0.4rem, 1.25rem)`, line-height 1.3): subtítulos y `h3`.
- **Body** (400/500, 1rem, line-height 1.6, medida 65-75ch): párrafos y listas.
- **Label** (700, 0.8125rem, tracking 0.03em): metadatos de placa, etiquetas de botón secundario. Se usa con moderación, nunca como eyebrow obligatorio de cada sección.

### Named Rules
**La Regla del Póster Único.** Anton aparece una sola vez por página (el `h1` del hero). Todo lo demás se resuelve en Archivo con peso y tamaño, nunca añadiendo una segunda fuente de titular.

## Layout

Contenedor máximo de 1120px, el mismo ritmo de `clamp()` que ya traía el proyecto (`clamp(40px,10vw,80px)` de relleno de sección en móvil, hasta `--space-section-lg` en escritorio) se conserva porque ya era sólido. Mobile-first de verdad: la composición se diseña primero para ~360-390px y el layout de dos columnas es la mejora progresiva a partir de 48rem, no un colapso a partir de escritorio. El visual del hero (`PhoneMockup` compacto + floating cards) aparece solo desde 48rem, entre el titular y el párrafo; en móvil el hero es solo texto, para caber sin scroll, y la prueba visual llega más abajo con "Así se trabaja un día". El fondo del hero lleva una veta de madera muy sutil (enmascara `--ink` al 9% sobre `--board`, re-tiñéndose sola entre tema claro y apagón). Esa misma veta reaparece, a propósito, en dos zonas más con su propia curva y su propio mosaico —"Así se trabaja un día" y el trío Ventas/Inventario/Ganancias— para dar identidad a secciones que antes eran fondo plano sin repetir literalmente la textura del hero ni extenderla a toda la página; Precios, Descarga y FAQ se quedan sin textura a propósito, como contraste.

## Elevation & Depth

Sistema híbrido: la mayoría de la elevación es plana o de sombra suave teñida hacia la tinta en claro (`--shadow-rgb` = `ink-light`) y hacia negro puro en oscuro (`--shadow-rgb` = `0,0,0`, porque `ink-dark` es un color claro y teñir la sombra con él brillaría mal sobre el tablón casi negro); un único gesto de sombra dura ("estampado") se reserva para el CTA primario del hero y la tarjeta "recomendada" de precios (máximo dos usos por página), como si fueran objetos físicamente prensados sobre el tablón. Nunca se usa un halo de color sin desplazamiento como decoración ambiental.

### Shadow Vocabulary
- **Suave** (`0 2px 6px rgba(var(--shadow-rgb), 0.12), 0 8px 24px rgba(var(--shadow-rgb), 0.10)`): paneles, tarjetas de precio, elevación por defecto. `--shadow-rgb` es la tinta del tema activo.
- **Estampado** (`4px 4px 0 var(--ink)` en ambos temas, token `--stamp-color`): exclusivo del botón de descarga primario y la placa de plan recomendado. En oscuro `--ink` es la crema clara, así que la sombra contrasta contra el botón `--accent`; usar `--accent` ahí lo camufla contra su propio relleno. Es una firma, no un patrón repetible.

### Named Rules
**La Regla del Gesto Único.** La sombra estampada aparece como máximo dos veces por página. Si un tercer elemento la reclama, pierde el derecho: se degrada a sombra suave.

## Shapes

Esquinas casi rectas (`3-4px`, tokens `rounded.sm`/`rounded.md`), nunca píldora. El mundo es un tablón de madera pintado y placas atornilladas, no una interfaz de cristal: los botones son rectángulos con esquina mínima, no cápsulas. El único quiebre de la grilla recta son los tornillos/remaches circulares (4-8px) en las esquinas de los paneles principales, un detalle de material, no un lenguaje de forma alterno.

## Components

### Buttons
- **Shape:** esquina de 4px (`rounded.md`), nunca píldora.
- **Primary:** fondo `accent`, texto blanco en claro / `board-dark` en oscuro, `16px 26px`, sombra estampada `4px 4px 0`.
- **Secondary:** fondo `plate`, texto `ink`, borde `line-strong`, sin sombra estampada.
- **Hover / Focus:** primary oscurece a `accent-deep` y el desplazamiento de sombra se reduce a `2px 2px 0` (el botón se "presiona"); focus visible con contorno de 2px en `accent`, offset 2px.

### Plates (placas, componente de firma)
- **Uso:** toda cifra viva del negocio (ventas de hoy, estado de cuadre, alerta de stock, fila de precio, ítem de instalación).
- **Markup:** `<dl>` con pares `dt`/`dd` reales, nunca `aria-hidden`. Ver la Regla de la Placa Honesta.
- **Estilo:** fondo `plate` sobre `board-panel`, esquina de 3px, tornillos decorativos solo en el panel contenedor, no en cada placa individual.
- **Estado de alerta:** fondo `accent`, texto blanco, usado solo cuando el dato exige atención (stock bajo), nunca decorativamente.

### Comparison Table (tabla comparativa)
- **Uso:** comparar capacidades del producto contra el método manual (libreta, Excel) fila por fila; hoy vive en `Problema.astro`. Primera y única tabla `<table>` real del sistema: no es una placa (no muestra una cifra propia del negocio del visitante) y no es un mockup (no muestra la interfaz del producto).
- **Markup:** `<table>` semántico con `<th scope="col">`/`<th scope="row">` reales, nunca un grid de `div`. En móvil se desborda con scroll horizontal dentro de su propio contenedor en vez de colapsar columnas: fusionar "Libreta" y "Excel" perdería distinciones reales (p. ej. "funciona en el apagón" es cierto para la libreta pero no para Excel, que necesita una PC encendida). El encabezado de fila queda fijo (`position: sticky; left: 0`) durante el scroll para no perder de vista qué capacidad se compara.
- **Estilo:** cuerpo en `plate` (nunca `board-panel`, para separarse de la banda que la contiene); el encabezado invierte a `board-panel` a propósito, como una placa remachada aparte, un tono más recesado que el cuerpo. La columna del producto lleva un lavado suave del acento sobre `plate` (`color-mix` ~16%, igual que Offline Badge) más una barra superior sólida de `accent` en su celda de encabezado; nunca relleno sólido en el cuerpo, para no introducir un segundo acento saturado. El texto de esa columna es `ink` en el cuerpo (no `accent`: sobre el lavado no llega a 4.5:1 en tema claro) y `accent-deep` en el encabezado (sobre `board-panel` sin lavado, donde sí lo alcanza); `accent-deep` no solo sirve de hover, también es el tono de reserva del acento cuando este no tiene suficiente contraste por sí solo.
- **Cifras estimadas:** si la tabla va acompañada de una cifra ilustrativa (p. ej. tiempo de cuadre ahorrado), esa cifra lleva una etiqueta visible "Estimado" en la propia UI —nunca solo en el copy circundante o en un mensaje aparte— y usa un tamaño de tipografía distinto de `--fs-stat` (el token reservado a cifras reales de placa). Es la línea que evita que un visitante confunda una estimación con una placa honesta.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** `board-panel` sobre `board`, o `plate` sobre `board-panel` (dos niveles como máximo).
- **Shadow Strategy:** suave; ver Elevation & Depth.
- **Border:** 1px `line` en paneles secundarios; los paneles primarios usan solo sombra.

### Inputs / Fields
- No existen formularios propios en esta superficie (los CTA son enlaces a WhatsApp/Telegram/descarga directa); si se añaden, heredan el mismo radio de 4px y foco de 2px en `accent`.

### Phone Mockup (visual ilustrativo de producto)
- **Uso:** tour visual de la app (hero, "Así se trabaja un día", secciones de función de Ventas/Inventario/Ganancias). Es una categoría distinta de la placa: no representa una cifra de negocio, representa la interfaz misma del producto, así que no le aplica la Regla de la Placa Honesta.
- **Markup:** bisel de teléfono con radio propio (no sigue la escala casi-recta del resto del sistema, es un objeto físico) conteniendo una captura real (`img`) en `/public/screens/`. Si la captura no existe o falla, cae con gracia a `ScreenSkeleton`, un SVG de UI de relleno con los mismos tokens del tema activo, para que la sección nunca muestre un hueco vacío.
- **Estado:** el bisel se mantiene oscuro (`ink` en claro, `board` en oscuro) incluso en apagón, porque un teléfono no "se ilumina" solo porque el tablón cambió de tema.
- **Dónde vive:** `PhoneMockup.astro` + `ui/ScreenSkeleton.astro`. Convive con la placa honesta (dl real) en la misma vista sin conflicto: la placa muestra la cifra, el mockup muestra la app que la produjo.

### Floating Cards, Checklist y Offline Badge
- **Floating Cards:** tarjetas ambientales flotantes sobre el mockup del hero (≥48rem únicamente, para evitar overflow en móvil), un solo acento (`tone-accent`) salvo la tarjeta de confirmación que usa `success`.
- **Checklist:** lista de beneficios con marca en `accent`, texto en `ink-muted` con énfasis en `ink`.
- **Offline Badge:** insignia de estado ("Funciona sin internet"), fondo `color-mix(accent 12%, transparent)`, borde y texto en `accent`.

### Navigation
- Wordmark en Archivo 800 (no Anton, para no repetir el gesto de póster del hero justo debajo). Enlaces en Archivo 600. Fondo `board`/`board-dark` sólido con línea inferior de 1px, sin blur de vidrio. El interruptor claro/oscuro vive en el nav como control real (icono + etiqueta accesible), nunca oculto en un menú.

### Theme Toggle (componente de firma)
Interruptor explícito de dos estados (sol / apagón), no una detección silenciosa de preferencia del sistema. Por defecto claro. El cambio recolorea el tablón entero sin alterar la composición: mismo panel, mismas placas, mismo botón, solo cambia qué tan iluminado está cada elemento. Persiste en `localStorage`.

## Do's and Don'ts

### Do:
- **Do** mantener el claro como estado por defecto; el oscuro se activa, nunca es la carga inicial.
- **Do** escribir toda cifra de negocio como contenido de texto real, accesible sin JavaScript ni CSS.
- **Do** usar el componente de placa (`<dl>` real) para cualquier cifra de negocio que se muestre en el copy; hoy vive en `GananciasLedger` y en `Precios` (`card-limits`). El hero resuelve su prueba con el tour visual de producto (`PhoneMockup`), no con placas.
- **Do** verificar `ink-muted` contra los tres fondos (`board`, `board-panel`, `plate`) de cada tema antes de usarlo en un componente nuevo.
- **Do** usar `PhoneMockup` + `ScreenSkeleton` como tour visual de producto en el hero (visual secundario ≥48rem), en "Así se trabaja un día" y en las secciones de función; es un mockup de producto, no una placa de cifra de negocio, así que no compite con la Regla de la Placa Honesta.
- **Do** etiquetar visiblemente cualquier cifra estimada o ilustrativa (no medida) como "Estimado" en la propia UI, para no confundirla con una placa honesta o con una cifra de adopción/uso (ver Comparison Table).

### Don't:
- **Don't** usar violeta, glow radial, `backdrop-filter` decorativo ni ningún residuo del sistema "SaaS oscuro" anterior.
- **Don't** usar una maqueta de pantalla o un esqueleto de carga para mostrar una cifra de negocio (ventas, cuadre, stock): esa cifra siempre va en una placa `<dl>` real. Como tour visual de producto (no como cifra), la maqueta de teléfono sí es parte del sistema.
- **Don't** usar botones en forma de píldora ni radios grandes en ningún componente.
- **Don't** repetir la sombra estampada en más de dos elementos por página.
- **Don't** poner un segundo color de acento saturado en la misma vista que el acento principal.
- **Don't** presentar una cifra de ahorro estimado con el mismo tamaño/tratamiento tipográfico que `--fs-stat` de una placa real, ni sin la etiqueta "Estimado" visible: eso es exactamente lo que la Regla de la Placa Honesta prohíbe un nivel más arriba.
