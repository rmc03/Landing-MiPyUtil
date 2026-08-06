# Plan de Acción: Correcciones UI/UX

**Prioridad:** Alta → Media → Baja  
**Enfoque:** Accesibilidad primero, luego UX, finalmente polish

---

## 🔴 FASE 1: ACCESIBILIDAD CRÍTICA (Hacer Primero)

### 1.1 Contraste de Colores WCAG AA ⚡ 30 min

**Archivo:** `src/styles/global.css`

**Cambios:**
```css
/* Líneas 8-15: Ajustar tokens de color */
:root {
  /* ... otros colores ... */
  --muted: #5F6470;  /* Era #6B7280 - Ahora 4.68:1 ✅ */
  --ink-secondary: #3F3F52;  /* Era #4A4A5E - Mejor contraste */
}

/* Línea 60: Dark mode */
[data-theme="dark"] {
  /* ... otros colores ... */
  --muted: #A0A0B8;  /* Era #9090A8 - Más claro sobre oscuro */
  --ink-secondary: #C8C8D8;  /* Era #C0C0D0 - Mejor contraste */
}
```

**Verificar:** https://webaim.org/resources/contrastchecker/

---

### 1.2 Touch Targets 44×44px ⚡ 1 hora

**Archivo:** `src/layouts/Layout.astro`

**Cambios en líneas 156-179:**
```css
.theme-toggle {
  background: var(--surface-secondary);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  /* NUEVO: Asegurar 44×44px mínimo */
  min-width: 44px;
  min-height: 44px;
  padding: 12px;  /* Aumentado de 6-8px */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* ... resto igual ... */
}

.theme-toggle svg {
  /* Mantener icono a 20px, el target es el botón completo */
  width: 20px;
  height: 20px;
}

.nav-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  /* NUEVO: Asegurar 44×44px */
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  color: var(--ink);
  transition: color 200ms ease;
}

.hamburger {
  /* Mantener icono a 24px */
  width: 24px;
  height: 24px;
}
```

---

### 1.3 Skip Link para Teclado ⚡ 20 min

**Archivo:** `src/layouts/Layout.astro`

**Agregar después de `<body>` (línea 33):**
```astro
<body>
  <!-- NUEVO: Skip link -->
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>
  
  <nav class="nav">
    <!-- ... nav existente ... -->
  </nav>

  <main id="main-content">  <!-- NUEVO: agregar id -->
    <slot />
  </main>
  
  <!-- ... footer ... -->
</body>
```

**Agregar en `<style>` (después de línea 254):**
```css
/* === SKIP LINK === */
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
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
}
```

---

### 1.4 Botones Semánticos ⚡ 1.5 horas

**Archivo:** `src/components/ui/Button.astro` (REEMPLAZAR COMPLETO)

```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'link';
  onClick?: string;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
}

const { 
  variant = 'primary', 
  href = '#', 
  type = 'link',
  onClick,
  disabled = false,
  loading = false,
  class: className 
} = Astro.props;

const Element = type === 'button' ? 'button' : 'a';
---

{type === 'button' ? (
  <button 
    class={`btn btn-${variant} ${className || ''}`}
    onclick={onClick}
    type="button"
    disabled={disabled || loading}
    aria-busy={loading}
  >
    {loading && (
      <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" stroke-width="3" stroke-dasharray="63" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="63" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    )}
    <span class:list={{ 'btn-content': true, 'loading': loading }}>
      <slot />
    </span>
  </button>
) : (
  <a href={href} class={`btn btn-${variant} ${className || ''}`}>
    <slot />
  </a>
)}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: background-color var(--dur-routine) ease, 
                border-color var(--dur-routine) ease, 
                color var(--dur-routine) ease, 
                transform var(--dur-feedback) ease;
    text-align: center;
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    text-decoration: none;
  }

  .btn:active {
    transform: translateY(1px);
  }
  
  .btn[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  .btn-primary {
    background: var(--primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--primary-deep);
    color: white;
  }

  .btn-secondary {
    background: var(--surface);
    color: var(--primary);
    border-color: var(--line-strong);
  }

  .btn-secondary:hover {
    background: var(--surface-secondary);
    color: var(--primary-deep);
    border-color: var(--primary);
  }
  
  .spinner {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  
  .btn-content.loading {
    opacity: 0.7;
  }
</style>
```

