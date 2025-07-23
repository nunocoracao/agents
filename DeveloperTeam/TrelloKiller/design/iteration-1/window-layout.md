# Main Application Window Layout

## Overall Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────┐ │ <- Window Chrome (Mac titlebar)
│ │  ●  ●  ●                    TrelloKiller                        │ │    Height: 28px
│ └─────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │                        Board Header                             │ │ <- Board Header
│ │                     "Project Dashboard"                        │ │    Height: 64px
│ └─────────────────────────────────────────────────────────────────┘ │    Background: #FAFBFC
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │                                                                 │ │
│ │                        Board Content                            │ │ <- Main Board Area
│ │                                                                 │ │    Background: #FAFBFC
│ │  ┌────────────┐  ┌────────────┐  ┌────────────┐                │ │    Padding: 24px
│ │  │    List    │  │    List    │  │    List    │                │ │
│ │  │   "To Do"  │  │"In Progress"│  │   "Done"   │                │ │
│ │  │            │  │            │  │            │                │ │
│ │  │  [Card 1]  │  │  [Card 3]  │  │  [Card 5]  │                │ │
│ │  │  [Card 2]  │  │  [Card 4]  │  │            │                │ │
│ │  │            │  │            │  │            │                │ │
│ │  └────────────┘  └────────────┘  └────────────┘                │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Window Specifications

### Minimum Window Size
- **Width**: 1000px
- **Height**: 700px

### Default Window Size
- **Width**: 1280px
- **Height**: 800px

### Window Properties
- **Resizable**: Yes
- **Title Bar Style**: `hiddenInset` (Mac native with integrated controls)
- **Background**: `#FAFBFC`

## Layout Behavior

### Responsive Breakpoints
- **Large Desktop**: 1400px+ (4+ lists visible)
- **Desktop**: 1000-1399px (3 lists comfortable)
- **Small Desktop**: 800-999px (2-3 lists with horizontal scroll)

### Horizontal Scrolling
- Lists container scrolls horizontally when content exceeds viewport
- Smooth scrolling with momentum (Mac-style)
- Scroll indicators fade in/out automatically

## Mac-Native Elements

### Title Bar Integration
- Traffic light buttons (red, yellow, green) in top-left
- Title centered in title bar area
- Unified title bar and content appearance

### Window Controls
- Standard Mac window management
- Support for full-screen mode
- Proper window state restoration