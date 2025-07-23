# Frontend Implementation Guide

## CSS Custom Properties (Design Tokens)

```css
:root {
  /* Colors */
  --color-background: #FAFBFC;
  --color-surface: #FFFFFF;
  --color-primary: #026AA7;
  --color-primary-hover: #0052CC;
  
  --color-gray-50: #F7F8F9;
  --color-gray-100: #F1F2F4;
  --color-gray-200: #DFE1E6;
  --color-gray-400: #B3BAC5;
  --color-gray-700: #5E6C84;
  --color-gray-900: #172B4D;
  
  --color-success: #36B37E;
  --color-warning: #FFAB00;
  --color-danger: #DE350B;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-size-h1: 24px;
  --font-size-h2: 18px;
  --font-size-h3: 16px;
  --font-size-body: 14px;
  --font-size-small: 12px;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  
  /* Border Radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 8px;
  
  /* Shadows */
  --shadow-card: 0 1px 2px rgba(9, 30, 66, 0.25);
  --shadow-card-hover: 0 4px 8px rgba(9, 30, 66, 0.25);
  --shadow-list: 0 2px 4px rgba(9, 30, 66, 0.15);
  --shadow-modal: 0 8px 16px rgba(9, 30, 66, 0.25);
  
  /* Layout */
  --list-width: 272px;
  --list-gap: 12px;
  --header-height: 64px;
  --titlebar-height: 28px;
}
```

## Component CSS Classes

### App Layout
```css
.app {
  font-family: var(--font-family);
  background: var(--color-background);
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-titlebar {
  height: var(--titlebar-height);
  background: var(--color-background);
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-gray-200);
}
```

### Board Header
```css
.board-header {
  height: var(--header-height);
  padding: 0 var(--spacing-xl);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.board-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  cursor: text;
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: background-color 0.15s ease;
}

.board-title:hover {
  background: var(--color-gray-50);
}

.add-list-btn {
  background: var(--color-primary);
  color: var(--color-surface);
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.15s ease;
}

.add-list-btn:hover {
  background: var(--color-primary-hover);
  transform: scale(1.02);
}
```

### Board Content
```css
.board-content {
  flex: 1;
  padding: var(--spacing-xl);
  overflow-x: auto;
  overflow-y: hidden;
}

.lists-container {
  display: flex;
  gap: var(--list-gap);
  height: 100%;
  min-width: fit-content;
}
```

### List Component
```css
.list {
  width: var(--list-width);
  background: var(--color-gray-100);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-list);
  display: flex;
  flex-direction: column;
  max-height: 100%;
}

.list-header {
  height: 44px;
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  cursor: text;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-menu {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  color: var(--color-gray-700);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: background-color 0.15s ease;
}

.list-menu:hover {
  background: var(--color-gray-200);
}
```

### Cards Container
```css
.cards-container {
  flex: 1;
  padding: 0 var(--spacing-sm);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.cards-container::-webkit-scrollbar {
  width: 6px;
}

.cards-container::-webkit-scrollbar-track {
  background: transparent;
}

.cards-container::-webkit-scrollbar-thumb {
  background: var(--color-gray-400);
  border-radius: 3px;
}

.cards-container::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-700);
}
```

### Card Component
```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all 0.15s ease;
}

.card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-1px);
}

.card:active {
  transform: translateY(0);
}

.card-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  line-height: 1.4;
  margin-bottom: var(--spacing-sm);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  font-size: var(--font-size-body);
  color: var(--color-gray-700);
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-metadata {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-small);
  color: var(--color-gray-700);
}
```

### Add Card Button
```css
.add-card-btn {
  margin: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: transparent;
  border: 1px dashed var(--color-gray-200);
  border-radius: var(--radius-md);
  color: var(--color-gray-700);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: all 0.15s ease;
}

.add-card-btn:hover {
  background: var(--color-surface);
  border-color: var(--color-gray-200);
  border-style: solid;
  box-shadow: var(--shadow-card);
  color: var(--color-gray-900);
}
```

## React Component Structure

### App.jsx
```jsx
import BoardHeader from './components/BoardHeader';
import BoardContent from './components/BoardContent';

function App() {
  return (
    <div className="app">
      <div className="app-titlebar">TrelloKiller</div>
      <BoardHeader title="Project Dashboard" />
      <BoardContent />
    </div>
  );
}
```

### BoardContent.jsx
```jsx
import List from './List';

function BoardContent() {
  const lists = [
    { id: 1, title: 'To Do', cards: [...] },
    { id: 2, title: 'In Progress', cards: [...] },
    { id: 3, title: 'Done', cards: [...] }
  ];

  return (
    <div className="board-content">
      <div className="lists-container">
        {lists.map(list => (
          <List key={list.id} {...list} />
        ))}
      </div>
    </div>
  );
}
```

## Responsive Breakpoints

```css
/* Large Desktop */
@media (min-width: 1400px) {
  .lists-container {
    justify-content: flex-start;
  }
}

/* Desktop */
@media (max-width: 1399px) and (min-width: 1000px) {
  .board-content {
    padding: var(--spacing-lg);
  }
}

/* Small Desktop */
@media (max-width: 999px) {
  .board-content {
    padding: var(--spacing-md);
  }
  
  .board-header {
    padding: 0 var(--spacing-lg);
  }
  
  .board-title {
    font-size: 20px;
  }
}
```

## Animation Guidelines

### Micro-interactions
```css
/* Button Press Animation */
.btn:active {
  transform: scale(0.98);
}

/* Card Lift on Hover */
.card:hover {
  transform: translateY(-2px);
}

/* Focus Ring Animation */
.focusable:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  transition: outline-color 0.2s ease;
}
```

### Drag and Drop States
```css
.card--dragging {
  transform: rotate(2deg);
  box-shadow: var(--shadow-modal);
  z-index: 1000;
  opacity: 0.9;
}

.list--drag-over {
  border: 2px solid var(--color-primary);
  background: rgba(2, 106, 167, 0.05);
}
```