**Actualizar uso en Hero.astro (líneas 28-35):**
```astro
<div class="cta-group">
  <Button variant="primary" type="button" onClick="alert('Próximamente: descarga de APK')">
    Descargar APK
    <span class="apk-size">~12 MB</span>
  </Button>
  <div class="secondary-ctas">
    <Button variant="secondary" href="https://wa.me/..." type="link">
      Escríbenos por WhatsApp
    </Button>
    <Button variant="secondary" href="https://t.me/..." type="link">
      Únete al canal de Telegram
    </Button>
  </div>
</div>
```

---

### 1.5 ARIA Labels en Iconos ⚡ 45 min

**Archivos múltiples:**

**1. `src/components/ui/OfflineBadge.astro`** (verificar si existe)
```astro
<svg aria-label="Funciona sin conexión" role="img" class="offline-icon">
  <!-- ... -->
</svg>
```

**2. `src/layouts/Layout.astro` (theme toggle, líneas 39-50)**
```astro
<button class="theme-toggle" aria-label="Cambiar tema claro/oscuro">
  <!-- SVGs ya tienen aria-hidden implícito, bien -->
  <svg class="sun-icon" ...>...</svg>
  <svg class="moon-icon" ...>...</svg>
</button>

<button class="nav-toggle" aria-label="Abrir menú de navegación" aria-expanded="false">
  <!-- ... -->
</button>
```

**3. `src/components/sections/Hero.astro` (línea 41)**
```astro
<!-- Icono decorativo - mantener aria-hidden -->
<svg class="note-icon" viewBox="0 0 24 24" aria-hidden="true">
  <!-- Correcto porque hay texto adyacente -->
</svg>
```

**4. `src/components/sections/Problema.astro` (líneas 52-54)**
```astro
<!-- Iconos decorativos dentro de cards con título -->
<svg viewBox="0 0 24 24" aria-hidden="true">
  <!-- Correcto, el título del card describe el contenido -->
</svg>
```

---

## 🟡 FASE 2: UX MOBILE (Hacer Después)

### 2.1 Nav Mobile con Overlay ⚡ 1 hora

**Archivo:** `src/layouts/Layout.astro`

**Agregar en CSS (líneas 118-142):**
```css
.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;  /* CAMBIO: de absolute a fixed */
  top: 100%;  /* Mantener */
  left: 0;
  right: 0;
  bottom: 0;  /* NUEVO: ocupar toda la altura */
  background: var(--surface);
  border-top: 1px solid var(--line);  /* CAMBIO: solo borde superior */
  padding: 24px;
  box-shadow: none;  /* QUITAR: no necesita sombra con overlay */
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);  /* CAMBIO: no mover, usar top */
  pointer-events: none;
  transition: opacity var(--dur-routine) ease, 
              visibility var(--dur-routine),
              top var(--dur-routine) var(--ease-out-expo);
  max-height: none;  /* CAMBIO: permitir scroll interno si es necesario */
  overflow-y: auto;
  z-index: 99;  /* NUEVO: debajo del nav pero arriba del contenido */
}

/* NUEVO: Overlay oscuro */
.nav-menu::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--dur-routine) ease,
              visibility var(--dur-routine);
  z-index: -1;
}

.nav-menu.open {
  opacity: 1;
  visibility: visible;
  top: 64px;  /* Ajustar según altura real del nav */
  pointer-events: auto;
}

.nav-menu.open::before {
  opacity: 1;
  visibility: visible;
}
```

