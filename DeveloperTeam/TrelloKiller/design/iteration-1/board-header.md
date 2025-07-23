# Board Header Component

## Visual Mockup

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   📋 Project Dashboard                           [+ Add List]       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Detailed Specifications

### Layout
- **Height**: 64px
- **Padding**: 0 24px
- **Background**: `#FAFBFC`
- **Border Bottom**: 1px solid `#DFE1E6`

### Board Title Section
```
┌─────────────────────────────────────┐
│ 📋 Project Dashboard                │ <- Left aligned
│                                     │
│ Font: 24px, Weight 600, #172B4D     │
│ Icon: 20px, margin-right: 12px      │
└─────────────────────────────────────┘
```

### Action Button (Add List)
```
┌─────────────────┐
│  + Add List     │ <- Right aligned
└─────────────────┘

Properties:
- Background: #026AA7
- Color: #FFFFFF
- Font: 14px, Weight 500
- Padding: 8px 16px
- Border Radius: 6px
- Height: 32px
```

## Interactive States

### Board Title Hover
- Cursor changes to text cursor
- Subtle background highlight: `#F7F8F9`
- Border radius: 4px around text area

### Board Title Edit Mode
- Text becomes editable input field
- Focus border: 2px solid `#026AA7`
- Save on Enter, Cancel on Escape

### Add List Button States
- **Default**: Background `#026AA7`
- **Hover**: Background `#0052CC`, slight scale (1.02x)
- **Active**: Background `#0052CC`, scale (0.98x)
- **Focus**: Focus ring 2px `#026AA7` with 2px offset

## Responsive Behavior

### Large Screens (1200px+)
- Full layout as shown above
- Plenty of space for long board titles

### Medium Screens (800-1199px)
- Board title truncated with ellipsis if too long
- Add List button remains visible

### Small Screens (< 800px)
- Board title max-width to prevent overlap
- Add List button may show icon only: `+`

## Accessibility

### Keyboard Navigation
- Tab order: Board title → Add List button
- Board title editable with Enter key
- Add List activated with Enter/Space

### Screen Reader Support
- Board title has `role="heading"` and `aria-level="1"`
- Add List button has descriptive `aria-label`
- Edit state announced to screen readers

## Animation Details

### Smooth Transitions
- Button hover: `transition: all 0.15s ease`
- Title edit mode: `transition: border-color 0.2s ease`
- Icon rotation on interactions: `transition: transform 0.2s ease`

### Micro-interactions
- Button slightly lifts on hover (subtle shadow increase)
- Icon bounces slightly when button is clicked
- Focus states appear/disappear with smooth transitions