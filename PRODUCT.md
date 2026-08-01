# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: dueños y administradores de MiPymes y TCPs en Cuba — bodegones y minimarkets, cafeterías y bares, tiendas de ropa o calzado, talleres de celulares/electrónica, ferreterías. Operan con conexión a internet inestable (Etecsa) y apagones. El dueño decide e instala: descarga la APK, la instala en su Android y pasa a ser el rol Admin (control total). *(La app en sí es Android/Flutter; esta superficie es la landing web que la comercializa.)*

Secondary: el dependiente (empleado) que opera la app en tienda — abre turno, vende y cierra rindiendo cuentas. Participa en el relato de la landing como parte del flujo de un día, no como comprador.

## Product Purpose

MiPyUtil es una aplicación móvil de gestión para pequeños negocios: inventario, punto de venta (POS), turnos de empleados y cuadre de caja diario en un solo teléfono, funcionando sin internet. La landing convierte a un dueño de MiPyme en descarga de la APK. Éxito de esta superficie: el dueño reconoce su tienda, entiende que inventario, ventas, turnos y cuadre viven en un solo teléfono que no se detiene sin conexión, y descarga la APK para instalarla por WhatsApp/Telegram.

## Positioning

Un solo teléfono que lleva el negocio completo sin depender de internet: inventario, ventas, turnos y cuadre de caja. Lo que un vecino no puede copiar: diseño **offline-first** (base local SQLite), **control de caja diario por turnos** donde el dependiente rinde cuentas y el dueño aprueba o rechaza con reversión automática del stock, y **distribución directa por APK** sin tiendas de aplicaciones.

## Operating Context

- Uso en tienda con internet inestable y apagones; la app opera offline con base local SQLite. La sincronización a Supabase es arquitectura preparada, no operativa para el usuario final.
- Flujo de un día: el dependiente abre su turno → vende (efectivo, transferencia o mixto, con QR de pago y cambio calculado) → cierra el turno → envía su cuadre. El admin lo aprueba o rechaza (con comentario); al rechazar, el stock se revierte automáticamente.
- Instalación: la APK se comparte directo por WhatsApp, Telegram o Zapya y se instala en cualquier Android, sin Play Store.
- Dos roles: **Admin** (Resumen, Inventario, Cuadres, Temas, Equipo, Configuración) y **Dependiente** (Mi turno, Nueva venta).
- Moneda `$` genérica, fechas `dd/MM/yyyy`, horas `hh:mm a`.

## Capabilities and Constraints

Capacidades verificadas en código (docs 01/02):
- Inventario con fotos, categorías, búsqueda, ordenar/filtrar, exportación y alertas de stock bajo.
- POS con modos de pago Efectivo / Transferencia / Mixto y cálculo de cambio.
- Turnos con cuadre diario y aprobación/rechazo con reversión de stock.
- Cobro por QR de pago (hasta 5 QRs propios, recorte al importar, modal de pantalla completa).
- 6 temas de color con modo claro/oscuro y ajustes de accesibilidad (tamaño de texto, alto contraste, reducir animaciones).
- Onboarding interactivo de 6 páginas.
- Stack app: Flutter 3.12 · Riverpod · go_router · sqflite · Supabase (Auth/Postgres/Storage, desconectado por defecto) · connectivity_plus · Material 3 · Lucide icons · Inter.

Restricciones de copy (no inventar): precios o planes de suscripción; nombres de clientes reales o testimonios; cifras de rendimiento ("aumenta tus ventas un X%"); afirmar que la sincronización en la nube ya está operativa; marcas que no aparezcan en el código.

## Brand Commitments

- Nombre: **MiPyUtil**. Eslogan: *"Tu mipyme, organizada."* Descripción corta: *"Inventario, ventas y turnos. Todo sin internet."*
- Tono: directo y cercano, español de Cuba/Latinoamérica (*cuadre, dependiente, turno, caja, mercancía*), sin hype.
- Identidad visual de la landing (compromiso explícito del dueño del producto): seguir `05-direccion-visual.md` — mundo "Clean Focus", tema fijo **Prosperidad (esmeralda)**, tipografía **Inter**, estructura **"la landing es la app"** (panel de control), con mockups de teléfono y screenshots reales de la app como material central.
- Sin ícono de logo definitivo: marca tipográfica "MiPyUtil".
- CTAs de descarga y contacto sin destinos definidos aún (marcadores).

## Evidence on Hand

- Fuentes: `01-producto-posicionamiento.md`, `02-funciones-y-pantallas.md`, `03-screenshots-requeridos.md`, `04-copy-es.md`, `05-direccion-visual.md` (raíz del proyecto).
- Copy final aprobado sección por sección (04) y lista de 8 screenshots requeridas con nombres exactos (03).
- Ausencias que no deben fabricarse: no hay screenshots reales todavía (placeholder hasta que el usuario los coloque); no hay enlaces reales de CTAs (APK / WhatsApp / Telegram / canal → marcadores `#`); no hay precios, testimonios, clientes ni métricas de rendimiento.

## Product Principles

1. **Offline-first es la promesa central.** El negocio no se detiene sin conexión; la landing debe hacerlo evidente desde el primer viewport.
2. **El dueño controla la caja.** Cada dependiente rinde cuentas al cerrar el turno; el dueño tiene la última palabra, con reversión automática del stock.
3. **Sin papel ni Excel.** Productos, ventas y movimientos quedan registrados automáticamente.
4. **Honestidad sin hype.** Solo hechos verificables; nada de "revolucionario", ni cifras inventadas, ni claims de cloud operativo.
5. **La app es el material.** La landing replica las pantallas reales de la app y cada sección se ancla en un screenshot real dentro de mockups.

## Accessibility & Inclusion

- Contraste AA en todo el copy (verificación manual al finalizar).
- `prefers-reduced-motion`: reducir animaciones a fades.
- `lang="es"`, navegación operable por teclado, foco visible (`:focus-visible`), `alt` en imágenes, FAQ con `<button>` real.
