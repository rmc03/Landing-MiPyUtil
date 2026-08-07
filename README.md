<div align="center">

# 📱 MiPyUtil Landing Page

**Landing page moderna y accesible para MiPyUtil**  
*Aplicación móvil de gestión inteligente para MiPymes y TCPs en Cuba*

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[✨ Ver Demo](#) • [📥 Descargar APK](#) • [💬 Soporte](#contacto)

</div>

---

## 🌟 Características

- ✅ **100% Responsive** — Mobile-first design optimizado para todos los dispositivos
- 🎨 **Tema Prosperidad** — Paleta esmeralda profesional (#059669)
- ⚡ **Ultra rápido** — Construido con Astro para máximo rendimiento
- ♿ **Accesible** — Cumple estándares WCAG AA
- 🌙 **Modo oscuro** — Bandas temáticas con modo noche
- 📱 **Mockups interactivos** — Visualización elegante de la app

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mipyutil-landing.git

# Navegar al directorio
cd mipyutil-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321` 🎉

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run check` | Verifica tipos y sintaxis de Astro |

## 🏗️ Estructura del Proyecto

```
mipyutil-landing/
├── public/
│   ├── screens/          # Screenshots de la app
│   └── Icon.png          # Favicon/logo
├── src/
│   ├── components/
│   │   └── PhoneMockup.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro   # Página principal
├── astro.config.mjs
└── package.json
```

## 🎨 Sistema de Diseño

### Colores Principales

```css
/* Tema Prosperidad */
--emerald-600: #059669;   /* Principal */
--emerald-700: #047857;   /* Hover */
--emerald-50:  #ecfdf5;   /* Background claro */

/* Modo oscuro */
--forest-950:  #0F1A14;   /* Background oscuro */
```

### Tipografía

- **Familia:** Inter (Google Fonts)
- **Pesos:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Breakpoints

| Breakpoint | Tamaño |
|------------|--------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |

## 📸 Configuración de Screenshots

Coloca las capturas de la app en `public/screens/` con estos nombres:

| Archivo | Descripción | Uso |
|---------|-------------|-----|
| `01-resumen.png` | Panel Resumen (admin) | ⭐ Hero principal |
| `02-nueva-venta.png` | POS / Nueva venta | Features |
| `03-confirmar-pago.png` | Confirmar pago con QR | Features |
| `04-inventario.png` | Lista de inventario | Features |
| `05-cuadres.png` | Cuadres pendientes | Features |
| `06-mi-turno.png` | Mi turno (dependiente) | Features |
| `07-temas.png` | Selector de 6 temas | Gallery |
| `08-dark-mode.png` | Modo oscuro (opcional) | Gallery |

## 🔗 Configuración de Enlaces

Actualiza los siguientes enlaces en `src/pages/index.astro`:

```javascript
// Buscar y reemplazar href="#" con:
- APK Download → URL de tu APK
- WhatsApp → https://wa.me/TU_NUMERO
- Telegram → https://t.me/TU_USUARIO
- Canal Telegram → https://t.me/MipyUtil
```

## ♿ Accesibilidad

Esta landing cumple con:

- ✅ Contraste WCAG AA verificado
- ✅ Navegación completa por teclado
- ✅ Focus visible en elementos interactivos
- ✅ `prefers-reduced-motion` respetado
- ✅ Semántica HTML5 correcta
- ✅ `lang="es"` declarado

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com) - Utilidades CSS (inline)
- [Google Fonts](https://fonts.google.com) - Tipografía Inter

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 💬 Contacto

- **WhatsApp:** [Enviar mensaje](#)
- **Telegram:** [Chat directo](#)
- **Canal oficial:** [@MipyUtil](https://t.me/MipyUtil)

---

<div align="center">

Hecho con ❤️ para las MiPymes y TCPs de Cuba

[⬆ Volver arriba](#-mipyutil-landing-page)

</div>
