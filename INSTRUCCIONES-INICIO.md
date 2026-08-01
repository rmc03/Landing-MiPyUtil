# Instrucciones para iniciar el proyecto

## 1. Instalar dependencias

```bash
npm install
```

⚠️ **Nota:** La instalación puede tardar unos minutos la primera vez, ya que Astro y sus dependencias son ~200 paquetes.

## 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto abrirá el servidor en `http://localhost:4321`

## 3. Ver la landing en el navegador

Abre `http://localhost:4321` en tu navegador.

## 4. Reemplazar placeholders

### Screenshots
Los screenshots actualmente son placeholders SVG. Reemplázalos con capturas reales de la app:

1. Toma las capturas desde el emulador/teléfono según `03-screenshots-requeridos.md`
2. Guárdalas como PNG en `public/screens/` con los nombres exactos:
   - `01-resumen.png`
   - `02-nueva-venta.png`
   - `03-confirmar-pago.png`
   - `04-inventario.png`
   - `05-cuadres.png`
   - `06-mi-turno.png`
   - `07-temas.png`

### CTAs (enlaces)
Abre `src/pages/index.astro` y busca `href="#"` para reemplazar con URLs reales:
- Descargar APK
- WhatsApp (`https://wa.me/TU_NUMERO`)
- Telegram (`https://t.me/TU_USUARIO`)
- Canal de Telegram (`https://t.me/TU_CANAL`)

## 5. Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en `dist/` listos para desplegar.

## Despliegue

El proyecto es un sitio estático que puedes desplegar en:
- **Netlify:** Arrastra la carpeta `dist/` o conecta el repo
- **Vercel:** Conecta el repo, detecta Astro automáticamente
- **GitHub Pages:** Configura GitHub Actions para build automático
- **Servidor propio:** Copia el contenido de `dist/` a tu servidor web

## Problemas comunes

### `'astro' is not recognized`
Ejecuta `npm install` primero.

### Screenshots no se ven
- Verifica que los archivos estén en `public/screens/`
- Los nombres deben ser exactos (ej: `01-resumen.png`, no `01-Resumen.png`)
- Formato recomendado: PNG, ratio 9:19.5 (1080×2340px o similar)

### El nav hamburguesa no abre
El JavaScript está incluido en `src/layouts/Layout.astro`. Verifica que el servidor esté ejecutándose correctamente.

## Próximos pasos recomendados

1. ✅ Instalar dependencias
2. ✅ Verificar que el servidor dev funciona
3. 🔄 Reemplazar screenshots con capturas reales
4. 🔄 Actualizar CTAs con URLs reales
5. 🔄 Agregar meta tags Open Graph y favicon
6. 🔄 Probar responsive en móvil real
7. 🔄 Verificar accesibilidad (navegación por teclado, contraste)
8. 🔄 Build de producción
9. 🔄 Desplegar

## Documentación de referencia

- **README.md** — Información general del proyecto
- **IMPLEMENTACION.md** — Detalles técnicos de la implementación
- **DESIGN.md** — Sistema de diseño completo
- **04-copy-es.md** — Copy palabra por palabra (ya implementado)
- **03-screenshots-requeridos.md** — Qué debe verse en cada screenshot
