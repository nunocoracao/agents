# Complete Board View Mockup

## Full Application Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │  ●  ●  ●                                    TrelloKiller                                                        │ │ <- Mac Title Bar
│ └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │   (Height: 28px)
│ ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │   📋 Project Dashboard                                                                      [+ Add List]       │ │ <- Board Header  
│ └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │   (Height: 64px)
│ ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                                                                 │ │
│ │  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐                        │ │
│ │  │ To Do                ••• │  │ In Progress          ••• │  │ Done                 ••• │                        │ │ <- List Headers
│ │  ├─────────────────────────┤  ├─────────────────────────┤  ├─────────────────────────┤                        │ │
│ │  │                         │  │                         │  │                         │                        │ │
│ │  │ ┌─────────────────────┐ │  │ ┌─────────────────────┐ │  │ ┌─────────────────────┐ │                        │ │
│ │  │ │ Design user         │ │  │ │ Implement drag and  │ │  │ │ ✅ Project setup    │ │                        │ │
│ │  │ │ interface           │ │  │ │ drop functionality  │ │  │ │ and planning        │ │                        │ │
│ │  │ │                     │ │  │ │                     │ │  │ │                     │ │                        │ │
│ │  │ │ Create wireframes   │ │  │ │ Add drag and drop   │ │  │ │ Initial project     │ │                        │ │
│ │  │ │ and mockups for...  │ │  │ │ support for cards   │ │  │ │ structure and team  │ │                        │ │
│ │  │ │                     │ │  │ │ between lists...    │ │  │ │ coordination        │ │                        │ │
│ │  │ │ 📅 Dec 15  🏷️ Design │ │  │ │                     │ │  │ │                     │ │                        │ │
│ │  │ └─────────────────────┘ │  │ │ 👤 Jordan  ⏰ In Prog│ │  │ │ 👤 Team  ✅ Dec 10   │ │                        │ │
│ │  │                         │  │ └─────────────────────┘ │  │ └─────────────────────┘ │                        │ │
│ │  │ ┌─────────────────────┐ │  │                         │  │                         │                        │ │
│ │  │ │ Setup development   │ │  │                         │  │                         │                        │ │
│ │  │ │ environment         │ │  │                         │  │                         │                        │ │
│ │  │ │                     │ │  │                         │  │                         │                        │ │
│ │  │ │ 🏷️ Backend  👤 Alex   │ │  │                         │  │                         │                        │ │
│ │  │ └─────────────────────┘ │  │                         │  │                         │                        │ │
│ │  │                         │  │                         │  │                         │                        │ │
│ │  │ + Add a card            │  │ + Add a card            │  │ + Add a card            │                        │ │
│ │  │                         │  │                         │  │                         │                        │ │
│ │  └─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘                        │ │
│ │                                                                                                                 │ │
│ │                                                                                                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Layout Dimensions

### Window
- **Total Width**: 1280px (default)
- **Total Height**: 800px (default)
- **Background**: `#FAFBFC`

### Content Areas
- **Title Bar**: 1280px × 28px
- **Board Header**: 1280px × 64px  
- **Board Content**: 1280px × 708px
- **Content Padding**: 24px on all sides

### Lists Layout
- **Available Width**: 1232px (1280px - 48px padding)
- **List Width**: 272px each
- **List Gap**: 12px between lists
- **Total for 3 Lists**: 272px × 3 + 12px × 2 = 840px
- **Remaining Space**: 392px (for future lists or centering)

## Visual Hierarchy

### Primary Elements (Highest Contrast)
1. **Board Title**: `#172B4D`, 24px, Weight 600
2. **List Titles**: `#172B4D`, 16px, Weight 500  
3. **Card Titles**: `#172B4D`, 16px, Weight 500

### Secondary Elements
1. **Card Descriptions**: `#5E6C84`, 14px, Weight 400
2. **Metadata Text**: `#5E6C84`, 12px, Weight 400
3. **Action Buttons**: `#5E6C84`, 14px, Weight 400

### Interactive Elements
1. **Primary Button** (Add List): `#026AA7` background
2. **Card Hover States**: Elevated shadows
3. **Focusable Elements**: Blue focus rings

## Spacing System in Action

### Macro Layout
- **Window Padding**: 24px
- **Header Height**: 64px  
- **List Gaps**: 12px
- **Section Margins**: 24px

### Micro Layout  
- **Card Padding**: 12px
- **Card Gaps**: 8px
- **Text Line Height**: 1.4
- **Icon Spacing**: 4px-8px

## Color Usage Throughout

### Backgrounds
- **App Background**: `#FAFBFC`
- **List Background**: `#F1F2F4`
- **Card Background**: `#FFFFFF`
- **Button Background**: `#026AA7`

### Text Colors
- **Primary Text**: `#172B4D`
- **Secondary Text**: `#5E6C84`  
- **Meta Text**: `#5E6C84`
- **Button Text**: `#FFFFFF`

### Status Colors
- **Success/Done**: `#36B37E`
- **In Progress**: `#FFAB00`
- **Overdue**: `#DE350B`
- **Labels**: Various (Design: `#E3FCEF`/`#00875A`)

## Shadows and Depth

### Elevation Levels
1. **Cards**: `0 1px 2px rgba(9, 30, 66, 0.25)` (Level 1)
2. **Lists**: `0 2px 4px rgba(9, 30, 66, 0.15)` (Level 2)
3. **Card Hover**: `0 4px 8px rgba(9, 30, 66, 0.25)` (Level 3)
4. **Dragging**: `0 8px 16px rgba(9, 30, 66, 0.3)` (Level 4)

### Border Usage
- **Header Border**: 1px solid `#DFE1E6`
- **List Header Border**: 1px solid `#DFE1E6`
- **Add Card Border**: 1px dashed `#DFE1E6`
- **Focus Borders**: 2px solid `#026AA7`

## Mac-Native Design Elements

### Window Integration
- **Title Bar**: Native Mac styling with traffic lights
- **Window Controls**: Standard Mac behavior
- **Scrollbars**: Mac-style thin scrollbars

### Typography
- **System Font**: San Francisco via `-apple-system`
- **Weight Scale**: Mac-appropriate font weights
- **Line Heights**: Mac-optimized readability

### Interactions
- **Hover Effects**: Subtle and Mac-like
- **Focus States**: Clear blue focus rings
- **Animations**: Smooth 60fps transitions
- **Scrolling**: Native momentum scrolling