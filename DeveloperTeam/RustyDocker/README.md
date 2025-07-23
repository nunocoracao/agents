# RustyDocker

A modern Docker Desktop clone built with Tauri 2.0 and React 18, featuring a native macOS experience.

## Features

- **Container Management**: View, start, stop, and manage Docker containers
- **Image Management**: Browse, pull, and manage Docker images
- **Volume Management**: Create and manage Docker volumes
- **Network Management**: Configure and manage Docker networks
- **Development Environments**: (Coming Soon) Create isolated dev environments
- **Settings**: Configure Docker and application preferences
- **Native macOS UI**: Transparent title bar and native feel

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Rust with Tauri 2.0
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite

## Prerequisites

- Node.js 18+ and npm
- Rust 1.70+
- Tauri CLI

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd RustyDocker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development mode:
   ```bash
   npm run tauri dev
   ```

4. Build for production:
   ```bash
   npm run tauri build
   ```

## Project Structure

```
RustyDocker/
├── src/                    # React frontend source
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   └── layout/        # Layout components
│   ├── pages/             # Page components
│   ├── lib/               # Utility functions
│   └── main.tsx           # Application entry point
├── src-tauri/             # Rust backend source
│   ├── src/               # Rust source files
│   └── tauri.conf.json    # Tauri configuration
├── docs/                  # Design specifications
└── package.json           # Node.js dependencies
```

## Development

The application follows a component-based architecture with:

- **Layout Components**: MainLayout, Sidebar, TitleBar
- **Page Components**: One for each main section (Containers, Images, etc.)
- **UI Components**: Reusable shadcn/ui components
- **Routing**: React Router for navigation

## Design System

The application uses a carefully crafted design system with:

- **Colors**: Light and dark theme support
- **Typography**: Apple system fonts for native feel
- **Spacing**: Consistent spacing scale
- **Components**: Modern, accessible UI components

## macOS Integration

- Transparent title bar with custom styling
- Native scrollbars and visual effects
- System font integration
- Proper window controls and behavior

## License

[License information to be added]