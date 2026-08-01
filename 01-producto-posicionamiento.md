# 01 · MiPyUtil — Producto y posicionamiento

> Documento fuente para el copy de la landing page. Describe **qué es** el producto, **qué problema resuelve**, **para quién** y **con qué tono** se comunica. Ninguna afirmación aquí inventa precios, clientes ni capacidades que el código no respalde.

---

## 1. Qué es MiPyUtil

MiPyUtil es una **aplicación móvil de gestión para pequeños negocios** (MiPymes y TCPs): inventario, punto de venta (POS), turnos de empleados y cuadre de caja diario, todo en un solo lugar.

- **Nombre:** MiPyUtil
- **Eslogan (app):** *"Tu mipyme, organizada"*
- **Descripción corta (app):** *"Inventario, ventas y turnos. Todo sin internet."*
- **Origen del nombre:** nació pensada para una mipyme de motos (de ahí "Mypime Motos"), pero el producto es **genérico**: sirve para cualquier negocio de retail o servicios.

## 2. El problema que resuelve

El día a día de un pequeño negocio en Cuba:

- **Internet inestable (Etecsa) y apagones** que dejan fuera de línea los sistemas web y paralizan la tienda.
- **Control de caja en papel**: anotaciones sueltas, cuadres a mano, faltantes que nadie puede explicar.
- **Excel o libretas**: inventario desactualizado, sin saber qué se agotó ni qué se vendió hoy.
- **Poca supervisión del dueño**: no sabe qué vendió cada dependiente hasta que "hace cuentas".

### La solución

MiPyUtil convierte el teléfono del negocio en un **sistema completo que funciona sin internet**:

| Problema | Solución de MiPyUtil |
|---|---|
| Apagones / mala señal | Diseño **offline-first**: la app trabaja con base de datos local (SQLite) y no se detiene sin conexión |
| Cuadre de caja a mano | El dependiente cierra su **turno** y envía un **cuadre**; el dueño lo **aprueba o rechaza** desde su teléfono |
| Inventario en papel/Excel | **Productos, categorías, stock y alertas de stock bajo** con fotos y búsqueda |
| Faltantes sin explicar | Cada venta **descuenta stock** y deja un **movimiento** registrado; al rechazar un cuadre el stock se revierte |
| Sin visibilidad para el dueño | Panel **Resumen** con ventas y productos más vendidos; historial de movimientos y de cuadres |

## 3. Para quién es

MiPyUtil está pensada para el **sector privado cubano** (MiPymes, TCPs, Proyectos de Desarrollo Local) y negocios similares con conexión inestable:

1. **Bodegones y minimarkets** — control del almacén y del salón de ventas.
2. **Cafeterías y bares** — control de neveras y conteo diario estricto.
3. **Tiendas de ropa o calzado** — fotos de producto y categorías.
4. **Talleres de celulares / electrónica** — control de piezas y accesorios.
5. **Ferreterías** — alto volumen de artículos pequeños con entradas y salidas rápidas.

### Dos roles, un solo negocio

- **Administrador (el dueño):** control total. Gestiona productos, categorías, dependientes, aprueba/rechaza cuadres, revisa movimientos e historial.
- **Dependiente (el empleado):** inicia su turno, registra ventas, consulta el inventario en solo lectura y cierra con su cuadre.

## 4. Puntos clave de venta

Estos son los argumentos que la landing debe reforzar (todos verificados en el código):

1. **Funciona sin internet.** Base local SQLite; la app sigue operando durante apagones y picos de señal. *(La sincronización a Supabase está preparada en la arquitectura.)*
2. **Control de caja diario (el cuadre).** El dependiente rinde cuentas al cierre de turno; el dueño tiene la última palabra. Esto reduce los faltantes.
3. **Sin papel ni Excel.** Productos, ventas y movimientos quedan registrados automáticamente.
4. **Distribución directa por APK.** Se instala sin pasar por tiendas de aplicaciones: se comparte por WhatsApp, Telegram o Zapya.
5. **Pago en efectivo y transferencia.** Ventas en efectivo, por transferencia (con **QR de pago**) o mixto, con cálculo de cambio.
6. **Personalizable.** 6 temas de color con modo claro y oscuro.

## 5. Tono de comunicación

- **Directo y cercano.** Se le habla a un dueño de negocio, no a un departamento de IT.
- **Español de Cuba/Latinoamérica.** Términos familiares: *cuadre, dependiente, turno, caja, mercancía*.
- **Tranquilidad + control.** La promesa central es: *"tu negocio no se detiene y tú sabes qué pasó con tu caja".*
- **Sin hype.** Nada de "revolucionario" ni "inteligencia artificial". Hechos: funciona sin internet, controla la caja, no usa papel.

## 6. Afirmaciones prohibidas (no inventar)

- Precios o planes de suscripción.
- Nombres de clientes reales o testimonios.
- Números de rendimiento ("aumenta tus ventas un X%").
- Afirmar que la sincronización en la nube ya está operativa para el usuario final (es arquitectura preparada; ver §4).
- Nombres de marcas que no aparezcan en el código (la demo real usa una bodega general; los ejemplos de motos vienen del README/posicionamiento original).
