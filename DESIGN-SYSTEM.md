# Sistema de diseño de MiPyUtil — "El Tablón Curtido"

Especificación completa de color, tipografía, espaciado, forma, elevación y movimiento para implementar el estilo visual de MiPyUtil en la app Flutter (Android + Windows). Este documento es autosuficiente: no depende de ningún otro archivo del proyecto de origen (una landing web hecha en Astro) para tener sentido. Todo lo que hace falta para implementar está aquí.

## 0. Contexto del producto (por qué el estilo es así)

MiPyUtil es la app de gestión (inventario, ventas/cobro, turnos de empleados, cuadre de caja, ganancias) para pequeños negocios (MiPyMEs/TCPs) en Cuba: bodegas, cafeterías, tiendas, talleres, ferreterías. Corre **100% sin conexión** — los datos viven en el dispositivo — porque los apagones y el internet inestable son la norma, no la excepción. Esto es relevante para el estilo por dos razones concretas:

1. La dirección visual ("El Tablón Curtido") rechaza a propósito la estética "SaaS oscuro genérico" (violeta, glow, glassmorphism) y el cliché tropical pastel. En su lugar imita el tablón de precios pintado a mano de un negocio real: pintura clara curtida por el sol en el tema claro, el mismo tablón sin luz durante un apagón en el oscuro.
2. **Cualquier recurso (fuentes, íconos, imágenes) debe poder cargar sin red.** No uses paquetes o mecanismos que descarguen assets en tiempo de ejecución — todo debe empaquetarse con la app. Ver sección 3 (Tipografía) para el detalle de fuentes.

---

## 1. Modelo de tema (claro / oscuro)

El sistema tiene **dos temas completos con la misma estructura de roles**, nunca una mezcla de ambos en la misma pantalla:

- **Claro** — pintura de sol: superficies claras (`#E7DFC9` de fondo), tinta oscura, acento óxido/rótulo.
- **Oscuro ("el apagón")** — el mismo tablón sin luz: fondo casi negro (`#121210`), tinta clara, el acento se convierte en la luz ámbar de un indicador. No es un "modo oscuro" genérico — es la demostración visual de la promesa del producto: "con luz o sin luz, tu negocio sigue".

**Comportamiento en la app:** usar `ThemeMode.system` — la app no fuerza un tema propio por defecto, sigue la preferencia de tema (claro/oscuro) que ya tenga configurada el sistema operativo del dispositivo. Ambos temas deben implementarse completos y con la misma calidad; ninguno es "el secundario a medias".

---

## 2. Color

Cada color se da en tres formas: rol semántico, valor CSS de referencia (para entender la intención — alpha incluido donde aplica) y el valor **listo para Flutter** en formato `0xAARRGGBB` (pegar directo en `Color(...)`).

### 2.1 Tema claro

| Token | CSS de referencia | Flutter `Color(...)` | Uso |
|---|---|---|---|
| `board` | `#E7DFC9` | `0xFFE7DFC9` | Fondo de página/pantalla. |
| `boardPanel` | `#DAD0B4` | `0xFFDAD0B4` | Fondo de contenedores de segundo nivel (paneles, bandas de sección). |
| `plate` | `#F2ECDC` | `0xFFF2ECDC` | Superficie de cada tarjeta/placa individual dentro de un panel. |
| `ink` | `#262019` | `0xFF262019` | Texto principal, íconos principales. |
| `inkMuted` | `#57503F` | `0xFF57503F` | Texto secundario, leyendas, metadatos. |
| `line` | `rgba(38,32,25,0.16)` | `0x29262019` | Bordes y divisores suaves. |
| `lineStrong` | `rgba(38,32,25,0.30)` | `0x4D262019` | Bordes con más énfasis (ej. borde de botón secundario). |
| `accent` | `#B4472A` | `0xFFB4472A` | Único color interactivo: CTA primario, alertas, estado activo. |
| `accentDeep` | `#8F3820` | `0xFF8F3820` | Estado hover/pressed de `accent` (más oscuro en este tema). |
| `accentOn` | `#FFFFFF` | `0xFFFFFFFF` | Texto/ícono sobre un relleno de `accent`. |
| `success` | `#6B4A10` | `0xFF6B4A10` | Exclusivo de confirmación positiva (ej. "Cuadre: OK"). Nunca decorativo. |
| `screw` (ornamento opcional) | `#8B8578` | `0xFF8B8578` | Remaches decorativos de esquina de panel. Puramente ornamental, omitir si no aporta. |

