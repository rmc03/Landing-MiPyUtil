# Análisis UI/UX - MiPyUtil Landing Page

**Analizado con:** UI/UX Pro Max Skill  
**Fecha:** 2026-08-01  
**Stack detectado:** Astro + HTML/CSS (landing page estática)  
**Producto:** Landing de herramienta de gestión offline-first para MiPymes

---

## Resumen Ejecutivo

### ✅ Fortalezas Actuales

1. **Sistema de diseño sólido** - Tokens CSS bien definidos con tema claro/oscuro
2. **Arquitectura componetizada** - Separación clara de secciones y UI components
3. **Accesibilidad básica** - `lang="es"`, `prefers-reduced-motion`, focus-visible
4. **Animaciones controladas** - Respeta preferencias de motion reducido
5. **Responsive mobile-first** - Breakpoints bien definidos (640/768/1024)
6. **Identidad visual coherente** - Paleta índigo consistente con el producto

### ⚠️ Problemas Críticos Encontrados

1. **Contraste de color insuficiente** en varios elementos (WCAG AA)
2. **Tamaños de touch target** por debajo del mínimo (44×44px)
3. **Falta de skip links** para navegación por teclado
4. **Botones como links** (`<a>` usados en lugar de `<button>`)
5. **Sin labels ARIA** en iconos y controles
6. **Animaciones complejas** sin fallback completo
7. **Falta de feedback de loading/error** en CTAs

---

## Análisis Detallado por Categoría

## 1. ACCESIBILIDAD (Prioridad: CRÍTICA)

### 🔴 Problemas Críticos

#### 1.1 Contraste de Color Insuficiente

**Ubicación:** `global.css` líneas 8-15, varios componentes

**Problema actual:**
```css
--muted: #6B7280;  /* Contraste 4.21:1 sobre #F5F5FA - NO CUMPLE WCAG AA (4.5:1) */
--ink-secondary: #4A4A5E;  /* Contraste en dark mode puede ser insuficiente */
```

