# Development Guide

## Project Overview

TrelloKiller is a modern Trello clone built with Electron and React, designed specifically for Mac with native styling and smooth performance.

## Technology Stack

- **Desktop Framework**: Electron 22.x
- **Frontend Framework**: React 18.x
- **Build Tool**: Create React App
- **Styling**: CSS Custom Properties (CSS Variables)
- **Package Manager**: npm

## Development Workflow

### Initial Setup

1. **Install Node.js** (v16+) and npm
2. **Clone repository** and navigate to project directory
3. **Install dependencies**: `npm install`
4. **Start development**: `npm run dev`

### Development Commands

```bash
# Start both React and Electron in development mode
npm run dev

# Start React development server only (port 3000)
npm start

# Start Electron with development settings
npm run electron-dev

# Build React app for production
npm run build

# Build and package the Electron app for distribution
npm run dist

# Run tests
npm test
```

### File Structure

```
src/
├── App.js              # Main React component
├── App.css             # Global styles and design system
├── index.js            # React entry point
└── components/
    ├── BoardHeader.js  # Board title and "Add List" button
    ├── BoardContent.js # Main board layout with sample data
    ├── List.js         # List container with cards
    └── Card.js         # Individual card component

public/
├── electron.js         # Main Electron process
└── index.html          # HTML template

design/                 # Design specifications and mockups
```

## Component Architecture

### App.js
- Root component that renders the main layout
- Includes title bar, board header, and board content

### BoardHeader.js
- Displays board title with icon
- Contains "Add List" action button
- Implements hover states and Mac-native styling

### BoardContent.js
- Contains sample data for three lists
- Renders list components in horizontal layout
- Manages responsive behavior

### List.js
- Renders list header with title and menu button
- Contains scrollable cards container
- Includes "Add a card" button

### Card.js
- Displays card title, description, and metadata
- Supports various metadata types (dates, labels, assignees, status)
- Implements hover animations and focus states

## Styling System

### CSS Custom Properties
All design tokens are defined as CSS custom properties in `App.css`:

```css
:root {
  --color-primary: #026AA7;
  --color-background: #FAFBFC;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --spacing-md: 12px;
  --shadow-card: 0 1px 2px rgba(9, 30, 66, 0.25);
  /* ... more tokens */
}
```

### Component Classes
- **BEM-like naming**: `.card`, `.card-title`, `.card-metadata`
- **State classes**: `.card:hover`, `.completed`, `.in-progress`
- **Responsive utilities**: Media queries for different screen sizes

### Mac-Native Features
- **Title Bar**: `titleBarStyle: 'hiddenInset'` for native Mac appearance
- **System Fonts**: `-apple-system` font stack
- **Scrollbars**: Custom webkit-scrollbar styles matching Mac
- **Window Controls**: Native traffic light buttons

## Sample Data Structure

The app uses static sample data in `BoardContent.js`:

```javascript
const lists = [
  {
    id: 1,
    title: 'To Do',
    cards: [
      {
        id: 1,
        title: 'Design user interface',
        description: 'Create wireframes and mockups...',
        metadata: [
          { type: 'date', value: 'Dec 15', overdue: false },
          { type: 'label', value: 'Design' }
        ]
      }
    ]
  }
];
```

### Metadata Types
- **date**: Due dates with calendar icon
- **label**: Colored tags for categorization
- **assignee**: User assignments with avatar
- **status**: Progress indicators (completed, in-progress, overdue)

## Responsive Design

### Breakpoints
- **Large Desktop** (1400px+): Full layout with generous spacing
- **Desktop** (1000-1399px): Comfortable layout for 3 lists
- **Small Desktop** (<1000px): Reduced padding, horizontal scroll

### Layout Behavior
- **Lists**: Fixed width (272px) with horizontal scrolling
- **Cards**: Flexible height with text truncation
- **Metadata**: Responsive wrapping on narrow screens

## Accessibility Features

### Keyboard Navigation
- Tab order through interactive elements
- Focus indicators with blue outline
- Keyboard activation for buttons

### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Color contrast compliance (WCAG AA)

### Visual Accessibility
- High contrast ratios for all text
- Clear focus indicators
- Consistent visual hierarchy

## Performance Considerations

### Electron Optimizations
- Context isolation enabled for security
- Node integration disabled in renderer
- Preload scripts for secure IPC (future enhancement)

### React Optimizations
- Functional components with hooks
- Minimal re-renders with proper key props
- CSS-in-JS avoided for better performance

### Animation Performance
- CSS transforms for smooth 60fps animations
- Hardware acceleration with `translateY` and `scale`
- Minimal repaints and reflows

## Testing Strategy

### Manual Testing Checklist
- [ ] App launches without errors
- [ ] All components render correctly
- [ ] Hover states work on cards and buttons
- [ ] Scrolling works in cards containers
- [ ] Window resizing maintains layout
- [ ] Mac-native features work (title bar, menu)

### Future Automated Testing
- Unit tests for individual components
- Integration tests for user interactions
- E2E tests for complete workflows
- Visual regression tests for design consistency

## Deployment

### Development Build
```bash
npm run dev
```
- Runs React on localhost:3000
- Electron loads from development server
- Hot reloading enabled
- DevTools available

### Production Build
```bash
npm run build && npm run electron
```
- Creates optimized React build
- Electron loads from built files
- Ready for packaging

### Distribution Package
```bash
npm run dist
```
- Creates .dmg installer for Mac
- Includes all dependencies
- App signed and notarized (configure separately)

## Common Issues

### Port Conflicts
If port 3000 is in use, React will prompt to use a different port. Update the `startUrl` in `electron.js` accordingly.

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear React build cache: `rm -rf build && npm run build`

### Electron Issues
- Check Node.js version compatibility
- Verify Electron version supports your macOS version
- Check console for renderer process errors

## Next Development Phase

### Priority Features
1. **Edit Functionality**: Make titles and descriptions editable
2. **CRUD Operations**: Add, edit, delete cards and lists
3. **Drag and Drop**: Card movement between lists
4. **Data Persistence**: Local storage or database integration

### Technical Improvements
1. **State Management**: Redux or Context API
2. **Data Layer**: JSON file or database
3. **Testing**: Jest and React Testing Library
4. **Error Handling**: User-friendly error messages

---

This guide provides the foundation for continued development of the TrelloKiller application.