### 2.2 Tema oscuro

| Token | CSS de referencia | Flutter `Color(...)` | Uso |
|---|---|---|---|
| `board` | `#121210` | `0xFF121210` | Fondo de página/pantalla. |
| `boardPanel` | `#1A1712` | `0xFF1A1712` | Fondo de contenedores de segundo nivel. |
| `plate` | `#211D17` | `0xFF211D17` | Superficie de cada tarjeta/placa individual. |
| `ink` | `#EDE6D8` | `0xFFEDE6D8` | Texto principal, íconos principales. |
| `inkMuted` | `#A99C82` | `0xFFA99C82` | Texto secundario, leyendas, metadatos. |
| `line` | `rgba(237,230,216,0.12)` | `0x1FEDE6D8` | Bordes y divisores suaves. |
| `lineStrong` | `rgba(237,230,216,0.24)` | `0x3DEDE6D8` | Bordes con más énfasis. |
| `accent` | `#E8A33D` | `0xFFE8A33D` | Único color interactivo. |
| `accentDeep` | `#F3BA63` | `0xFFF3BA63` | Estado hover/pressed de `accent` (**más claro** en este tema, no más oscuro). |
| `accentOn` | `#121210` | `0xFF121210` | Texto/ícono sobre un relleno de `accent` (casi negro, no blanco). |
| `success` | `#F0D875` | `0xFFF0D875` | Exclusivo de confirmación positiva. |
| `screw` (ornamento opcional) | `#4A4030` | `0xFF4A4030` | Remaches decorativos. |

### 2.3 Notas de color que hay que respetar al implementar

- **`line` y `lineStrong` son color con transparencia, no un hex sólido.** Están pensados para componerse sobre lo que tengan debajo (`board`, `boardPanel` o `plate`). Ya vienen convertidos a `0xAARRGGBB` en las tablas de arriba — úsalos tal cual como color de borde/divisor con su propio alpha, no los "aplanes" a un color sólido.
- **`accentDeep` es "el tono de hover/foco", no "el tono más oscuro".** En claro sí es más oscuro que `accent`. En oscuro es **más claro** que `accent` — porque ahí `accent` ya es la luz ámbar, y aclarar (no oscurecer) es lo que se lee como "más énfasis". No generes `accentDeep` programáticamente oscureciendo `accent` en ambos temas: usa el valor fijo de la tabla.
- **`accentOn` se invierte por completo entre temas:** blanco en claro, casi negro en oscuro. Úsalo siempre para texto/íconos que van encima de un relleno `accent` — nunca asumas que "el texto sobre accent siempre es blanco".
- **`success` es exclusivo de confirmación positiva** (ej. "Cuadre aprobado", "Venta registrada"). Nunca lo uses como color decorativo o como variante alternativa de `accent`.
- **Un solo color interactivo por pantalla ("Regla del Acento Único").** Si una pantalla necesita un segundo color con significado, ese color es `success` (confirmación) — no un segundo acento saturado por variedad visual.

### 2.4 Mapeo sugerido a `ColorScheme` de Material (Flutter)

Si el proyecto usa `ColorScheme`/Material 3, este es el mapeo recomendado — ajústalo si el proyecto ya tiene otra convención establecida:

| Rol de `ColorScheme` | Token de este sistema |
|---|---|
| `background` / `surface` | `board` |
| `surfaceContainerHighest` (o equivalente de "superficie elevada") | `boardPanel` |
| `surfaceContainer` (o "tarjeta") | `plate` |
| `onSurface` | `ink` |
| `onSurfaceVariant` | `inkMuted` |
| `outline` | `line` |
| `outlineVariant` | `lineStrong` |
| `primary` | `accent` |
| `primaryContainer` / estado hover-focus de `primary` | `accentDeep` |
| `onPrimary` | `accentOn` |
| `tertiary` (reservado solo a confirmación) | `success` |

