# Modularización de la Landing Page

## 📁 Estructura del Proyecto

La landing page ha sido completamente modularizada para mejorar la mantenibilidad y reutilización del código.

### Componentes UI (`src/components/ui/`)

Componentes reutilizables de interfaz de usuario:

- **Button.astro** - Botón con variantes primary/secondary
- **CheckList.astro** - Lista con checkmarks para características
- **OfflineBadge.astro** - Badge animado que indica "Funciona sin internet"

### Componentes de Secciones (`src/components/sections/`)

Cada sección principal de la landing:

- **Hero.astro** - Sección principal con headline, CTA y mockup
- **Problema.astro** - Banda oscura que presenta los problemas (apagones, Excel, faltantes)
- **ComoFunciona.astro** - Timeline animada del flujo de trabajo diario
- **FeatureSection.astro** - Componente genérico para secciones de características (Ventas, Inventario, Cuadre, Temas)
- **ParaQuien.astro** - Grid de tipos de negocios
- **Descarga.astro** - Banda oscura con estadísticas de descarga y CTAs
- **FAQ.astro** - Sección de preguntas frecuentes con acordeones

### Estilos Globales (`src/styles/`)

- **global.css** - Tokens CSS, reset, tipografía y layout base

### Página Principal

- **src/pages/index.astro** - Orquesta todos los componentes
- **src/pages/index.old.astro** - Backup del archivo monolítico original

## 🎯 Beneficios

1. **Mantenibilidad**: Cada componente es independiente y fácil de modificar
2. **Reutilización**: Los componentes UI se pueden usar en múltiples lugares
3. **Testing**: Más fácil probar componentes individuales
4. **Colaboración**: Varios desarrolladores pueden trabajar en diferentes secciones
5. **Performance**: Los componentes se cargan de forma más eficiente
6. **Escalabilidad**: Fácil agregar nuevas secciones o variantes

## 🔧 Uso

### Agregar una nueva sección

```astro
// src/components/sections/MiNuevaSeccion.astro
---
// Props y lógica
---

<section class="mi-nueva-seccion">
  <div class="container">
    <!-- Contenido -->
  </div>
</section>

<style>
  /* Estilos de la sección */
</style>
```

Luego importarla en `index.astro`:

```astro
import MiNuevaSeccion from '../components/sections/MiNuevaSeccion.astro';

<Layout>
  <Hero />
  <MiNuevaSeccion />
  <!-- ... -->
</Layout>
```

### Crear un nuevo componente UI

```astro
// src/components/ui/MiComponente.astro
---
interface Props {
  variant?: 'default' | 'special';
  // ...
}

const { variant = 'default' } = Astro.props;
---

<div class={`mi-componente ${variant}`}>
  <slot />
</div>

<style>
  /* Estilos del componente */
</style>
```

## 📝 Convenciones

- **Nombres de archivos**: PascalCase para componentes
- **Props**: Usar TypeScript interfaces para type safety
- **Estilos**: Scoped por defecto en cada componente
- **Clases CSS**: kebab-case para clases
- **Variables CSS**: Usar tokens de `global.css`

## 🌐 Design Tokens (global.css)

Los tokens CSS están centralizados:

- Colores: `--primary`, `--ink`, `--forest-bg`, etc.
- Espaciado: `--space-xs` a `--space-section-lg`
- Radios: `--radius-sm` a `--radius-phone`
- Tipografía: `--font-family`

Usar siempre estos tokens en lugar de valores hardcodeados.