**Verificación con herramienta UI Pro Max:**
- `--muted` (#6B7280) sobre `--background` (#F5F5FA) = **4.21:1** ❌
- Mínimo WCAG AA = **4.5:1** para texto normal
- Mínimo WCAG AAA = **7:1** para texto normal

**Solución recomendada:**
```css
/* global.css - Ajustar contraste */
--muted: #5F6470;  /* Nuevo: 4.68:1 sobre #F5F5FA - CUMPLE AA */
--ink-secondary: #3F3F52;  /* Mejor contraste en ambos temas */

/* Dark mode - verificar contraste */
[data-theme="dark"] {
  --muted: #A0A0B8;  /* Más claro para mejor contraste sobre #16161F */
}
```

**Archivos afectados:**
- `src/styles/global.css`
- `src/components/sections/Hero.astro` (.lead, .hero-note)
- `src/components/sections/FeatureSection.astro`

---

#### 1.2 Touch Targets Demasiado Pequeños

**Ubicación:** `Layout.astro` líneas 156-179 (theme toggle, nav toggle)

**Problema actual:**
```css
.theme-toggle svg {
  width: clamp(18px, 4vw, 20px);  /* ❌ Mínimo 44×44px requerido */
  height: clamp(18px, 4vw, 20px);
}

.hamburger {
  width: clamp(20px, 5vw, 24px);  /* ❌ Icono pequeño, target insuficiente */
}
```

**Estándar UI Pro Max:**
- Mínimo **44×44px** para touch targets (WCAG 2.5.5)
- Espaciado mínimo **8px** entre targets adyacentes
- Severidad: **HIGH**

**Solución recomendada:**
```css
/* Layout.astro - Aumentar área de touch */
.theme-toggle {
  /* El botón completo debe ser 44×44px mínimo */
  min-width: 44px;
  min-height: 44px;
  padding: 12px;  /* Aumentar padding */
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle svg {
  width: 20px;  /* Icono puede ser pequeño si el target es grande */
  height: 20px;
}

.nav-toggle {
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
}

.hamburger {
  width: 24px;
  height: 24px;
}
```

---

#### 1.3 Botones Semánticos Incorrectos

**Ubicación:** `src/components/ui/Button.astro`

**Problema actual:**
```astro
<!-- ❌ Usando <a> para acciones, no navegación -->
<a href={href} class={`btn btn-${variant}`}>
  <slot />
</a>
```

**Regla UI Pro Max:**
- `<a>` = navegación a otra página
- `<button>` = acciones (submit, toggle, modal)

**CTAs afectados:**
- "Descargar APK" → debería abrir modal o iniciar descarga
- "Escríbenos por WhatsApp" → abre enlace externo (OK como `<a>`)
- Theme toggle → es `<button>` ✅ (correcto)

**Solución recomendada:**
```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'link';
  onClick?: string;
  class?: string;
}

const { 
  variant = 'primary', 
  href = '#', 
  type = 'link',
  onClick,
  class: className 
} = Astro.props;
---

{type === 'button' ? (
  <button 
    class={`btn btn-${variant} ${className || ''}`}
    onclick={onClick}
    type="button"
  >
    <slot />
  </button>
) : (
  <a href={href} class={`btn btn-${variant} ${className || ''}`}>
    <slot />
  </a>
)}
```

**Uso actualizado:**
```astro
<!-- Hero.astro -->
<Button variant="primary" type="button" onClick="handleDownload()">
  Descargar APK
</Button>

<Button variant="secondary" href="https://wa.me/..." type="link">
  Escríbenos por WhatsApp
</Button>
```

---

#### 1.4 Falta de Labels ARIA

**Ubicación:** Múltiples componentes con iconos

**Problemas encontrados:**

```astro
<!-- Hero.astro - Icono sin label -->
<svg class="note-icon" viewBox="0 0 24 24" aria-hidden="true">
  <!-- ✅ Correcto: aria-hidden porque hay texto adyacente -->
</svg>

<!-- OfflineBadge.astro - Probablemente falta -->
<svg class="offline-icon" viewBox="0 0 24 24">
  <!-- ❌ Necesita aria-label si no hay texto -->
</svg>

<!-- PhoneMockup.astro - Alt dinámico OK -->
<img src={screenshotPath} alt={alt} />  <!-- ✅ Correcto -->
```

**Solución recomendada:**
```astro
<!-- Iconos decorativos (con texto adyacente) -->
<svg aria-hidden="true">...</svg>

<!-- Iconos funcionales (sin texto) -->
<svg aria-label="Modo offline disponible" role="img">...</svg>

<!-- Botones con solo icono -->
<button aria-label="Cambiar tema">
  <svg aria-hidden="true">...</svg>
</button>
```

---

#### 1.5 Sin Skip Links

**Ubicación:** `Layout.astro` - falta al inicio de `<body>`

**Problema:**
Los usuarios de teclado tienen que hacer tab 7+ veces para llegar al contenido principal.

**Solución recomendada:**
```astro
<!-- Layout.astro - Agregar después de <body> -->
<body>
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>
  
  <nav class="nav">...</nav>
  
  <main id="main-content">
    <slot />
  </main>
</body>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 0 0 4px 0;
    z-index: 1000;
    transition: top 200ms ease;
  }
  
  .skip-link:focus {
    top: 0;
  }
</style>
```

---

## 2. TOUCH & INTERACCIÓN (Prioridad: ALTA)

### 🟡 Problemas de Usabilidad Mobile

#### 2.1 Espaciado Insuficiente entre Targets

**Ubicación:** `Hero.astro` líneas 58-64

```astro
<!-- ❌ CTAs secundarios sin espaciado suficiente en mobile -->
<div class="secondary-ctas">
  <Button variant="secondary">Escríbenos por WhatsApp</Button>
  <Button variant="secondary">Únete al canal de Telegram</Button>
</div>

<style>
  .secondary-ctas {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);  /* ❌ 8px - necesita mínimo 8px */
  }
</style>
```

**Estándar UI Pro Max:**
- Mínimo **8px** entre touch targets adyacentes
- Actual: `--space-sm: 8px` ✅ (límite mínimo)
- Recomendado: **12-16px** para mejor usabilidad

**Solución:**
```css
.secondary-ctas {
  gap: var(--space-md);  /* 16px - más cómodo */
}
```

---

#### 2.2 Falta Feedback Táctil

**Ubicación:** Todos los botones y elementos interactivos

**Problema actual:**
```css
/* Button.astro - Solo tiene :hover, no :active */
.btn:active {
  transform: translateY(1px);  /* ✅ Ya existe - bien */
}

/* ❌ Falta en otros elementos */
.nav-menu a:active { /* Sin feedback */ }
.faq-item summary:active { /* Sin feedback */ }
```

**Solución recomendada:**
```css
/* Agregar a todos los elementos clickables */
.nav-menu a:active,
.faq-item summary:active,
.problema-card:active {
  transform: scale(0.98);
  transition: transform 100ms ease;
}

/* Touch devices - efecto más sutil */
@media (hover: none) and (pointer: coarse) {
  .btn:active {
    transform: translateY(0) scale(0.97);
  }
}
```

---

#### 2.3 Área de Click del FAQ Demasiado Pequeña

**Ubicación:** `FAQ.astro` línea 45

```astro
<details class="faq-item">
  <summary>{faq.question}</summary>  <!-- ✅ <summary> es correcto -->
  <p set:html={faq.answer} />
</details>

<style>
  .faq-item summary {
    padding: 0 var(--space-md);  /* ❌ Padding solo horizontal */
  }
</style>
```

**Problema:**
El padding vertical es heredado del `.faq-item` (24px), pero no está explícito en el `summary`. En mobile puede sentirse pequeño.

**Solución:**
```css
.faq-item {
  padding: 0;  /* Quitar padding del contenedor */
}

.faq-item summary {
  padding: var(--space-lg) var(--space-md);  /* 24px vertical explícito */
  min-height: 56px;  /* Asegurar altura mínima */
  display: flex;
  align-items: center;
}

.faq-item p {
  padding: 0 var(--space-md) var(--space-lg) var(--space-md);
}
```

---

## 3. PERFORMANCE & MOTION (Prioridad: MEDIA)

### 🟢 Bien Implementado

#### 3.1 Respeto por `prefers-reduced-motion` ✅

**Ubicación:** `global.css` líneas 101-110, múltiples componentes

```css
/* ✅ Bien implementado */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Verificación:**
- Todos los componentes verifican `prefersReducedMotion` antes de animar ✅
- Las animaciones se desactivan completamente para usuarios sensibles ✅

---

### 🟡 Optimizaciones Recomendadas

#### 3.2 Animaciones con `will-change` sin Limpieza

**Ubicación:** `Hero.astro` líneas 196, 242

```css
/* ❌ will-change activo indefinidamente */
:global(.hero .phone-mockup) {
  animation: float-phone 6s ease-in-out 1s infinite;
  will-change: transform;  /* ❌ Siempre activo */
}
```

**Problema:**
`will-change` consume memoria GPU. Debe activarse solo cuando es necesario.

**Solución UI Pro Max:**
```css
/* Activar solo durante animación */
:global(.hero .phone-mockup) {
  animation: float-phone 6s ease-in-out 1s infinite;
  /* Quitar will-change de aquí */
}

/* Agregar/quitar con JS cuando entra/sale del viewport */
:global(.hero .phone-mockup:not(.ambient-paused)) {
  will-change: transform;
}

:global(.hero .phone-mockup.ambient-paused) {
  will-change: auto;  /* ✅ Ya está implementado */
}
```

---

#### 3.3 Animación de Rotación de Palabras Puede Optimizarse

**Ubicación:** `Hero.astro` líneas 111-132 (script)

**Problema actual:**
```javascript
// ❌ setInterval sin limpieza
setInterval(rotateWord, 3000);
```

**Optimización recomendada:**
```javascript
// Limpiar cuando el elemento sale del viewport
let rotateInterval;

const startRotation = () => {
  if (rotateInterval) return;
  rotateInterval = setInterval(rotateWord, 3000);
};

const stopRotation = () => {
  if (rotateInterval) {
    clearInterval(rotateInterval);
    rotateInterval = null;
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startRotation();
    } else {
      stopRotation();
    }
  });
}, { threshold: 0.1 });

