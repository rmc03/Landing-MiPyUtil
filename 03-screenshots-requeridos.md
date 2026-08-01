# 03 · MiPyUtil — Screenshots requeridos

> Lista de capturas "sí o sí" que debe mostrar la landing, con qué pantalla capturar, qué debe verse y dónde se usa. El usuario las toma manualmente desde el emulador/teléfono y las coloca en `landing/screens/` con los nombres indicados (la página ya referencia esos nombres y muestra un placeholder mientras no existan).

**Formato recomendado:** PNG, ratio teléfono moderno (9:19.5, ej. 1080×2340 px o 1170×2532). La página los muestra dentro de mockups de teléfono, así que la captura debe ser **solo la pantalla de la app**, sin bordes ni recortes.

---

## Las 8 indispensables

### 1. `01-resumen.png` — Panel Resumen (admin) ⭐ hero
- **Pantalla:** `Resumen` (login como **Admin**).
- **Qué debe verse:** las tarjetas de estadísticas (ventas, ingresos, stock bajo, top productos) y los gráficos.
- **Dónde:** hero de la landing (mockup de teléfono principal) y apertura de la sección "Resumen".

### 2. `02-nueva-venta.png` — POS / Nueva venta (dependiente)
- **Pantalla:** `Nueva venta` con productos en el carrito (login como **Dependiente**).
- **Qué debe verse:** la búsqueda, la lista de productos y el botón de carrito con total.
- **Dónde:** sección "Vende rápido" / cómo funciona.

### 3. `03-confirmar-pago.png` — Confirmar pago con QR de transferencia
- **Pantalla:** `Confirmar pago` en modo **Transferencia** (o Mixto) con monto definido.
- **Qué debe verse:** los tres modos (Efectivo / Transferencia / Mixto), el monto y el botón de QR de pago.
- **Dónde:** sección "Cobra por transferencia" (diferenciador cubano).

### 4. `04-inventario.png` — Inventario
- **Pantalla:** `Inventario` (admin).
- **Qué debe verse:** lista de productos con fotos, búsqueda, alerta de **stock bajo** visible (ícono ⚠️).
- **Dónde:** sección "Tu mercancía bajo control".

### 5. `05-cuadres.png` — Cuadres (aprobación del admin)
- **Pantalla:** `Cuadres` (admin) con al menos un cuadre **pendiente** visible.
- **Qué debe verse:** la tarjeta del cuadre (dependiente, fecha, total) y los botones **Aprobar/Rechazar** en el detalle (puede ser la pantalla de detalle del cuadre).
- **Dónde:** sección "El cuadre" — el argumento de control de caja.

### 6. `06-mi-turno.png` — Mi turno (dependiente)
- **Pantalla:** `Mi turno` con el turno **abierto** (hora de inicio, botón cerrar) o el botón `Iniciar turno`.
- **Qué debe verse:** el estado del turno y el acceso al cierre/cuadre.
- **Dónde:** sección "Cómo funciona" (paso 1 del flujo).

### 7. `07-temas.png` — Selector de 6 temas
- **Pantalla:** `Personaliza tu tema` (Ajustes → Temas).
- **Qué debe verse:** las 6 tarjetas de esquemas de color (Corporativo, Prosperidad, Energía, Confianza, Innovación, Impacto) con modo claro/oscuro visible.
- **Dónde:** sección "A la cara de tu negocio".

### 8. `08-dark-mode.png` — Una pantalla en modo oscuro (opcional)
- **Pantalla:** cualquier pantalla (sugerido `Resumen`) con el tema en **modo oscuro**.
- **Qué debe verse:** la base oscura del tema elegido con el color primario brillando.
- **Dónde:** junto a la sección de temas o como cierre visual.

---

## Opcionales (si sobran capturas)

| Archivo | Pantalla | Uso |
|---|---|---|
| `09-qr-modal.png` | Modal **Escanear para pagar** (`qr_display_modal.dart`) | Refuerza el cobro por QR |
| `10-login.png` | Login con selector de rol | Contexto de roles |
| `11-movimientos.png` | Historial de movimientos | Prueba de trazabilidad |
| `12-equipo.png` | Pantalla Equipo | Gestión de dependientes |
| `13-onboarding.png` | Alguna página del onboarding | Muestra "Funciona offline / Sin papel ni Excel" |

---

## Cómo tomarlas (guía rápida)

1. Ejecutar la app en modo demo: `flutter run` (emulador Android o dispositivo con depuración).
2. Entrar como **Admin** (`admin@inventario.local`) para capturas de Resumen, Inventario, Cuadres, Temas.
3. Entrar como **Dependiente** para Nueva venta, Confirmar pago, Mi turno.
4. Asegurar que los datos de demo sean legibles y las alertas de stock bajo estén visibles.
5. Guardar como PNG con los nombres exactos de arriba en `landing/screens/`.

> Mientras no existan los archivos, la landing muestra un placeholder con el nombre esperado para que sepas exactamente qué falta.