No existe un color de `error` definido en este sistema — si la app necesita uno (validación de formularios, por ejemplo), usar un rojo estándar de accesibilidad AA propio, ya que introducir `accent` como color de error violaría la Regla del Acento Único (el acento ya está tomado por las alertas de inventario).

---

## 3. Tipografía

**Fuente de titulares (display):** Anton — **un solo peso disponible: 400 (Regular)**. No existe "Anton Bold" ni variantes; para dar más peso visual a un titular se usa tamaño, no peso de fuente.

**Fuente de todo lo demás (body):** Archivo — pesos necesarios: **400, 500, 600, 700 y 800**.

**Fallback si una fuente no carga:** `system-ui` / la fuente del sistema (sans-serif). No sustituir Anton o Archivo por otra fuente decorativa "parecida" — son parte de la identidad, no un detalle intercambiable.

### 3.1 Carga de fuentes — requisito offline

Ambas fuentes son de Google Fonts en el proyecto de origen (que es una web y las carga desde `fonts.googleapis.com`). **Eso no aplica a esta app.** Como MiPyUtil debe funcionar 100% sin conexión siempre, las fuentes deben:

- Descargarse una vez (Anton peso 400; Archivo pesos 400/500/600/700/800) y **empaquetarse como assets locales** del proyecto Flutter (`.ttf`/`.otf` declarados en `pubspec.yaml` bajo `fonts:`).
- **No** usar un paquete o mecanismo que las descargue en tiempo de ejecución (por ejemplo, el modo por defecto de paquetes tipo `google_fonts` que hacen fetch remoto la primera vez) — eso rompería el arranque de la app sin datos móviles, que es exactamente el escenario que el producto promete soportar.

### 3.2 Regla del Póster Único

**Anton aparece una sola vez por pantalla** — el titular principal de esa pantalla (el equivalente a un `h1`). Todo lo demás (títulos de sección, subtítulos, cuerpo, etiquetas) se resuelve en Archivo variando peso y tamaño, nunca añadiendo una segunda fuente de titular ni un segundo uso de Anton en la misma pantalla.

### 3.3 Escala de tamaño

En la web de origen estos tamaños son fluidos (interpolan con el ancho de pantalla vía `clamp()` de CSS). Eso no existe en Flutter, así que la tabla da los dos extremos reales — el valor para pantalla angosta (teléfono) y el valor para pantalla ancha (tablet o la versión Windows de escritorio) — y el punto donde el diseño original cambia de uno a otro: **768 dp de ancho**. No inventes un valor intermedio interpolado: usa el extremo angosto por debajo de 768dp, y el extremo ancho en 768dp o más.

| Rol | <768dp (teléfono) | ≥768dp (tablet / Windows) | Peso | Line-height (múltiplo de la fuente) | Letter-spacing | Uso |
|---|---|---|---|---|---|---|
| Display | 36px | 72px | 400 (Anton) | 0.95 | 0.002em (≈ neutro) | Titular único de la pantalla. |
| Headline | 24px | 36px | 800 (Archivo) | 1.12 | -0.01em | Títulos de sección/pantalla. |
| Title | 17px | 20px | 700 (Archivo) | 1.3 | normal | Subtítulos. |
| Lead | 16px | 18px | 400–500 (Archivo) | 1.5 | normal | Párrafo destacado bajo un titular. |
| Body | 16px | 16px (fijo) | 400 (Archivo) | 1.6 | normal | Texto de párrafo estándar. |
| Small | 15px | 15px (fijo) | 400–600 (Archivo) | 1.35–1.6 | normal | Texto secundario. |
| Label | 13px | 13px (fijo) | 700 (Archivo) | 1.3 | 0.03em | Etiquetas de metadato dentro de una placa, texto de botón secundario. Uso moderado, no como "eyebrow" obligatorio de cada sección. |
| Caption | 12px | 12px (fijo) | 400–700 (Archivo) | normal | normal | Texto auxiliar mínimo (el tamaño de texto más pequeño permitido en toda la app). |
| Stat | 22px | 28px | 800 (Archivo) | ajustado (~1.1) | normal | Cifra numérica dentro de una "placa" (ver sección 9.2). Usar fuente tabular/monoespaciada para números si el framework lo permite, para que las cifras no "bailen" al actualizarse. |