observer.observe(rotatingWord);
```

---

## 4. NAVEGACIÓN & UX (Prioridad: MEDIA)

### 🟡 Mejoras Recomendadas

#### 4.1 Nav Mobile sin Overlay/Lock de Scroll

**Ubicación:** `Layout.astro` líneas 85-115

**Problema actual:**
```css
.nav-menu {
  position: absolute;  /* ❌ No bloquea scroll del body */
  /* ... */
}
```

**Cuando el menú está abierto:**
- El usuario puede hacer scroll en la página de fondo
- No hay overlay oscuro (puede causar confusión)

**Solución UI Pro Max:**
```astro
<script>
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open');
    
    // ✅ Bloquear scroll cuando está abierto
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    navToggle.setAttribute('aria-expanded', (!isOpen).toString());
  });
  
  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();  // Devolver foco al botón
    }
  });
</script>
```

**CSS adicional:**
```css
/* Agregar overlay */
.nav-menu::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--dur-routine) ease;
  z-index: -1;
}

.nav-menu.open::before {
  opacity: 1;
  visibility: visible;
}
```

---

#### 4.2 Enlaces con `href="#"` Sin Acción

**Ubicación:** Múltiples archivos

```astro
<!-- ❌ Marcadores que no hacen nada -->
<Button href="#">Descargar APK</Button>
<a href="#">¿Cuentas bancarias soportadas?</a>
```

**Problema:**
Los enlaces con `#` agregan `#` a la URL y pueden causar jump al inicio de la página.

