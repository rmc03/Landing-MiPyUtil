# Actualizar la landing: plan Gratuito reemplaza el "14 días de prueba"

## Contexto

MiPyUtil (la app) acaba de cambiar su modelo de planes. Hasta ahora, toda
cuenta nueva arrancaba con un trial temporal de un plan de pago (Básico) que
vencía y pasaba a modo solo lectura si no se pagaba. Eso ya no existe: ahora
toda cuenta nueva entra directo en un plan **Gratuito**, permanente y sin
fecha de vencimiento, con límites reducidos. Si quiere más capacidad, el
usuario mejora de plan manualmente (siempre ha sido así: se contacta por
WhatsApp/Telegram, no hay pasarela de pago automática).

Esta landing (`rmc03/Landing-MiPyUtil`) todavía anuncia el modelo viejo, y
además ya estaba desalineada con la app incluso antes de este cambio: dice
**"14 días"** de prueba en varios lugares, mientras que la app ofrecía 30
días. Ambos números quedan obsoletos — no hay que "corregir a 30", hay que
quitar la idea de trial temporal por completo y anunciar el plan Gratuito.

**No confundir con el "modo demo" de la app** (un modo de trabajo con datos
falsos que existía dentro de la app y ya fue eliminado del código — no es una
sección de esta landing). Lo que sí toca esta landing es todo el copy que
promete "N días de prueba gratis", porque ese concepto también desapareció.

## Los 4 planes vigentes (fuente de verdad: tabla `planes` en Supabase, proyecto MiPyUtil)

| Plan | Productos | Dependientes | Administradores | Atención prioritaria |
|---|---|---|---|---|
| **Gratuito** (nuevo) | 30 | 3 | 1 | No |
| Básico | 75 | 3 | 2 | No |
| Negocio (recomendado) | 150 | 5 | 3 | No |
| Pro | 300 | 8 | 4 | Sí |

Los precios de los planes de pago (CUP/USD) solo viven en esta landing — la
app no los expone. El plan Gratuito no tiene precio: es $0 / gratis para
siempre.

## Cambios a hacer

### 1. `src/components/sections/Precios.astro`
- Agregar una entrada **Gratuito** al array `plans` (frontmatter, línea ~7),
  antes de `Básico`. No tiene `monthlyPrice`/`annualPrice`/`monthlyIntro`
  reales — hay que decidir cómo mostrarlo sin dinero (ej. reemplazar el
  bloque de precio por "Gratis" o "$0 para siempre" cuando el plan no tiene
  precio, y ocultar el toggle mensual/anual y el tag de método de pago para
  esa tarjeta en particular).
- El botón de esa tarjeta no debería decir "Elegir plan" vía WhatsApp como
  los de pago (no hace falta contactar a nadie para empezar gratis) — mejor
  que apunte a la sección de descarga (`#descarga` o como se llame el ancla)
  con algo como "Empezar gratis".
- Cambiar el subtítulo de la sección (línea 56): "14 días de prueba gratis en
  cualquier plan..." → algo tipo "Empieza gratis. Mejora cuando lo
  necesites." (no prometer trial en los planes de pago).
- Límites de la tabla de arriba, `features: ['Atención prioritaria.']` solo
  en Pro, igual que ahora.

### 2. `src/components/sections/TrustStrip.astro`
- Línea 3: `{ text: '14 días de prueba gratis.' }` → reemplazar por algo como
  `{ text: 'Plan gratuito para siempre.' }` (o el phrasing que mejor calce
  con el resto de los `items` de esa lista — revisar el resto del array para
  mantener el mismo tono/longitud).

### 3. `src/components/sections/Descarga.astro`
- Bloque `.trial-line` (líneas ~122-131): hoy dice *"14 días de prueba gratis
  completa. Sin ningún compromiso: si decides continuar, planes desde 1.500
  CUP/mes... nunca antes de que termine tu periodo de prueba."* — reescribir
  sin el periodo de prueba, algo como: *"Empieza gratis, sin tarjeta ni
  compromiso. Cuando necesites más capacidad, mejora de plan desde 1.500
  CUP/mes."*
- Las clases CSS `.trial-line`/`.trial-icon` pueden quedar tal cual (son solo
  nombres de clase, no texto visible) o renombrarse si quieres prolijidad —
  no es obligatorio para esta tarea.
- No tocar `share-line` (WhatsApp/Telegram/Zapya) ni el link fijo
  `.../releases/latest/download/MiPyUtil.apk` — nada de eso cambió.

### 4. `src/components/sections/FAQ.astro`
- Pregunta "¿Cómo empiezo?" (línea ~30): *"...empiezas tu prueba gratis de 14
  días sin ningún cobro."* → *"...empiezas a usarla gratis en el plan
  Gratuito, sin ningún cobro ni tarjeta."*
- Revisar si hay otra pregunta en el mismo archivo que mencione límites de
  plan, trial o "modo demo" y no haya salido en el grep de abajo.

## Fuera de alcance (no tocar)

- El pipeline de release (`.github/workflows/release.yml` en el repo de la
  app publica acá los `.apk`/`.msix`) — nada de esto se relaciona con el
  cambio de planes.
- El botón de descarga y el nombre fijo `MiPyUtil.apk` en `Descarga.astro`.
- El flujo de pago manual por WhatsApp de los planes pagos (Básico/Negocio/
  Pro) — sigue exactamente igual, solo cambia que ya no hay trial previo.

## Verificación

1. Grep final en `src/` por `demo`, `trial`, `14 días`, `30 días`, `prueba
   gratis` (case-insensitive) — no debería quedar ninguna mención a un
   periodo de prueba temporal; solo debe quedar el plan Gratuito permanente.
2. `npm run build` (Astro) para confirmar que el sitio compila con la
   tarjeta nueva.
3. Revisar visualmente `/#precios` en `npm run dev` — la tarjeta Gratuito
   debe verse coherente al lado de las otras 3 (mismo alto de card, sin
   huecos donde iría el precio).
