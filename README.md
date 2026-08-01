# MiPyUtil — Landing Page

Landing page para MiPyUtil, aplicación móvil de gestión para MiPymes y TCPs en Cuba.

## Estructura

- `src/pages/index.astro` — Página principal con todas las secciones
- `src/layouts/Layout.astro` — Layout base con nav y footer
- `src/components/PhoneMockup.astro` — Componente de mockup de teléfono
- `public/screens/` — Screenshots de la app (actualmente placeholders)

## Screenshots requeridos

Coloca las capturas reales de la app en `public/screens/` con estos nombres:

1. `01-resumen.png` — Panel Resumen (admin) ⭐ hero
2. `02-nueva-venta.png` — POS / Nueva venta
3. `03-confirmar-pago.png` — Confirmar pago con QR
4. `04-inventario.png` — Lista de inventario
5. `05-cuadres.png` — Cuadres pendientes
6. `06-mi-turno.png` — Mi turno (dependiente)
7. `07-temas.png` — Selector de 6 temas
8. `08-dark-mode.png` — Pantalla en modo oscuro (opcional)

Ver `03-screenshots-requeridos.md` para detalles de qué debe verse en cada captura.

## CTAs pendientes

Los enlaces de descarga y contacto actualmente apuntan a `#`. Reemplaza con destinos reales:

- Descargar APK → URL de la APK
- WhatsApp → `https://wa.me/...`
- Telegram → `https://t.me/...`
- Canal de Telegram → `https://t.me/...`

Busca `href="#"` en `src/pages/index.astro` y reemplaza.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

## Diseño

El diseño sigue el sistema documentado en `DESIGN.md`:

- **Tema fijo:** Prosperidad (esmeralda #059669)
- **Tipografía:** Inter (Google Fonts)
- **Estructura:** "La landing es la app" — panel de control
- **Bandas oscuras:** Modo noche en bosque (#0F1A14)
- **Mobile-first:** Breakpoints en 640/768/1024px

## Accesibilidad

- Contraste AA verificado
- `prefers-reduced-motion` respetado
- `lang="es"` declarado
- Nav y FAQ operables por teclado
- Focus visible en todos los interactivos
