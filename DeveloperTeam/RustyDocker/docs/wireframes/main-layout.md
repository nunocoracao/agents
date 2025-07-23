# Main Application Layout

## Overview
The main layout provides the foundational structure for the entire application, featuring a collapsible sidebar navigation and flexible content area.

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ ┌─ Titlebar (macOS native) ──────────────────────────────┐ │
│ │ 🔴 🟡 🟢                    RustyDocker                │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─ Sidebar ─┐ ┌─ Main Content Area ──────────────────────┐ │
│ │           │ │                                          │ │
│ │  [Home]   │ │  ┌─ Header ──────────────────────────┐  │ │
│ │  [Cont.]  │ │  │  Page Title        [Actions]     │  │ │
│ │  [Images] │ │  └──────────────────────────────────────┘  │ │
│ │  [Vol.]   │ │                                          │ │
│ │  [Net.]   │ │  ┌─ Content ──────────────────────────┐  │ │
│ │           │ │  │                                    │  │ │
│ │  ─────    │ │  │     (Dynamic content area)        │  │ │
│ │  [Sett.]  │ │  │                                    │  │ │
│ │           │ │  │                                    │  │ │
│ └───────────┘ │  └────────────────────────────────────┘  │ │
│               └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Component Specifications

### Application Shell
```typescript
interface AppShell {
  height: "100vh";
  display: "flex";
  flexDirection: "column";
  backgroundColor: "var(--background)";
  color: "var(--foreground)";
}
```

### Titlebar (macOS)
```typescript
interface Titlebar {
  height: "28px";  // macOS standard
  backgroundColor: "transparent";
  display: "flex";
  alignItems: "center";
  justifyContent: "center";
  padding: "0 80px 0 80px";  // Space for traffic lights
  fontSize: "13px";
  fontWeight: 500;
  color: "var(--muted-foreground)";
  WebkitAppRegion: "drag";  // Tauri window dragging
}
```

### Main Container
```typescript
interface MainContainer {
  display: "flex";
  flex: 1;
  overflow: "hidden";
}
```

### Sidebar Container
```typescript
interface SidebarContainer {
  width: "240px";  // Expanded
  minWidth: "60px";  // Collapsed
  backgroundColor: "var(--card)";
  borderRight: "1px solid var(--border)";
  display: "flex";
  flexDirection: "column";
  transition: "width 200ms ease-in-out";
}
```

### Content Area
```typescript
interface ContentArea {
  flex: 1;
  display: "flex";
  flexDirection: "column";
  overflow: "hidden";
  backgroundColor: "var(--background)";
}
```

### Content Header
```typescript
interface ContentHeader {
  height: "64px";
  padding: "0 24px";
  display: "flex";
  alignItems: "center";
  justifyContent: "space-between";
  borderBottom: "1px solid var(--border)";
  backgroundColor: "var(--card)";
}
```

### Content Body
```typescript
interface ContentBody {
  flex: 1;
  padding: "24px";
  overflow: "auto";
  display: "flex";
  flexDirection: "column";
  gap: "24px";
}
```

## Responsive Behavior

### Breakpoints
- **Large Desktop**: >= 1400px (full sidebar always visible)
- **Desktop**: >= 1024px (collapsible sidebar)
- **Tablet**: >= 768px (overlay sidebar)
- **Mobile**: < 768px (hidden sidebar, mobile nav)

### Sidebar States
1. **Expanded** (default on desktop)
   - Width: 240px
   - Show icons + labels
   - Full navigation visible

2. **Collapsed** (toggle available)
   - Width: 60px
   - Show icons only
   - Tooltip on hover for labels

3. **Hidden** (mobile/small screens)
   - Width: 0px
   - Accessible via hamburger menu
   - Overlay when opened

## Interactions

### Sidebar Toggle
- **Trigger**: Keyboard shortcut (Cmd+B) or button
- **Animation**: Smooth width transition (200ms)
- **State**: Persisted in local storage

### Window Management
- **Native**: macOS traffic light controls
- **Resize**: Minimum window size 800x600
- **Fullscreen**: Proper handling of macOS fullscreen mode

## Accessibility

### Keyboard Navigation
- **Tab order**: Sidebar → Content header → Content body
- **Focus indicators**: Clear visual focus states
- **Skip links**: "Skip to main content" option

### Screen Reader Support
- **Landmarks**: Proper ARIA landmarks
- **Labels**: Descriptive labels for all interactive elements
- **Live regions**: Status updates announced

## Theme Support

### Light Theme Styling
```css
.app-shell {
  background: var(--background);
  color: var(--foreground);
}

.sidebar {
  background: var(--card);
  border-color: var(--border);
}

.content-header {
  background: var(--card);
  border-color: var(--border);
}
```

### Dark Theme Styling
```css
[data-theme="dark"] .app-shell {
  background: var(--background);
  color: var(--foreground);
}

[data-theme="dark"] .sidebar {
  background: var(--card);
  border-color: var(--border);
}

[data-theme="dark"] .content-header {
  background: var(--card);
  border-color: var(--border);
}
```

## Layout Grid System

### 8px Grid
All spacing follows the 8px grid system:
- **Micro spacing**: 4px, 8px (space-1, space-2)
- **Component spacing**: 16px, 24px (space-4, space-6)
- **Section spacing**: 32px, 48px (space-8, space-12)

### Content Max-Width
- **Main content**: 1400px maximum width
- **Centered**: Auto margins for centering
- **Responsive**: Full width on smaller screens