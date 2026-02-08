# Design System - JetThemeCore

## 🎨 Paleta de Cores

### Cores Primárias
```css
--primary-dark: #0A1628        /* Background principal escuro */
--primary-navy: #1A2942        /* Background secundário escuro */
--primary-yellow: #FFC107      /* CTA e destaques principais */
--primary-yellow-hover: #FFB300 /* Hover estado */
```

### Cores Secundárias
```css
--secondary-purple: #8B5CF6    /* Badges e ícones de destaque */
--secondary-blue: #3B82F6      /* Links e elementos interativos */
--secondary-pink: #EC4899      /* Acentos e highlights */
--secondary-orange: #F97316    /* Alertas e notificações */
--secondary-green: #10B981     /* Sucesso e confirmações */
--secondary-cyan: #06B6D4      /* Informação */
```

### Cores Neutras
```css
--neutral-white: #FFFFFF
--neutral-gray-50: #F9FAFB
--neutral-gray-100: #F3F4F6
--neutral-gray-200: #E5E7EB
--neutral-gray-300: #D1D5DB
--neutral-gray-400: #9CA3AF
--neutral-gray-500: #6B7280
--neutral-gray-600: #4B5563
--neutral-gray-700: #374151
--neutral-gray-800: #1F2937
--neutral-gray-900: #111827
```

### Cores Semânticas
```css
--success: #10B981
--warning: #F59E0B
--error: #EF4444
--info: #3B82F6
```

---

## 📝 Tipografia

### Família de Fontes
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Escala Tipográfica

#### Headings
```css
--h1-size: 56px;           /* 3.5rem */
--h1-weight: 700;
--h1-line-height: 1.1;
--h1-letter-spacing: -0.02em;

--h2-size: 48px;           /* 3rem */
--h2-weight: 700;
--h2-line-height: 1.15;
--h2-letter-spacing: -0.01em;

--h3-size: 36px;           /* 2.25rem */
--h3-weight: 600;
--h3-line-height: 1.2;
--h3-letter-spacing: -0.01em;

--h4-size: 28px;           /* 1.75rem */
--h4-weight: 600;
--h4-line-height: 1.25;
--h4-letter-spacing: 0;

--h5-size: 20px;           /* 1.25rem */
--h5-weight: 600;
--h5-line-height: 1.3;
--h5-letter-spacing: 0;

--h6-size: 16px;           /* 1rem */
--h6-weight: 600;
--h6-line-height: 1.4;
--h6-letter-spacing: 0;
```

#### Body Text
```css
--body-xl: 20px;           /* 1.25rem */
--body-lg: 18px;           /* 1.125rem */
--body-md: 16px;           /* 1rem */
--body-sm: 14px;           /* 0.875rem */
--body-xs: 12px;           /* 0.75rem */

--body-weight-regular: 400;
--body-weight-medium: 500;
--body-weight-semibold: 600;

--body-line-height: 1.6;
```

#### Caption/Labels
```css
--caption-size: 12px;      /* 0.75rem */
--caption-weight: 500;
--caption-line-height: 1.4;

--label-size: 14px;        /* 0.875rem */
--label-weight: 500;
--label-line-height: 1.4;
```

---

## 📐 Espaçamento (Grid 8px)

### Sistema de Espaçamento
```css
--space-0: 0px;
--space-1: 4px;            /* 0.25rem */
--space-2: 8px;            /* 0.5rem */
--space-3: 12px;           /* 0.75rem */
--space-4: 16px;           /* 1rem */
--space-5: 20px;           /* 1.25rem */
--space-6: 24px;           /* 1.5rem */
--space-8: 32px;           /* 2rem */
--space-10: 40px;          /* 2.5rem */
--space-12: 48px;          /* 3rem */
--space-16: 64px;          /* 4rem */
--space-20: 80px;          /* 5rem */
--space-24: 96px;          /* 6rem */
--space-32: 128px;         /* 8rem */
```

### Layout Grid
```css
--container-max-width: 1280px;
--container-padding: 24px;
--grid-columns: 12;
--grid-gap: 24px;
```

---

## 🔘 Componentes

### Botões

#### Primary Button
```css
.btn-primary {
  background: var(--primary-yellow);
  color: var(--primary-dark);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-yellow-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(255, 193, 7, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--neutral-white);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid var(--neutral-gray-600);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--primary-yellow);
  color: var(--primary-yellow);
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--neutral-white);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

#### Button Sizes
```css
.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
}

.btn-md {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
  border-radius: 10px;
}
```

#### Button with Icon
```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-icon svg {
  width: 20px;
  height: 20px;
}
```

---

### Cards

#### Feature Card
```css
.card-feature {
  background: var(--neutral-white);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.card-feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.card-feature-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary-dark);
}

