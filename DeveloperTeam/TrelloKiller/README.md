# TrelloKiller - Electron Desktop App

A modern Trello clone built with Electron and React, designed specifically for Mac with native styling and smooth performance.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with Mac-native styling
- 📋 **Board Management**: Organize tasks in customizable boards with lists and cards
- 🎯 **Task Organization**: Create, edit, and organize cards with rich metadata
- 💻 **Desktop Native**: Built with Electron for seamless Mac integration
- ⚡ **Performance**: Optimized for smooth interactions and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- macOS (for development and testing)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd TrelloKiller
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```
   This will start both the React development server and the Electron app with hot reloading.

### Alternative Development Commands

- **Start React only**: `npm start`
- **Start Electron only**: `npm run electron-dev`
- **Build for production**: `npm run build`
- **Package the app**: `npm run dist`

## Project Structure

```
TrelloKiller/
├── public/
│   ├── electron.js          # Main Electron process
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── BoardHeader.js  # Board title and actions
│   │   ├── BoardContent.js # Main board layout
│   │   ├── List.js         # List component
│   │   └── Card.js         # Card component
│   ├── App.js              # Main React component
│   ├── App.css             # Global styles
│   └── index.js            # React entry point
├── design/                 # Design specifications
└── package.json           # Dependencies and scripts
```

## Design System

The app follows a comprehensive design system with:

- **Colors**: Professional blue (`#026AA7`) with neutral grays
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent 8px-based spacing scale
- **Components**: Reusable, accessible components
- **Animations**: Smooth 60fps transitions

## Current Features (Iteration 1)

### ✅ Implemented
- [x] Electron app structure with Mac-native window
- [x] React frontend with component architecture
- [x] Board header with title and "Add List" button
- [x] Three sample lists: "To Do", "In Progress", "Done"
- [x] Sample cards with titles, descriptions, and metadata
- [x] Complete styling from design system
- [x] Responsive layout
- [x] Hover states and interactions
- [x] Mac-native scrollbars and styling

### 🔄 Sample Data
The app currently displays static sample data including:
- **To Do List**: Design tasks and development setup
- **In Progress List**: Drag and drop implementation
- **Done List**: Completed project setup

### 📋 Card Features
Cards display rich information including:
- Titles and descriptions
- Due dates with calendar icons
- Labels with color coding
- Assignee information
- Status indicators (completed, in progress, overdue)

## Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both React and Electron in development mode |
| `npm start` | Start React development server only |
| `npm run electron-dev` | Start Electron with development settings |
| `npm run build` | Build React app for production |
| `npm run dist` | Build and package the Electron app |
| `npm test` | Run test suite |

## Architecture

### Electron Configuration
- **Main Process**: Manages application lifecycle and native OS integration
- **Renderer Process**: Runs React application in browser context
- **IPC**: Inter-process communication for native features
- **Security**: Context isolation and disabled node integration

### React Structure
- **Component-based**: Modular, reusable UI components
- **CSS Custom Properties**: Design tokens for consistent styling
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: WCAG compliant with keyboard navigation

## Design Implementation

The app faithfully implements the designer's vision:

- **Mac Integration**: Native title bar, window controls, and system fonts
- **Visual Hierarchy**: Clear typography scale and spacing system
- **Interactive States**: Hover effects, focus indicators, and smooth animations
- **Color System**: Professional blue theme with semantic colors
- **Layout Grid**: Fixed list widths with responsive container

## Next Steps (Future Iterations)

### Planned Features
- [ ] Create, edit, and delete cards
- [ ] Drag and drop functionality between lists
- [ ] Add new lists and boards
- [ ] Local data persistence
- [ ] Search and filtering
- [ ] Keyboard shortcuts
- [ ] Export/import functionality

### Technical Improvements
- [ ] State management (Redux or Context API)
- [ ] Data persistence layer
- [ ] Unit and integration tests
- [ ] Performance optimizations
- [ ] Error handling and validation

## Browser Compatibility

The app is built with modern web standards and supports:
- Chrome/Chromium (Electron runtime)
- Modern JavaScript (ES2020+)
- CSS Grid and Flexbox
- CSS Custom Properties

## Contributing

1. Follow the existing code style and structure
2. Implement designs according to the specification files in `/design/`
3. Test thoroughly on macOS
4. Ensure responsive behavior across screen sizes
5. Maintain accessibility standards

## License

This project is developed as part of a design and development exercise.

---

**Built with ❤️ using Electron + React for Mac**