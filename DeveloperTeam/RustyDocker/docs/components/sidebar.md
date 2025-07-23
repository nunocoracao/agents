# Sidebar Navigation Component

## Overview
The sidebar provides primary navigation throughout the application with support for collapsed/expanded states and clear visual hierarchy.

## Visual Structure

### Expanded State (240px)
```
┌─ Sidebar ──────────────────┐
│ ┌─ Logo/Brand ───────────┐ │
│ │  🐳 RustyDocker         │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─ Navigation ────────────┐ │
│ │  🏠 Dashboard           │ │
│ │  📦 Containers    [12]  │ │
│ │  💿 Images        [8]   │ │
│ │  💾 Volumes       [3]   │ │
│ │  🌐 Networks      [2]   │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─ Footer ────────────────┐ │
│ │  ⚙️  Settings           │ │
│ │  ❓ Help                │ │
│ │  🌙 Theme Toggle        │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

### Collapsed State (60px)
```
┌─ Sidebar ─┐
│ ┌─ Logo ─┐ │
│ │   🐳   │ │
│ └───────┘ │
│           │
│ ┌─ Nav ──┐ │
│ │   🏠   │ │
│ │   📦   │ │
│ │   💿   │ │
│ │   💾   │ │
│ │   🌐   │ │
│ └───────┘ │
│           │
│ ┌─ Foot ─┐ │
│ │   ⚙️    │ │
│ │   ❓   │ │
│ │   🌙   │ │
│ └───────┘ │
└───────────┘
```

## Component Specifications

### Sidebar Container
```typescript
interface SidebarContainer {
  width: "240px" | "60px";
  height: "100%";
  backgroundColor: "var(--card)";
  borderRight: "1px solid var(--border)";
  display: "flex";
  flexDirection: "column";
  transition: "width 200ms ease-in-out";
  position: "relative";
}
```

### Brand Section
```typescript
interface BrandSection {
  height: "64px";
  padding: "16px";
  display: "flex";
  alignItems: "center";
  gap: "12px";
  borderBottom: "1px solid var(--border)";
}

interface BrandLogo {
  width: "28px";
  height: "28px";
  flexShrink: 0;
}

interface BrandText {
  fontSize: "18px";
  fontWeight: 600;
  color: "var(--foreground)";
  opacity: "1";  // Hidden when collapsed
  transition: "opacity 200ms ease-in-out";
}
```

### Navigation Section
```typescript
interface NavigationSection {
  flex: 1;
  padding: "16px 0";
  display: "flex";
  flexDirection: "column";
  gap: "4px";
}

interface NavigationItem {
  height: "44px";
  padding: "0 16px";
  display: "flex";
  alignItems: "center";
  gap: "12px";
  borderRadius: "6px";
  margin: "0 8px";
  cursor: "pointer";
  transition: "background-color 150ms ease";
  position: "relative";
}

// States
interface NavigationItemHover {
  backgroundColor: "var(--muted)";
}

interface NavigationItemActive {
  backgroundColor: "var(--primary)";
  color: "var(--primary-foreground)";
}

interface NavigationItemIcon {
  width: "20px";
  height: "20px";
  flexShrink: 0;
}

interface NavigationItemText {
  fontSize: "14px";
  fontWeight: 500;
  opacity: "1";  // Hidden when collapsed
  transition: "opacity 200ms ease-in-out";
}

interface NavigationItemBadge {
  fontSize: "11px";
  fontWeight: 600;
  backgroundColor: "var(--muted)";
  color: "var(--muted-foreground)";
  padding: "2px 6px";
  borderRadius: "10px";
  marginLeft: "auto";
  minWidth: "18px";
  textAlign: "center";
}
```

### Footer Section
```typescript
interface FooterSection {
  padding: "16px 0";
  borderTop: "1px solid var(--border)";
  display: "flex";
  flexDirection: "column";
  gap: "4px";
}

interface FooterItem {
  height: "40px";
  padding: "0 16px";
  display: "flex";
  alignItems: "center";
  gap: "12px";
  borderRadius: "6px";
  margin: "0 8px";
  cursor: "pointer";
  transition: "background-color 150ms ease";
}