.card-feature-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-gray-600);
}
```

#### Dark Card
```css
.card-dark {
  background: var(--primary-navy);
  border-radius: 16px;
  padding: 32px;
  color: var(--neutral-white);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-dark-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.card-dark-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-gray-300);
}
```

#### Pricing Card
```css
.card-pricing {
  background: var(--primary-navy);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.card-pricing.featured {
  border-color: var(--primary-yellow);
  transform: scale(1.05);
  position: relative;
}

.card-pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-yellow);
  color: var(--primary-dark);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.card-pricing-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
}

.card-pricing-price {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-pricing-period {
  font-size: 16px;
  color: var(--neutral-gray-400);
  margin-bottom: 24px;
}

.card-pricing-features {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.card-pricing-features li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Testimonial Card
```css
.card-testimonial {
  background: var(--neutral-white);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.card-testimonial-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.card-testimonial-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}

.card-testimonial-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-dark);
}

.card-testimonial-role {
  font-size: 14px;
  color: var(--neutral-gray-500);
}

.card-testimonial-content {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-gray-600);
}
```

---

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-primary {
  background: var(--secondary-purple);
  color: var(--neutral-white);
}

.badge-success {
  background: var(--success);
  color: var(--neutral-white);
}

.badge-info {
  background: var(--info);
  color: var(--neutral-white);
}

.badge-warning {
  background: var(--warning);
  color: var(--neutral-white);
}

.badge-error {
  background: var(--error);
  color: var(--neutral-white);
}

.badge-outline {
  background: transparent;
  border: 2px solid currentColor;
}
```

---

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--neutral-gray-300);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: var(--neutral-white);
  font-family: var(--font-primary);
}

.input:focus {
  outline: none;
  border-color: var(--secondary-blue);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.input::placeholder {
  color: var(--neutral-gray-400);
}

.input:disabled {
  background: var(--neutral-gray-100);
  cursor: not-allowed;
  opacity: 0.6;
}

.input.error {
  border-color: var(--error);
}

.input.success {
  border-color: var(--success);
}
```

#### Input with Label
```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--neutral-gray-700);
}

.input-helper {
  font-size: 12px;
  color: var(--neutral-gray-500);
}

.input-error {
  font-size: 12px;
  color: var(--error);
}
```

#### Textarea
```css
.textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--neutral-gray-300);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: var(--neutral-white);
  font-family: var(--font-primary);
  resize: vertical;
  min-height: 120px;
}

.textarea:focus {
  outline: none;
  border-color: var(--secondary-blue);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}
```

#### Select
```css
.select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--neutral-gray-300);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: var(--neutral-white);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 48px;
}

.select:focus {
  outline: none;
  border-color: var(--secondary-blue);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}
```

#### Checkbox
```css
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  border: 2px solid var(--neutral-gray-300);
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.checkbox-input:checked {
  background: var(--secondary-blue);
  border-color: var(--secondary-blue);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5L4.5 8.5L11 1.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox-label {
  font-size: 14px;
  color: var(--neutral-gray-700);
}
```

---

### Icons

#### Icon Containers
```css
.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--neutral-gray-100);
}

.icon-container.primary {
  background: rgba(255, 193, 7, 0.1);
  color: var(--primary-yellow);
}

.icon-container.purple {
  background: rgba(139, 92, 246, 0.1);
  color: var(--secondary-purple);
}

.icon-container.blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--secondary-blue);
}

.icon-container.green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--secondary-green);
}

.icon-container.pink {
  background: rgba(236, 72, 153, 0.1);
  color: var(--secondary-pink);
}
```

#### Icon Sizes
```css
.icon-sm {
  width: 32px;
  height: 32px;
}

.icon-md {
  width: 48px;
  height: 48px;
}

.icon-lg {
  width: 64px;
  height: 64px;
}
```

---

### Navigation

#### Navbar
```css
.navbar {
  background: var(--primary-dark);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-logo {
  height: 32px;
}

.navbar-menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-link {
  color: var(--neutral-white);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar-link:hover {
  color: var(--primary-yellow);
}

.navbar-link.active {
  color: var(--primary-yellow);
}
```

#### Footer
```css
.footer {
  background: var(--primary-dark);
  padding: 64px 24px 32px;
  color: var(--neutral-white);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  max-width: 1280px;
  margin: 0 auto 48px;
}

.footer-column-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: var(--neutral-gray-300);
  text-decoration: none;
  font-size: 14px;
  line-height: 2;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-yellow);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
  text-align: center;
  color: var(--neutral-gray-400);
  font-size: 14px;
}
```

---

### Modal

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--neutral-white);
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-dark);
}

.modal-close {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--neutral-gray-500);
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: var(--neutral-gray-900);
}

