# 02 · MiPyUtil — Funciones y pantallas

> Catálogo de las pantallas de la app extraído del código (`lib/features/`). Es la fuente para el copy de features y para decidir qué screenshots mostrar. Rutas entre paréntesis para verificar.

---

## Roles y navegación

La app arranca con un **login** (autenticación simulada localmente con selector de rol) y entra a un **shell por rol** (`role_shell.dart`):

- **Admin** → pantalla base `Resumen`.
- **Dependiente** → pantalla base `Mi turno`.

Hay **onboarding** interactivo de 6 páginas con demo real de cada función (`features/onboarding/`).

---

## Pantallas por feature

### 1. Resumen (dashboard) — `features/resumen/resumen_screen.dart`
Vista del **admin**. Muestra:
- **Stats hero** (`_HeroStats`) con métricas del período: ventas, ingresos, stock bajo, productos más vendidos.
- Tarjeta **Stock bajo / Stock OK** (`_TopProductosCard`, etc.) y gráficos (`LucideIcons.chartLine`).
- Acceso directo a Inventario.

**Claim de marketing:** "El dueño lo ve todo en una pantalla: cuánto se vendió, qué se está agotando y qué producto manda."

### 2. Inventario — `features/inventario/inventario_screen.dart`
- Lista de productos con **búsqueda** (`Buscar producto...`), **ordenar y filtrar** (categoría, etc.).
- **Exportar inventario** a archivo.
- **Producto detalle** (`producto_detalle_screen.dart`): secciones PRODUCTO e INVENTARIO, stock, categoría.
- **Crear/Editar producto** (`producto_form_screen.dart`): categorías por defecto `Cascos, Repuestos, Accesorios, Lubricantes`, ajuste de stock con botones rápidos.
- **Categorías** (`categorias_screen.dart`): CRUD.

**Claim:** "Tu mercancía bajo control: fotos, categorías, búsqueda y alertas de stock bajo. Adiós al cuaderno."

### 3. Ventas / POS — `features/ventas/nueva_venta_screen.dart`
- Pantalla **Nueva venta**: búsqueda de producto, carrito (`Ver carrito` / `Carrito vacío`), ordenar y filtrar.
- **Confirmar pago** (`confirmar_pago_screen.dart`): tres modos de pago — **Efectivo**, **Transferencia**, **Mixto** — con campos de montos, cálculo de **cambio** (`_cambio = _efectivoRecibido - _montoEfectivo`) y validación.
- **Detalle de venta** (`venta_detalle_screen.dart`).

**Claim:** "Vende rápido: busca, agrega al carrito y cobra en efectivo, por transferencia o mixto, con el cambio calculado."

### 4. Turno (dependiente) — `features/turno/mi_turno_screen.dart`
- **Iniciar turno** / **Cerrar turno** (tooltip `Cerrar`, `Iniciar nuevo turno`).
- Resumen del turno y envío del **cuadre** (`cuadre_resumen_screen.dart`): pantalla **Resumen del turno**, confirmación `¿Enviar cuadre?`.

**Claim:** "El dependiente llega, abre su turno, vende y cierra rindiendo cuentas. Tú decides si el cuadre cuadra."

### 5. Cuadres (admin) — `features/cuadres/cuadres_screen.dart`
- Lista de cuadres con **filtro por fecha**.
- **Detalle del cuadre** (`cuadre_detalle_screen.dart`): acciones **Rechazar** / aprobar, diálogo `¿Confirmar cuadre?` y `Rechazar cuadre`.
- **Historial** (`cuadres_historial_screen.dart`): `Mis Cuadres` (vista del dependiente).

**Claim:** "Cada cuadre se aprueba o se rechaza con un comentario. Si se rechaza, el stock se revierte automáticamente. Control real de la caja."

### 6. Pagos QR — `features/qr_pagos/`
- **Gestionar QRs** (`gestionar_qrs_screen.dart`): pantalla **Mis QRs de pago**, QR compartidos, límite de **5 QR propios**, **Recortar QR** al importar desde la galería, eliminar QR.
- **Modal de cobro QR** (`qr_display_modal.dart`): pantalla completa **Escanear para pagar** con monto visible — pensado para transferencias bancarias cubanas (cuenta BPA).

**Claim:** "Cobra por transferencia mostrando tu QR: el cliente escanea y paga desde su app bancaria, sin tarjeta ni datáfono."

### 7. Equipo — `features/configuracion/equipo_screen.dart`
- Gestión de miembros (crear/editar/eliminar dependiente, `Editar miembro` / `Crear miembro`).

**Claim:** "Agrega a tus dependientes y dale a cada uno su acceso: el dueño administra, el empleado vende."

### 8. Configuración — `features/configuracion/configuracion_screen.dart`
- **Ajustes**: Temas, Vibración en botones, Accesibilidad, **Mis QRs de pago**, **Historial de cuadres**, Equipo, Categorías, Editar perfil.
- **Temas** (`temas_screen.dart`): **Personaliza tu tema** — 6 esquemas (`AppColorScheme.values`), modo claro/oscuro, animaciones de entrada en cascada.
- **Accesibilidad** (`accesibilidad_screen.dart`): tamaño de texto, texto en negrita, reducir animaciones, alto contraste.

**Claim:** "Personaliza la app a la cara de tu negocio: 6 temas, modo oscuro y ajustes de accesibilidad."

---

## Onboarding — `features/onboarding/presentation/pages/`
Páginas interactivas con las promesas centrales:

- **`welcome_page.dart`** — lista textual:
  - "✓ Funciona offline"
  - "✓ Control de caja diario"
  - "✓ Sin papel ni Excel"
- **`shifts_demo_page.dart`** — "Controla el efectivo de cada dependiente".
- Inventario interactivo, ventas interactivas, selector de tema, lista de listo.

---

## Flujo del día (resumen para la landing)

```
Dependiente:
  Abre turno → Vende (efectivo/transferencia/mixto) → Cierra turno → Envía cuadre
Admin:
  Revisa cuadres pendientes → Aprueba  ·  o  Rechaza (con comentario, se revierte stock)
```

---

## Modelos de datos (contexto)
`producto`, `venta`, `cuadre`, `cuadre_item`, `pago`, `qr_pago`, `usuario`, `movimiento`, `categoria` (`lib/shared/models/`).

## Stack
Flutter 3.12 · Riverpod · go_router · sqflite (SQLite local) · Supabase (Auth/Postgres/Storage, desconectado por defecto) · connectivity_plus · Material 3 · Lucide icons · tipografía Inter · moneda con `$` genérico, fechas `dd/MM/yyyy`, horas `hh:mm a`.