Colores de texto: `ink` para texto principal (Display, Headline, Title, Body en su mayoría), `inkMuted` para Lead, Small, Label y Caption cuando no llevan énfasis.

---

## 4. Espaciado

Escala fija (no cambia con el tamaño de pantalla):

| Token | Valor |
|---|---|
| `spaceXs` | 4dp |
| `spaceSm` | 8dp |
| `spaceMd` | 16dp |
| `spaceLg` | 24dp |
| `spaceXl` | 32dp |
| `space2xl` | 48dp |
| `space3xl` | 64dp |

Padding vertical de una pantalla/sección completa (fluido en el original; usar el extremo según el ancho disponible del dispositivo):

| Ancho disponible | Padding vertical |
|---|---|
| <768dp | 40–80dp |
| 768–1024dp | 56–96dp |
| ≥1024dp | 64–120dp |

---

## 5. Forma (radios de esquina)

| Token | Valor |
|---|---|
| `radiusSm` | 3dp |
| `radiusMd` | 4dp |
| `radiusLg` | 6dp |

**Regla no negociable: esquinas casi rectas, nunca redondeadas tipo píldora.** Esta es la regla con más riesgo de perderse en Flutter, donde el botón totalmente redondeado (`StadiumBorder` / radio grande) es el estilo por defecto de muchos componentes Material — aquí es exactamente lo contrario. Todo botón, tarjeta, chip o campo de entrada usa uno de estos tres radios pequeños, nunca un radio que redondee visiblemente las esquinas en semicírculo.

Excepción puntual: remaches/tornillos decorativos en las esquinas de paneles son círculos pequeños (7dp de diámetro) — es un detalle de material físico, no una licencia para usar formas redondeadas en componentes funcionales.

---

## 6. Elevación y sombras

La mayoría de la elevación es plana o una sombra suave; un único gesto de sombra dura ("estampado") se reserva para el momento de mayor intención de cada pantalla. **Nunca uses un halo de color sin desplazamiento (glow) ni blur/glassmorphism en ninguna superficie** — ambos son parte del estilo "SaaS genérico" que este sistema rechaza explícitamente.

### 6.1 Sombra suave (elevación por defecto)

Dos capas apiladas. El color base cambia de naturaleza entre temas — no es un error, es intencional: en claro es la tinta oscura tiñendo la sombra de marrón; en oscuro es negro puro (usar la tinta clara del tema oscuro produciría un halo que "brilla" mal sobre un fondo casi negro).

| Tema | Capa | Offset X | Offset Y | Blur | Color con alpha (Flutter) |
|---|---|---|---|---|---|
| Claro | 1 | 0 | 2dp | 6dp | `0x1F262019` |
| Claro | 2 | 0 | 8dp | 24dp | `0x1A262019` |
| Oscuro | 1 | 0 | 2dp | 6dp | `0x1F000000` |
| Oscuro | 2 | 0 | 8dp | 24dp | `0x1A000000` |

Sin spread (extensión) en ninguna capa.

### 6.2 Sombra estampada (gesto de firma — máximo dos usos por pantalla)

Offset duro, sin blur, sin spread. Simula el elemento "prensado" físicamente sobre el tablón. Color = `ink` sólido del tema activo (no `accent`, no una versión con alpha) — en oscuro `ink` es la crema clara, así que sigue contrastando contra el relleno `accent`; usar `accent` ahí la camuflaría contra su propio relleno.

| Estado | Offset X | Offset Y | Blur | Color claro | Color oscuro |
|---|---|---|---|---|---|
| Reposo | 4dp | 4dp | 0 | `0xFF262019` | `0xFFEDE6D8` |
| Presionado/hover | 2dp | 2dp | 0 | `0xFF262019` | `0xFFEDE6D8` |