interface FooterItemHover {
  backgroundColor: "var(--muted)";
}
```

### Collapse Toggle
```typescript
interface CollapseToggle {
  position: "absolute";
  right: "-12px";
  top: "32px";
  width: "24px";
  height: "24px";
  backgroundColor: "var(--card)";
  border: "1px solid var(--border)";
  borderRadius: "50%";
  display: "flex";
  alignItems: "center";
  justifyContent: "center";
  cursor: "pointer";
  transition: "transform 150ms ease";
  zIndex: 10;
}

interface CollapseToggleHover {
  backgroundColor: "var(--muted)";
  transform: "scale(1.1)";
}
```

## Navigation Items

### Primary Navigation
1. **Dashboard**
   - Icon: Home (🏠)
   - Route: `/`
   - Always visible

2. **Containers**
   - Icon: Package (📦)
   - Route: `/containers`
   - Badge: Running container count

3. **Images**
   - Icon: Disc (💿)
   - Route: `/images`
   - Badge: Total image count

4. **Volumes**
   - Icon: Database (💾)
   - Route: `/volumes`
   - Badge: Volume count

5. **Networks**
   - Icon: Globe (🌐)
   - Route: `/networks`
   - Badge: Network count

### Footer Items
1. **Settings**
   - Icon: Gear (⚙️)
   - Route: `/settings`
   - No badge

2. **Help**
   - Icon: Question (❓)
   - Action: Opens help modal/external link
   - No badge

3. **Theme Toggle**
   - Icon: Moon/Sun (🌙/☀️)
   - Action: Toggles dark/light theme
   - Visual state change

## Interactions

### Hover States
```css
.nav-item:hover {
  background-color: var(--muted);
  transition: background-color 150ms ease;
}

.nav-item:hover .nav-icon {
  transform: scale(1.1);
  transition: transform 150ms ease;
}
```

### Active States
```css
.nav-item.active {
  background-color: var(--primary);
  color: var(--primary-foreground);
  position: relative;
}

.nav-item.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 20px;
  background-color: var(--primary-foreground);
  border-radius: 0 2px 2px 0;
}
```

### Collapse Animation
```css
.sidebar {
  transition: width 200ms ease-in-out;
}

.sidebar.collapsed .nav-text,
.sidebar.collapsed .brand-text {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.sidebar.collapsed .nav-badge {
  display: none;
}
```

## Tooltips (Collapsed State)

### Tooltip Component
```typescript
interface Tooltip {
  position: "fixed";
  left: "68px";  // Sidebar width + gap
  backgroundColor: "var(--popover)";
  color: "var(--popover-foreground)";
  padding: "6px 12px";
  borderRadius: "6px";
  fontSize: "12px";
  fontWeight: 500;
  boxShadow: "var(--shadow-md)";
  border: "1px solid var(--border)";
  zIndex: 50;
  whiteSpace: "nowrap";
}
```

### Tooltip Behavior
- **Trigger**: Hover on nav item when collapsed
- **Delay**: 500ms before showing
- **Position**: Right of the sidebar
- **Content**: Full navigation item text
- **Animation**: Fade in/out 150ms

## Accessibility

### Keyboard Navigation
- **Tab order**: Top to bottom navigation
- **Arrow keys**: Up/down navigation between items
- **Enter/Space**: Activate navigation item
- **Escape**: Close any open submenus

### Screen Reader Support
```html
<nav aria-label="Main navigation" role="navigation">
  <ul role="list">
    <li role="listitem">
      <a href="/dashboard" aria-current="page" aria-describedby="dashboard-badge">
        <span class="sr-only">Dashboard</span>
        <Icon aria-hidden="true" />
        <span class="nav-text">Dashboard</span>
      </a>
    </li>
  </ul>
</nav>
```

### Focus Management
- **Focus indicators**: 2px solid var(--primary) outline
- **Focus visible**: Only on keyboard navigation
- **Focus trap**: When sidebar is open on mobile

## Responsive Behavior

### Mobile (< 768px)
- **Hidden by default**: width: 0, overflow: hidden
- **Overlay mode**: Fixed position, full height
- **Backdrop**: Semi-transparent overlay
- **Close**: Click outside or escape key

### Tablet (768px - 1024px)
- **Collapsible**: Default to collapsed state
- **Hover expand**: Brief expansion on hover
- **Touch friendly**: Larger touch targets

### Desktop (> 1024px)
- **Full functionality**: All states available
- **Persistent**: State saved in localStorage
- **Smooth transitions**: Full animation support