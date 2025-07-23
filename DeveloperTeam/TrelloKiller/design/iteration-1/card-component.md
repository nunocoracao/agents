# Card Component Design

## Basic Card Mockup

```
┌────────────────────────────────────────┐
│ Design user interface for dashboard    │ <- Title
│                                        │
│ Create wireframes and mockups for the  │ <- Description  
│ main dashboard layout...               │    (truncated)
│                                        │
│ 📅 Due: Dec 15    🏷️ Design    👤 JD   │ <- Metadata
└────────────────────────────────────────┘
```

## Card Container Specifications

### Dimensions
- **Width**: 256px (list width - 16px padding)
- **Min Height**: 60px
- **Max Height**: 200px (with scroll for long content)
- **Background**: `#FFFFFF`
- **Border Radius**: 6px
- **Box Shadow**: `0 1px 2px rgba(9, 30, 66, 0.25)`

### Spacing
- **Padding**: 12px
- **Margin Bottom**: 8px (between cards)

## Card Content Layout

### Title Section
```
Design user interface for dashboard
```
- **Font**: 16px, Weight 500, Color `#172B4D`
- **Line Height**: 1.4
- **Max Lines**: 2 (truncate with ellipsis)
- **Margin Bottom**: 8px

### Description Section (Optional)
```
Create wireframes and mockups for the
main dashboard layout...
```
- **Font**: 14px, Weight 400, Color `#5E6C84`
- **Line Height**: 1.4  
- **Max Lines**: 3 (truncate with ellipsis)
- **Margin Bottom**: 12px
- **Show only if present**

### Metadata Row
```
┌─────────────────────────────────────────┐
│ 📅 Dec 15   🏷️ Design   👤 JD          │
└─────────────────────────────────────────┘
```
- **Height**: 24px
- **Display**: Flex, space between elements
- **Gap**: 12px between items
- **Font**: 12px, Weight 400

## Sample Cards Content

### Card 1: "Design user interface"
```
┌────────────────────────────────────────┐
│ Design user interface                  │
│                                        │
│ Create wireframes and mockups for the  │
│ main dashboard layout including...     │
│                                        │
│ 📅 Due: Dec 15    🏷️ Design            │
└────────────────────────────────────────┘
```

### Card 2: "Setup development environment"  
```
┌────────────────────────────────────────┐
│ Setup development environment          │
│                                        │
│ 🏷️ Backend    👤 Alex                  │
└────────────────────────────────────────┘
```

### Card 3: "Implement drag and drop"
```
┌────────────────────────────────────────┐
│ Implement drag and drop functionality  │
│                                        │
│ Add drag and drop support for cards    │
│ between lists using react-beautiful... │
│                                        │
│ 👤 Jordan    ⏰ In Progress            │
└────────────────────────────────────────┘
```

### Card 4: "API Integration"
```
┌────────────────────────────────────────┐
│ API Integration                        │
│                                        │
│ 🏷️ Backend    ⏰ In Progress           │
└────────────────────────────────────────┘
```

### Card 5: "Project setup" (Completed)
```
┌────────────────────────────────────────┐
│ ✅ Project setup and planning          │
│                                        │
│ Initial project structure and team     │
│ coordination completed successfully    │
│                                        │
│ 👤 Team    ✅ Completed Dec 10         │
└────────────────────────────────────────┘
```

## Metadata Elements

### Due Date
- **Icon**: 📅 (or calendar icon)
- **Format**: "Dec 15" or "Overdue" (red)
- **Color**: `#5E6C84` (normal), `#DE350B` (overdue)

### Labels
- **Icon**: 🏷️ (or tag icon)  
- **Background**: `#E3FCEF` (light green)
- **Text**: `#00875A` (dark green)
- **Padding**: 2px 6px
- **Border Radius**: 3px
- **Font**: 11px, Weight 500

### Assignee
- **Icon**: 👤 (or avatar image)
- **Format**: Initials or small avatar
- **Size**: 20px × 20px
- **Background**: `#026AA7` (if initials)
- **Border Radius**: 50% (circular)

### Status Indicators
- **In Progress**: ⏰ "In Progress" (orange)
- **Completed**: ✅ "Completed" (green)  
- **Overdue**: ⚠️ "Overdue" (red)

## Interactive States

### Default State
- **Background**: `#FFFFFF`
- **Shadow**: `0 1px 2px rgba(9, 30, 66, 0.25)`
- **Border**: None

### Hover State
- **Shadow**: `0 4px 8px rgba(9, 30, 66, 0.25)`
- **Transform**: `translateY(-1px)`
- **Transition**: `all 0.15s ease`
- **Cursor**: pointer

### Active/Click State
- **Transform**: `translateY(0px)`
- **Shadow**: `0 2px 4px rgba(9, 30, 66, 0.25)`

### Dragging State
- **Transform**: `rotate(2deg)`
- **Shadow**: `0 8px 16px rgba(9, 30, 66, 0.3)`
- **Z-index**: 1000
- **Opacity**: 0.9

### Focus State (Keyboard)
- **Outline**: 2px solid `#026AA7`
- **Outline Offset**: 2px

## Responsive Behavior

### Full Width (272px list)
- All content fits comfortably
- Full metadata row visible

### Narrow Width (< 250px)
- Metadata stacks vertically
- Title may wrap to more lines
- Description shows fewer lines

## Accessibility

### Keyboard Navigation
- **Focusable**: tabindex="0"
- **Enter/Space**: Opens card details
- **Arrow Keys**: Navigate between cards

### Screen Reader Support
- **Role**: "button" or "article"
- **Label**: Full card title + summary
- **Status**: Announced for completed/overdue items

### Color Contrast
- All text meets WCAG AA standards
- Status colors have sufficient contrast
- Focus indicators are clearly visible