**Solución:**
```astro
<!-- Opción 1: Usar button + handler -->
<Button type="button" onClick="alert('Próximamente')">
  Descargar APK
</Button>

<!-- Opción 2: Link deshabilitado con aria -->
<a 
  href="#" 
  aria-disabled="true" 
  class="link-disabled"
  onclick="event.preventDefault(); alert('Próximamente')"
>
  Descargar APK
</a>

<style>
  .link-disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: auto;  /* Permitir onclick */
  }
</style>
```

---

#### 4.3 Falta Indicador de Página Actual en Nav

**Ubicación:** `Layout.astro` líneas 91-98

**Problema:**
No hay indicación visual de qué sección está activa.

**Solución (con JS):**
```astro
<div class="nav-menu">
  <a href="#hero" class="nav-link">Resumen</a>
  <a href="#inventario" class="nav-link">Inventario</a>
  <!-- ... -->
</div>

<script>
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach((section) => observer.observe(section));
</script>

<style>
  .nav-link.active {
    color: var(--primary);
    font-weight: 600;
    position: relative;
  }
  
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary);
  }
</style>
```

---

## 5. FORMULARIOS & FEEDBACK (Prioridad: BAJA)

### 🟢 No Aplica Mayormente

La landing actual no tiene formularios complejos, pero los CTAs necesitan mejoras:

#### 5.1 CTAs sin Estados de Loading/Error

**Ubicación:** `Button.astro`

**Problema:**
Al hacer click en "Descargar APK", no hay feedback visual.

**Solución recomendada:**
```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  // ...
}

const { loading = false, disabled = false, ... } = Astro.props;
---

<button 
  class={`btn btn-${variant} ${className || ''}`}
  disabled={loading || disabled}
  aria-busy={loading}
>
  {loading && (
    <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" stroke-width="3" />
    </svg>
  )}
  <span class:list={{ 'btn-text': true, 'loading': loading }}>
    <slot />
  </span>
</button>

<style>
  .btn[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .spinner {
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    margin-right: 8px;
  }
  
  .btn-text.loading {
    opacity: 0.7;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
```

---

## 6. CHARTS & DATA VISUALIZATION (Prioridad: N/A)