**Regla del Gesto Único: como máximo dos elementos por pantalla llevan esta sombra.** Resérvala para las dos acciones de mayor intención de cada pantalla (por ejemplo: el botón de confirmar cobro y el de cerrar turno — nunca los dos en pantallas distintas si no tienen ese nivel de intención). Si un tercer elemento la "reclama", pierde el derecho y usa la sombra suave en su lugar.

---

## 7. Tintes translúcidos (para chips e insignias)

Patrón para fondos suaves de chips/insignias de estado (ej. un badge de "turno abierto" o el ícono de una alerta): el color de rol (normalmente `accent`) al **14% de opacidad** sobre la superficie que tenga debajo, con el ícono/texto en el color de rol sólido encima (no en el color con alpha).

| Tema | Color con alpha (Flutter) |
|---|---|
| Claro | `0x24B4472A` (accent claro al 14%) |
| Oscuro | `0x24E8A33D` (accent oscuro al 14%) |

Es transparencia real, no un color pre-mezclado — se ve distinto según lo que tenga detrás (`board`, `boardPanel` o `plate`), y eso es intencional.

---

## 8. Accesibilidad (piso mínimo, no aspiracional)

- **Contraste mínimo AA** (4.5:1 para texto normal, 3:1 para texto grande/UI) en cualquier combinación texto/fondo, en ambos temas. `inkMuted` ya está verificado en ≥5:1 contra `board`, `boardPanel` y `plate` en los dos temas — si se introduce una combinación nueva, verificarla.
- **Área táctil mínima: 48dp** en cualquier elemento interactivo (botones, íconos tocables, ítems de lista accionables). No usar el mínimo de 44dp que a veces se ve en guías genéricas — en una app 100% táctil, 48dp es el piso real.
- **Indicador de foco visible** en cualquier flujo que soporte teclado/D-pad (relevante sobre todo en la versión Windows): contorno de 2dp en el color `accent` del tema activo, con 2dp de separación entre el contorno y el elemento.
- Todo el contenido va en español (locale `es`).
- **Toda cifra de negocio (ventas, cuadre, inventario) debe ser texto real y accesible a un lector de pantalla** — nunca una imagen, un ícono decorativo, o un widget marcado como puramente visual. Ver sección 9.2.

---

## 9. Componentes (especificación de estados, no nombres de widgets de Flutter)

Esta sección describe el comportamiento visual esperado por rol de componente. Deliberadamente no prescribe qué widget de Flutter usar (`ElevatedButton` vs. uno custom, etc.) — esa decisión depende de las convenciones ya existentes en el proyecto Flutter receptor.

### 9.1 Botones

- **Forma:** radio `radiusMd` (4dp), nunca píldora.
- **Primario:**
  - Reposo: fondo `accent`, texto/ícono `accentOn`, sin borde.
  - Hover/pressed: fondo `accentDeep`.
  - Focus: añade el contorno de foco (sección 8 de accesibilidad) sin quitar el fondo.
  - Disabled: opacidad ~50%, sin respuesta a toques.
  - Padding: 16dp vertical / 26dp horizontal en su tamaño estándar; puede reducirse a ~10–12dp vertical / 18–20dp horizontal en contextos compactos (una barra superior, por ejemplo), siempre respetando el mínimo de 48dp de alto táctil de la sección 8.
  - Máximo dos botones por pantalla llevan la sombra estampada (sección 6.2) — resérvala para la acción de mayor intención.
- **Secundario:**
  - Reposo: fondo `plate`, texto `ink`, borde de 1.5dp en `lineStrong`.
  - Hover/pressed: fondo `boardPanel`, texto y borde pasan a `accent`.
  - Focus/disabled: igual que el primario.
  - Nunca lleva sombra estampada.

### 9.2 Placas ("plate" — el componente para mostrar cifras reales del negocio)

Es el componente más importante de portar: es la forma en que **toda cifra de negocio** (ventas de hoy, estado de cuadre, alerta de inventario bajo, un ítem de precio) se muestra como dato real y accesible — nunca como una captura de pantalla, un ícono decorativo, o texto marcado como puramente visual para un lector de pantalla.