**Actualizar script (líneas 283-296):**
```javascript
const navToggle = document.querySelector('.nav-toggle') as HTMLButtonElement;
const navMenu = document.querySelector('.nav-menu') as HTMLDivElement;

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', (!isOpen).toString());
    
    // NUEVO: Lock scroll cuando está abierto
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Cerrar al hacer click en un link
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';  // NUEVO: restaurar scroll
    });
  });
  
  // NUEVO: Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      navToggle.focus();  // Devolver foco al botón
    }
  });
}
```

---

### 2.2 Aumentar Área de Click FAQ ⚡ 15 min

**Archivo:** `src/components/sections/FAQ.astro`

**Actualizar CSS (líneas 15-60):**
```css
.faq-item {
  border-bottom: 1px solid var(--line);
  padding: 0;  /* CAMBIO: quitar padding del contenedor */
  background: var(--surface);
  transition: background var(--dur-routine) ease;
}

.faq-item summary {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  /* CAMBIO: Aumentar padding para touch */
  padding: var(--space-lg) var(--space-md);  /* 24px 16px */
  min-height: 64px;  /* NUEVO: altura mínima */
}

.faq-item p {
  margin-top: var(--space-md);
  /* CAMBIO: Agregar padding explícito */
  padding: 0 var(--space-md) var(--space-lg) var(--space-md);
  color: var(--ink-secondary);
  line-height: 1.7;
}
```

---

### 2.3 Espaciado CTAs Hero ⚡ 10 min

**Archivo:** `src/components/sections/Hero.astro`

**Línea 60-64:**
```css
.secondary-ctas {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);  /* CAMBIO: de --space-sm (8px) a --space-md (16px) */
}
```

---

### 2.4 Feedback Táctil en Elementos ⚡ 20 min

**Archivo:** `src/styles/global.css`

**Agregar al final (después de línea 187):**
```css
/* === TOUCH FEEDBACK === */
@media (hover: none) and (pointer: coarse) {
  /* Botones en touch devices */
  .btn:active {
    transform: translateY(0) scale(0.97);
  }
  
  /* Links de navegación */
  .nav-menu a:active,
  .footer-links a:active {
    transform: scale(0.98);
    transition: transform 100ms ease;
  }
  
  /* FAQ items */
  .faq-item summary:active {
    background: var(--hover-overlay);
  }
  
  /* Cards */
  .problema-card:active {
    transform: scale(0.99);
    transition: transform 100ms ease;
  }
}
```

---

## 🟢 FASE 3: POLISH & PERFORMANCE (Hacer Al Final)

### 3.1 Optimizar `will-change` ⚡ 30 min

**Archivo:** `src/components/sections/Hero.astro`

**Línea 242 - Quitar will-change de CSS:**
```css
:global(.hero .phone-mockup) {
  animation: float-phone 6s ease-in-out 1s infinite;
  /* QUITAR: will-change: transform; */
}

/* Ya está bien manejado con ambient-paused */
:global(.hero .phone-mockup.ambient-paused) {
  will-change: auto;
}
```

**Archivo:** `src/components/PhoneMockup.astro`

**Quitar línea similar si existe.**

---

### 3.2 Optimizar Rotación de Palabras ⚡ 30 min

**Archivo:** `src/components/sections/Hero.astro`

**Líneas 111-132 - Actualizar script:**
```javascript
// Rotating word animation
if (!prefersReducedMotion) {
  const rotatingWord = document.querySelector('.rotating-word');
  if (rotatingWord) {
    const words = JSON.parse(rotatingWord.getAttribute('data-words') || '[]');
    let currentIndex = 0;
    let rotateInterval = null;  // NUEVO: guardar referencia
    
    const rotateWord = () => {
      rotatingWord.classList.add('word-exit');
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingWord.textContent = words[currentIndex];
        rotatingWord.classList.remove('word-exit');
        rotatingWord.classList.add('word-enter');
        
        setTimeout(() => {
          rotatingWord.classList.remove('word-enter');
        }, 500);
      }, 300);
    };
    
    // NUEVO: Iniciar/detener según visibility
    const startRotation = () => {
      if (!rotateInterval) {
        rotateInterval = setInterval(rotateWord, 3000);
      }
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
  }
}
```

