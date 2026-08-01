# 05 · MiPyUtil — Dirección visual de la landing

> Mundo visual heredado de `DESIGN.md` ("Clean Focus") con un **tema fijo de marca**: **Prosperidad (esmeralda)**. La landing replica la navegación de la app ("panel de control"): Resumen → Inventario → Ventas → Cuadre → Temas.

---

## Contrato de dirección

- **THESIS:** La landing es la app. La estructura de la página replica las pantallas de MiPyUtil y cada sección se ancla en un screenshot real. Refusa el patrón genérico "hero + grid de features + pricing" de toda landing de SaaS.
- **OWN-WORLD:** Tema Prosperidad — fondo `#F8FAF7`, superficies blancas, líneas `#E2EBE5`, tinta `#1A2E1A`, primario `#059669`; bandas oscuras "modo noche" con base bosque `#0F1A14`. Tipografía **Inter** (la misma de la app). Radios `8/12/16` y pill. Cards planas, sin sombras (solo la elevación sutil `subtle`). Screenshots dentro de **mockups de teléfono** como material central.
- **STORY:** Un dueño de MiPyme cubana reconoce su tienda, entiende que inventario, ventas, turnos y cuadre viven en un solo teléfono que funciona sin internet, y descarga la APK para instalarla por WhatsApp/Telegram.
- **PRIMER VIEWPORT:** H1 "Tu mipyme, organizada." + sub "Inventario, ventas y turnos… Todo sin internet." + CTA "Descargar APK" + botones WhatsApp/Telegram; a la derecha, mockup de teléfono con `01-resumen.png`.
- **FORMA:** "Panel de control" — la landing como la propia app (candidato 7 de la lista de estructuras; roll degradado, sin challengers).

---

## Tokens de color (tema Prosperidad, de `DESIGN.md`)

### Light
| Token | Valor | Uso |
|---|---|---|
| primary | `#059669` | CTAs, enlaces, acentos activos |
| ink | `#1A2E1A` | Texto principal |
| muted | `#6B7280` | Texto secundario |
| line | `#E2EBE5` | Bordes y separadores |
| surface | `#FFFFFF` | Cards, fondos de sección |
| surfaceSec | `#ECF7F0` | Fondos alternos, chips |
| background | `#F8FAF7` | Fondo base de la página |
| success | `#059669` | Checklists, ✓ |
| warning | `#D97706` | Alertas de stock bajo |

### Dark (bandas "modo noche")
| Token | Valor |
|---|---|
| background | `#0F1A14` (bosque) |
| surface | `#1A2E22` |
| line | `#2A4A38` |
| ink | `#EEF4F0` |
| primary | `#34D399` (esmeralda claro, brilla en oscuro) |

---

## Tipografía

- **Familia:** Inter (400 / 500 / 600 / 700 / 800). La misma que la app (`assets/fonts/Inter-*.ttf`). Cargar desde Google Fonts.
- **Escala (referencia):**
  - Display hero: 48–64px / 800, letter-spacing −0.02em.
  - H2 sección: 28–36px / 700.
  - H3 tarjeta: 18–20px / 600.
  - Body: 16–17px / 400, línea 1.6.
  - Meta/eyebrow: 12–13px / 600, mayúsculas, letter-spacing 0.08em, color primario.
- Texto base siempre en `ink` (AA). Muted solo para metadatos.

## Radios, espaciado y elevación

- **Radios:** cards 16px, botones 12px, pills 9999px, mockups de teléfono 32px.
- **Base de espaciado:** 4px. Rítmico: secciones 80–120px vertical; dentro de sección 16–32px.
- **Elevación:** sombra `subtle` (`0 2px 4px rgba(6,78,59,0.06)`) solo en mockups y bandas; cards planas sin sombra (fiel al anti-patrón "sin gradientes de fondo" de la app).

## Anti-patrones (heredados de `DESIGN.md`)

- ❌ Sin negro puro en fondos oscuros → usar bosque `#0F1A14`.
- ❌ Sin gradientes sobre cards de contenido.
- ❌ Sin glow disperso → reservar a elementos hero y estados activos.
- ❌ No usar gris genérico en fondos → siempre neutros teñidos de verde.

## Componentes

- **Nav:** fija, fondo `background` con blur ligero y línea inferior `line`. Logo tipográfico "MiPyUtil" + CTA pill esmeralda.
- **Botones:** primario `#059669` (texto blanco), secundario outline `#059669`, terciario ghost. Hover: primary más oscuro `#047857`.
- **Mockup de teléfono:** marco `#1A2E1A` (o blanco sobre banda oscura), radio 32px, muesca superior, screenshot dentro; sombra `subtle` esmeralda.
- **Checklist:** ✓ esmeralda `#059669`.
- **Bandas oscuras:** sección "modo noche" para el problema y la descarga, para exhibir el dark mode del producto.
- **FAQ:** acordeón con borde `line`, ítem activo con acento esmeralda.

## Responsive

- **Mobile-first:** 1 columna, nav colapsa a hamburguesa; mockups a ancho completo (máx. 320px centrados).
- **≥ 768px:** hero en 2 columnas (texto | mockup); features en grid de 2.
- **≥ 1024px:** grid de 3 para "para quién"; hero display 64px; mockups acompañando texto.
- Puntos de corte: 640 / 768 / 1024.

## Accesibilidad

- Contraste AA en todo el copy (checklist manual al finalizar).
- `prefers-reduced-motion`: reducir animaciones a fades.
- Nav operable por teclado; FAQ con `<button>` real; foco visible (`:focus-visible`) con anillo esmeralda.
- `lang="es"`, títulos descriptivos, alt en imágenes.