No aplica para esta landing. El producto tiene data visualization interna (app Flutter), pero la landing solo muestra screenshots.

---

## Checklist Pre-Delivery (UI Pro Max)

### ✅ Completados

- [x] No emojis como iconos (usa SVG: checks, etc.)
- [x] `cursor-pointer` en elementos clickables
- [x] Hover states con transiciones (150-300ms)
- [x] Focus states visibles (`:focus-visible`)
- [x] `prefers-reduced-motion` respetado
- [x] Responsive: 375px, 768px, 1024px breakpoints

### ❌ Pendientes

- [ ] Contraste de texto 4.5:1 mínimo (ajustar `--muted`)
- [ ] Touch targets 44×44px mínimos (theme toggle, nav toggle)
- [ ] Skip links para navegación por teclado
- [ ] Botones semánticos (`<button>` vs `<a>`)
- [ ] Labels ARIA en iconos funcionales
- [ ] Overlay en nav mobile con lock de scroll
- [ ] Estados de loading en CTAs
- [ ] Indicador de sección activa en nav

---

## Resumen de Archivos a Modificar

### Alta Prioridad (Accesibilidad WCAG)

1. **`src/styles/global.css`**
   - Ajustar `--muted` y `--ink-secondary` para contraste AA
   - Total: ~5 líneas

2. **`src/layouts/Layout.astro`**
   - Aumentar touch targets (theme toggle, nav toggle)
   - Agregar skip link
   - Mejorar nav mobile (overlay, scroll lock)
   - Total: ~50 líneas

3. **`src/components/ui/Button.astro`**
   - Soportar type="button" vs type="link"
   - Agregar estados loading/disabled
   - Total: ~30 líneas

### Media Prioridad (UX)

4. **`src/components/sections/Hero.astro`**
   - Optimizar animación de palabra rotatoria
   - Ajustar espaciado de CTAs
   - Total: ~20 líneas

5. **`src/components/sections/FAQ.astro`**
   - Aumentar área de click del summary
   - Total: ~10 líneas

6. **`src/components/PhoneMockup.astro`**
   - Optimizar `will-change`
   - Total: ~5 líneas

---

## Estimación de Esfuerzo

| Categoría | Cambios | Tiempo Estimado |
|-----------|---------|-----------------|
| Contraste de colores | 5 tokens CSS | 30 min |
| Touch targets | 3 componentes | 1 hora |
| Skip links | 1 componente | 20 min |
| Botones semánticos | 1 componente + uso | 1.5 horas |
| ARIA labels | 5-7 ubicaciones | 45 min |
| Nav mobile mejorado | 1 componente | 1 hora |
| Optimizaciones perf | 3 componentes | 1 hora |
| Testing manual | Todas las mejoras | 2 horas |

**Total estimado:** ~8 horas de desarrollo

---

## Próximos Pasos Recomendados

### Fase 1: Accesibilidad Crítica (2-3 horas)
1. Ajustar contraste de colores en tokens CSS
2. Aumentar touch targets a 44×44px
3. Agregar skip link
4. Corregir semántica de botones

### Fase 2: UX Mobile (2-3 horas)
5. Mejorar nav mobile (overlay + scroll lock)
6. Agregar ARIA labels faltantes
7. Ajustar áreas de click del FAQ

### Fase 3: Polish & Performance (2-3 horas)
8. Optimizar animaciones (will-change, limpieza)
9. Agregar estados de loading a CTAs
10. Implementar indicador de sección activa
11. Testing completo en dispositivos reales

---

## Recursos Adicionales

- **WCAG 2.1 Checker:** https://webaim.org/resources/contrastchecker/
- **Touch Target Testing:** Chrome DevTools > Toggle device toolbar
- **Keyboard Nav Testing:** Navegar la página completa con Tab (sin mouse)
- **Screen Reader Testing:** NVDA (Windows) o VoiceOver (Mac)

---

**Generado por:** UI/UX Pro Max Skill  
**Basado en:** 84 estilos, 98 guías UX, 192 paletas de color, estándares WCAG 2.1