---

### 3.3 Indicador de Sección Activa ⚡ 40 min

**Archivo:** `src/layouts/Layout.astro`

**Actualizar nav links (líneas 91-98):**
```astro
<div class="nav-menu">
  <a href="#hero" class="nav-link">Resumen</a>
  <a href="#ventas" class="nav-link">Ventas</a>
  <a href="#inventario" class="nav-link">Inventario</a>
  <a href="#cuadre" class="nav-link">Cuadre</a>
  <a href="#temas" class="nav-link">Temas</a>
  <a href="#descarga" class="nav-cta">Descargar APK</a>
</div>
```

**Agregar en CSS (después de línea 169):**
```css
.nav-link {
  position: relative;
  transition: color 200ms ease;
}

.nav-link.active {
  color: var(--primary);
  font-weight: 600;
}

@media (min-width: 768px) {
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary);
    border-radius: 1px;
  }
}
```

**Agregar script (después del theme toggle, línea 320):**
```javascript
// Active section indicator
const sections = document.querySelectorAll('section[id], section[class*="hero"]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id') || 
                   (entry.target.classList.contains('hero') ? 'hero' : '');
        
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach((section) => observer.observe(section));
}
```

**Actualizar index.astro para agregar IDs:**
```astro
<Hero />  <!-- Agregar: id="hero" al section interno -->
<Problema />  <!-- Agregar: id="problema" -->
<ComoFunciona />  <!-- Agregar: id="como-funciona" -->

<FeatureSection
  screenshot="03-confirmar-pago.png"
  alt="..."
  title="..."
  class="ventas"
  id="ventas"  <!-- NUEVO -->
  band
>
```

---

## 📋 Resumen de Tareas

### Fase 1: Accesibilidad (3.5 horas)
- [ ] 1.1 Contraste de colores (30 min)
- [ ] 1.2 Touch targets 44×44px (1 hora)
- [ ] 1.3 Skip link (20 min)
- [ ] 1.4 Botones semánticos (1.5 horas)
- [ ] 1.5 ARIA labels (45 min)

### Fase 2: UX Mobile (2 horas)
- [ ] 2.1 Nav mobile con overlay (1 hora)
- [ ] 2.2 Área de click FAQ (15 min)
- [ ] 2.3 Espaciado CTAs (10 min)
- [ ] 2.4 Feedback táctil (20 min)

### Fase 3: Polish (2 horas)
- [ ] 3.1 Optimizar will-change (30 min)
- [ ] 3.2 Rotación de palabras (30 min)
- [ ] 3.3 Indicador sección activa (40 min)
- [ ] Testing completo (20 min)

**Total:** ~7.5 horas

---

## 🧪 Testing Post-Implementación

### Accesibilidad
- [ ] Navegar toda la página solo con teclado (Tab, Enter, Escape)
- [ ] Verificar contraste con https://webaim.org/resources/contrastchecker/
- [ ] Probar con lector de pantalla (NVDA o VoiceOver)
- [ ] Verificar todos los focus-visible son visibles

### Mobile
- [ ] Tocar todos los botones/links en dispositivo real
- [ ] Verificar que no hay targets menores a 44×44px
- [ ] Probar nav mobile con scroll lock
- [ ] Verificar feedback visual al tocar

### Performance
- [ ] Lighthouse audit (debe ser 90+ en Accesibilidad)
- [ ] Verificar que `will-change` no está siempre activo
- [ ] Comprobar que animaciones se detienen fuera de viewport

---

## 📦 Entregables

Después de completar todo:

1. **Reporte Lighthouse** con scores de accesibilidad
2. **Video/GIF** demostrando navegación por teclado
3. **Screenshots** de contraste verificado
4. **Test en dispositivos reales** (Android/iOS)

---

**Última actualización:** 2026-08-01  
**Versión:** 1.0