- **Contenedor de panel:** fondo `boardPanel`, radio `radiusMd`, borde de 1dp en `line`, sombra suave (sección 6.1), padding `spaceMd` (16dp).
- **Placa individual** (vive dentro del contenedor de panel): fondo `plate`, borde de 1dp en `line`, radio `radiusSm` (3dp), layout de dos columnas — etiqueta a la izquierda, valor a la derecha, alineados por la línea base del texto.
  - Etiqueta: estilo `Label` (13dp), color `inkMuted`, tracking 0.03em.
  - Valor numérico corto (una cifra: "$200", "47"): estilo `Stat` (22–28dp), peso 800, color `ink`, numérico tabular si el framework lo soporta.
  - Valor descriptivo largo (una frase, no una cifra corta): estilo `Body` (16dp), peso 700 — **nunca** el estilo `Stat` para texto largo, para que no rompa el layout de la placa.
- **Variante de alerta** (dato que exige atención real, ej. "inventario bajo"): fondo `accent` sólido en toda la placa, etiqueta y valor en `accentOn`. Usar solo cuando el dato realmente lo amerita, nunca de forma decorativa.
- **Variante de confirmación** (dato positivo confirmado, ej. "Cuadre: OK"): el valor toma el color `success` sobre el fondo `plate` normal (el fondo no cambia, solo el color del valor).

### 9.3 Barra de navegación / app bar

Fondo sólido (`board`), nunca semitransparente ni con efecto de vidrio esmerilado (blur). Si lleva una línea divisoria inferior, 1dp en `line`. El nombre/wordmark de la marca usa Archivo peso 800 (no Anton — Anton se reserva para el titular de cada pantalla, nunca se repite en la barra de navegación).

---

## 10. Movimiento

| Token | Duración | Uso |
|---|---|---|
| `durFeedback` | 120ms | Respuesta inmediata a una interacción (hover, press). |
| `durRoutine` | 250ms | Transiciones estándar (cambio de color, aparición de un elemento). |
| `durOverlay` | 400ms | Cambios de tema, overlays/modales. |
| `durFocal` | 650ms | Momentos con foco narrativo (entrada de un elemento protagonista en pantalla). |

**Curva de animación:** `Curves.easeOutExpo` o, si no está disponible directamente, la curva cúbica de Bézier `(0.16, 1.0, 0.3, 1.0)` — úsala para prácticamente todo el movimiento con intención (entradas, transiciones de color, cambios de estado).

**Accesibilidad de movimiento:** cuando el sistema operativo tiene activada la preferencia de "reducir movimiento", todas las animaciones y transiciones decorativas deben recortarse a una duración casi nula (sin iteraciones repetidas) — en Flutter, respetar la señal de accesibilidad del sistema para desactivar/reducir animaciones nunca esenciales para entender el estado de la UI.

---

## 11. Checklist de verificación al implementar

Antes de dar por terminada una pantalla, confirmar:

- [ ] ¿Los botones y tarjetas tienen esquinas casi rectas (3–6dp), nunca forma de píldora?
- [ ] ¿Cada botón/ítem interactivo mide al menos 48dp de alto/ancho tocable?
- [ ] ¿Hay como máximo dos elementos con sombra estampada (offset duro) en esta pantalla?
- [ ] ¿Aparece como máximo un color interactivo saturado (`accent`) por pantalla, además de `success` reservado solo a confirmaciones?
- [ ] ¿Anton aparece una sola vez en esta pantalla (el titular principal), y todo lo demás usa Archivo?
- [ ] ¿Toda cifra de negocio (ventas, cuadre, inventario) es texto real accesible a un lector de pantalla, no una imagen ni un ícono decorativo?
- [ ] ¿Los colores con transparencia (`line`, `lineStrong`, tintes) se aplicaron como alpha real y no como un hex sólido "aplanado"?
- [ ] ¿`accentOn` corresponde al tema activo (blanco en claro, casi negro en oscuro) en vez de estar fijo en un solo valor?
- [ ] ¿Ambos temas (claro y oscuro) se ven completos y con la misma calidad, sin uno de los dos a medio implementar?
- [ ] ¿Las fuentes (Anton, Archivo) están empaquetadas como assets locales, sin ningún mecanismo que las descargue en tiempo de ejecución?
