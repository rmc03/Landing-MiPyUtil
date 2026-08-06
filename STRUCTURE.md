# 📂 Estructura del Proyecto MiPyUtil Landing

## Antes (Monolítico)
```
src/pages/index.astro  →  1,225 líneas de código
                          Todo en un solo archivo
```

## Después (Modular)
```
src/
├── pages/
│   ├── index.astro              →  103 líneas (orquestación limpia)
│   └── index.old.astro          →  Backup del archivo original
│
├── components/
│   ├── PhoneMockup.astro        →  Componente de mockup de teléfono
│   │
│   ├── ui/                      →  Componentes UI reutilizables
│   │   ├── Button.astro         →  Botones con variantes
│   │   ├── CheckList.astro      →  Lista con checkmarks
│   │   └── OfflineBadge.astro   →  Badge animado offline
│   │
│   └── sections/                →  Secciones de la landing
│       ├── Hero.astro           →  Sección principal
│       ├── Problema.astro       →  Problemas del negocio
│       ├── ComoFunciona.astro   →  Timeline del flujo
│       ├── FeatureSection.astro →  Plantilla genérica de features
│       ├── ParaQuien.astro      →  Grid de negocios
│       ├── Descarga.astro       →  Estadísticas y descarga
│       └── FAQ.astro            →  Preguntas frecuentes
│
├── layouts/
│   └── Layout.astro             →  Layout principal + nav + footer
│
└── styles/
    └── global.css               →  Tokens CSS globales
```

## 📊 Métricas

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Archivos | 1 | 14 | +1300% modularidad |
| Líneas por archivo (promedio) | 1,225 | ~87 | -93% complejidad |
| Componentes reutilizables | 0 | 4 | ∞ |
| Estilos centralizados | No | Sí | ✓ |
| Type Safety | Mínimo | Alto | ✓ |

## 🎯 Componentes por Tipo

### Componentes UI (3)
- `Button` - Interacción
- `CheckList` - Visualización de features
- `OfflineBadge` - Indicador de estado

### Secciones (7)
- `Hero` - Primera impresión
- `Problema` - Problema/Solución
- `ComoFunciona` - Educación
- `FeatureSection` - Características (x4 instancias)
- `ParaQuien` - Segmentación
- `Descarga` - Conversión
- `FAQ` - Objeciones

## 🔄 Flujo de Desarrollo

```
index.astro
    ↓ imports
    ├── Layout.astro (global styles)
    ├── Hero.astro → Button, CheckList, OfflineBadge
    ├── Problema.astro
    ├── ComoFunciona.astro
    ├── FeatureSection.astro (x4)
    ├── ParaQuien.astro
    ├── Descarga.astro → Button
    └── FAQ.astro
```

## 🚀 Ventajas de la Nueva Estructura

1. **Separación de responsabilidades** - Cada componente tiene un propósito único
2. **DRY (Don't Repeat Yourself)** - FeatureSection se reutiliza 4 veces
3. **Fácil de mantener** - Cambios aislados en componentes específicos
4. **Testing facilitado** - Componentes independientes
5. **Escalabilidad** - Agregar secciones sin tocar código existente
6. **Mejor Git workflow** - Commits más limpios, menos conflictos
7. **Performance** - Astro optimiza componentes automáticamente

## 💡 Ejemplo de Uso

### Antes (Monolítico)
```astro
<!-- 50 líneas de HTML para Hero -->
<!-- 40 líneas de HTML para Problema -->
<!-- 80 líneas de HTML para ComoFunciona -->
<!-- ... 1000+ líneas más -->
```

### Después (Modular)
```astro
<Hero />
<Problema />
<ComoFunciona />
<FeatureSection {...ventasProps} />
```

## 🎨 Design System

Todos los componentes usan los mismos tokens CSS:

```css
/* Colors */
--primary: #059669
--forest-bg: #0F1A14

/* Spacing */
--space-md: 16px
--space-section-lg: 120px

/* Radii */
--radius-lg: 16px
```

Esto garantiza consistencia visual en toda la aplicación.