.modal-content {
  margin-bottom: 24px;
  color: var(--neutral-gray-600);
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
```

---

### Tooltip

```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: var(--primary-dark);
  color: var(--neutral-white);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 100;
}

.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--primary-dark);
}

.tooltip:hover .tooltip-content {
  opacity: 1;
}
```

---

### Alert

```css
.alert {
  padding: 16px 20px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.alert-message {
  font-size: 14px;
  line-height: 1.5;
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
  border: 1px solid var(--success);
}

.alert-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
  border: 1px solid var(--warning);
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: 1px solid var(--error);
}

.alert-info {
  background: rgba(59, 130, 246, 0.1);
  color: var(--info);
  border: 1px solid var(--info);
}
```

---

### Progress Bar

```css
.progress {
  width: 100%;
  height: 8px;
  background: var(--neutral-gray-200);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--primary-yellow);
  transition: width 0.3s ease;
  border-radius: 4px;
}

.progress-bar.success {
  background: var(--success);
}

.progress-bar.error {
  background: var(--error);
}
```

---

## 🎯 Efeitos e Animações

### Sombras (Shadows)
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 20px;
--radius-full: 9999px;
```

### Transições
```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
--transition-slower: 0.5s ease;
```

### Animações
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease;
}

.animate-slide-up {
  animation: slideUp 0.4s ease;
}

.animate-slide-down {
  animation: slideDown 0.4s ease;
}

.animate-scale-in {
  animation: scaleIn 0.3s ease;
}
```

---

## 📱 Breakpoints Responsivos

```css
--breakpoint-xs: 375px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Media Queries
```css
/* Mobile First */
@media (min-width: 640px) {
  /* Tablet */
}

@media (min-width: 768px) {
  /* Desktop Small */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Desktop Large */
}

@media (min-width: 1536px) {
  /* Desktop XL */
}
```

---

## 🔍 Padrões de Uso

### Hierarquia Visual
- **Alto contraste**: Títulos principais com yellow em background dark
- **Médio contraste**: Subtítulos em white com weight 600
- **Baixo contraste**: Body text em gray-300

### Consistência de Espaçamento
- **Seções**: 96px - 128px (vertical)
- **Cards**: 32px (padding interno)
- **Elementos relacionados**: 16px - 24px
- **Elementos próximos**: 8px - 12px
- **Micro espaçamentos**: 4px

### Acessibilidade

#### Contraste
- Contraste mínimo WCAG AA: 4.5:1 para texto normal
- Contraste mínimo WCAG AA: 3:1 para texto grande
- Contraste mínimo WCAG AAA: 7:1 para texto normal

#### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--secondary-blue);
  outline-offset: 2px;
}
```

#### Keyboard Navigation
- Todos os elementos interativos devem ser acessíveis via teclado
- Ordem de foco lógica e previsível
- Indicadores visuais claros para elementos focados

#### Screen Readers
- Usar labels semânticos
- Incluir aria-labels quando necessário
- Manter hierarquia de headings correta

---

## 📦 Estrutura de Arquivos Recomendada

```
design-system/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── effects.css
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   ├── navigation.css
│   └── modals.css
├── layouts/
│   ├── grid.css
│   └── containers.css
└── utilities/
    ├── animations.css
    └── helpers.css
```

---

## 🎨 Exemplos de Uso

### Hero Section
```html
<section class="hero" style="background: var(--primary-dark); padding: var(--space-24) var(--space-6);">
  <div class="container">
    <h1 style="color: var(--neutral-white); margin-bottom: var(--space-6);">
      Try Visual Theme Builder
    </h1>
    <p style="color: var(--neutral-gray-300); margin-bottom: var(--space-8); font-size: var(--body-lg);">
      Build and manage editing process effortlessly
    </p>
    <button class="btn-primary btn-lg">
      Get Started
    </button>
  </div>
</section>
```

### Feature Grid
```html
<section class="features" style="padding: var(--space-24) var(--space-6);">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
      <div class="card-feature">
        <div class="icon-container primary">
          <svg>...</svg>
        </div>
        <h3 class="card-feature-title">Control Every Element</h3>
        <p class="card-feature-description">Customize templates to match your brand</p>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

---

## 📝 Notas de Implementação

1. **CSS Variables**: Todos os tokens devem ser definidos como CSS custom properties para fácil manutenção
2. **Mobile First**: Desenvolver primeiro para mobile, depois expandir para desktop
3. **Performance**: Otimizar animações e transições para 60fps
4. **Consistência**: Sempre usar os tokens do design system, evitar valores hardcoded
5. **Documentação**: Manter este documento atualizado com novas adições

---

## 🔄 Versionamento

- **Versão**: 1.0.0
- **Data**: Fevereiro 2026
- **Última atualização**: 03/02/2026

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o Design System:
- Documentação completa: [link]
- Issues: [link]
- Slack: #design-system
