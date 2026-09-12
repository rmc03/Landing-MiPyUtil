# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primario:** dueño/a de una MiPyME o TCP en Cuba (bodega, cafetería, tienda, taller, ferretería), operando bajo apagones e internet inestable. Necesita ver ventas, inventario y ganancias, y confiar en el cuadre de caja diario, sin depender de un sistema en la nube ni de conexión constante.

**Secundario:** sus dependientes/empleados. Usan la misma app con un rol distinto (no un producto aparte) para vender y cerrar su propio turno, rindiendo cuentas al dueño.

## Product Purpose

Gestión integral de una MiPyME/TCP —inventario, ventas/cobro, turnos de empleados, cuadre de caja y ganancias— funcionando por completo sin internet, con los datos viviendo en el propio dispositivo.

Éxito = reemplazar la libreta y el Excel con una sola herramienta confiable que el dueño y su equipo comparten, con trazabilidad real de quién vendió y quién cuadró, sin depender de Play Store ni de la nube.

## Positioning

La navaja suiza operativa de la MiPyME cubana: un solo sistema, compartido por roles (dueño + equipo), que corre completo en el teléfono sin depender de conexión.

El competidor real no es solo la libreta o el Excel — es la percepción de que "digitalizar mi negocio" es riesgoso, caro, o requiere infraestructura que Cuba no tiene. Ningún competidor de papel ofrece trazabilidad por turno ni multiusuario; ninguna app típica de nube sobrevive los apagones ni la señal inestable de Etecsa.

La prueba que debe dar la primera pantalla no es una lista de funciones: es que todo el negocio —incluyendo al equipo— puede estar corriendo en esto de un día para otro, sin arriesgar nada.

## Operating Context

Apagones frecuentes; datos móviles caros e inestables (Etecsa); economía de efectivo con pagos también por transferencia bancaria y QR; sin acceso confiable a Play Store (instalación por APK/MSIX directo); distribución de archivos vía WhatsApp, Telegram y Zapya como práctica normal, no una alternativa marginal; negocios físicos pequeños (bodegón, cafetería, tienda, taller, ferretería) con personal que trabaja por turnos y entrega cuentas al cerrar.

## Capabilities and Constraints

**Confirmadas (del copy y código actuales, sin objeción del usuario):**
- Inventario: productos con foto, categoría y precio; alertas de stock bajo; búsqueda; exportación; historial de movimientos.
- Ventas/cobro: efectivo, transferencia o mixto con cálculo de cambio; hasta 5 QR de cobro propios, compartibles con el equipo.
- Turnos: cada dependiente abre/cierra su propio turno y rinde cuentas.
- Cuadre de caja diario.
- Ganancias: resta costo de producto y pagos al equipo; compara hoy/semana/mes contra el período anterior; muestra productos más vendidos.
- Multiusuario por rol (dueño/administrador + dependientes) sobre el mismo sistema, no apps separadas.
- 100% funcional sin internet; los datos viven en el dispositivo.
- Distribución fuera de tiendas de apps: instaladores directos (.apk, .msix) más WhatsApp/Telegram/Zapya.
- Plataformas del producto: Android 8+ y Windows 10/11. Sin iOS.
- Soporte por WhatsApp: respuesta en menos de 1 hora en horario de trabajo (confirmado por el usuario, 2026-09-10).

**No confirmado — no inventar ni describir en detalle:**
- El mecanismo técnico de cómo se sincronizan (si acaso) los datos entre el teléfono del dueño y los de sus dependientes. Usar el lenguaje ya validado ("tu app" / "la de tu equipo") sin explicar el mecanismo interno.

**Nota de alcance:** el producto (la app) es nativo Android/Windows. Esta superficie que se está trabajando —la landing— es web (Astro, sitio estático).

## Brand Commitments

Nombre del producto: **MiPyUtil** (fijo).

El copy existente tiene un tono directo y cercano, pero eso no ha sido confirmado explícitamente por el usuario — es evidencia de que el tono existe hoy, no un compromiso a preservarlo. Tratar como punto de partida a validar, no como restricción.

Ícono y paleta violeta actuales: **NO son compromisos de marca.** El usuario confirmó explícitamente (2026-09-10) que están abiertos a rediseñarse por completo junto con el resto del sistema visual.

## Evidence on Hand

**Real, debe preservarse tal cual:**
- Precios: plan Básico 1.500 CUP/mes (1.200 primer mes), Negocio 2.000 CUP/mes (1.800 primer mes, recomendado), Pro 2.500 CUP/mes (2.000 primer mes); anual $15/$20/$30 USD respectivamente.
- Límites por plan: productos 75/150/300, dependientes 3/5/8, administradores 2/3/4.
- 14 días de prueba gratis en cualquier plan.
- Contacto: WhatsApp +53 5377 0707 (wa.me/5353770707), Telegram @MipyUtil (t.me/MipyUtil).
- Descargas: APK recomendada (~30 MB, Android 8+), APK universal (~74 MB, 32/64 bits), instalador Windows MSIX (~30 MB), todas alojadas en GitHub Releases del proyecto.

**No existe — no fabricar:**
- Capturas fotográficas reales de la app corriendo. Lo que hoy ocupa ese lugar en el hero y en las secciones de features son maquetas de baja fidelidad tipo "skeleton" (barras grises genéricas simulando una interfaz) — visualmente es la gramática de "todavía cargando", no una prueba del producto funcionando. Libre de rediseñarse con maquetas de mayor fidelidad que sí demuestren las pantallas reales (Resumen, Inventario, Ventas/confirmar pago, Cuadres, Mi turno, Ganancias), etiquetadas como representación del producto si hiciera falta.
- Testimonios de clientes, casos de estudio, prensa o cifras de uso/adopción. No inventar ninguno.

## Product Principles

1. **Funciona sin internet, siempre.** Todos los datos viven en el teléfono; ninguna pieza de copy o de diseño debe implicar dependencia de nube o conectividad constante.
2. **Un solo sistema, todos los roles.** El dueño y cada dependiente usan la misma herramienta con permisos distintos — no son productos ni apps separadas.
3. **Cada turno es responsabilidad de alguien.** La trazabilidad (quién vendió, quién cuadró, quién abrió/cerró turno) es el reemplazo directo de la libreta/Excel, no una función secundaria.
4. **Es la herramienta completa del negocio, no una app de nicho.** Inventario + ventas + turnos + ganancias + cuadre en un solo lugar, para quienes hoy improvisan con varias herramientas sueltas o ninguna.
5. **El riesgo percibido de "digitalizarse" es el verdadero competidor.** No solo hay que demostrar funciones; hay que demostrar que adoptar esto es rápido y seguro, para el dueño y para su equipo.

## Accessibility & Inclusion

El proyecto ya implementa como estándar: contraste AA, navegación por teclado, foco visible, respeto a `prefers-reduced-motion`, áreas táctiles mínimas de 44px, `lang="es"`. El rediseño debe mantener este piso como mínimo, no como aspiración.
