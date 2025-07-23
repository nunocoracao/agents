# List Component Design

## Visual Mockup

```
┌────────────────────────────────┐
│ To Do                    •••   │ <- List Header
├────────────────────────────────┤
│                                │
│ ┌────────────────────────────┐ │
│ │ Design user interface      │ │ <- Card 1
│ │                            │ │
│ │ 📅 Due: Dec 15             │ │
│ └────────────────────────────┘ │
│                                │
│ ┌────────────────────────────┐ │
│ │ Setup development env      │ │ <- Card 2
│ │                            │ │
│ │ 🏷️ Backend                 │ │
│ └────────────────────────────┘ │
│                                │
│ + Add a card                   │ <- Add Card Button
│                                │
└────────────────────────────────┘
```

## List Container Specifications

### Dimensions
- **Width**: 272px (fixed)
- **Min Height**: 120px
- **Max Height**: Viewport height - 120px (with scroll)
- **Background**: `#F1F2F4`
- **Border Radius**: 8px
- **Box Shadow**: `0 2px 4px rgba(9, 30, 66, 0.15)`

### Layout
- **Margin**: 0 6px (12px total gap between lists)
- **Padding**: 0
- **Overflow**: Hidden (cards container scrolls internally)

## List Header

```
┌────────────────────────────────┐
│ To Do                    •••   │
└────────────────────────────────┘

Properties:
- Height: 44px
- Padding: 12px 16px
- Background: transparent
- Border Bottom: 1px solid #DFE1E6
```

### Title Text
- **Font**: 16px, Weight 500, Color `#172B4D`
- **Max Width**: 200px (truncate with ellipsis)
- **Cursor**: text (editable on click)

### Menu Button (•••)
- **Size**: 24px × 24px
- **Color**: `#5E6C84`
- **Hover**: Background `#DFE1E6`, Border Radius 4px
- **Position**: Absolute right, 12px from edge

## Cards Container

```
┌────────────────────────────────┐
│                                │
│ ┌────────────────────────────┐ │
│ │         Card 1             │ │
│ └────────────────────────────┘ │
│                                │
│ ┌────────────────────────────┐ │
│ │         Card 2             │ │
│ └────────────────────────────┘ │
│                                │
└────────────────────────────────┘
```

### Container Properties
- **Padding**: 0 8px
- **Gap**: 8px between cards
- **Overflow-Y**: Auto (custom scrollbar)
- **Max Height**: Calculated (remaining space)

### Custom Scrollbar (Mac-style)
- **Width**: 6px
- **Track**: Transparent
- **Thumb**: `#B3BAC5`, Border Radius 3px
- **Thumb Hover**: `#5E6C84`

## Add Card Button

```
┌────────────────────────────────┐
│ + Add a card                   │
└────────────────────────────────┘

Properties:
- Height: 32px
- Margin: 8px
- Padding: 8px 12px
- Background: transparent
- Color: #5E6C84
- Font: 14px, Weight 400
- Border Radius: 6px
- Border: 1px dashed #DFE1E6
```

### Hover State
- **Background**: `#FFFFFF`
- **Color**: `#172B4D`
- **Border**: 1px solid `#DFE1E6`
- **Shadow**: `0 1px 2px rgba(9, 30, 66, 0.15)`

## Three Example Lists

### List 1: "To Do"
```
Title: "To Do"
Cards: 2
- "Design user interface" (with due date)
- "Setup development environment" (with label)
```

### List 2: "In Progress"
```
Title: "In Progress"  
Cards: 1
- "Implement drag and drop functionality" (with assignee)
```

### List 3: "Done"
```
Title: "Done"
Cards: 1
- "Project setup and initial planning" (completed style)
```

## Interactive States

### List Header Hover
- Slight background tint: `#EBEDF0`
- Menu button becomes more visible

### List Header Edit Mode
- Title becomes input field
- Focus border: 2px solid `#026AA7`
- Background: `#FFFFFF`

### Drag and Drop States
- **Dragging Over**: Border 2px solid `#026AA7`
- **Drop Zone Active**: Background `#E3FCEF`
- **Card Dragging**: List highlights potential drop zones

## Responsive Behavior

### Standard Desktop (1200px+)
- All three lists visible side by side
- Full 272px width maintained

### Medium Desktop (900-1199px)
- Lists slightly narrower (250px)
- Still fits 3 lists comfortably

### Small Desktop (< 900px)
- Lists maintain 272px width
- Horizontal scroll for additional lists
- Snap scrolling to list boundaries