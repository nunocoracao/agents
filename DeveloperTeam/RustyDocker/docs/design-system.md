# Design System Specification

## Color Palette

### Light Theme
```css
/* Primary Colors */
--primary: 212 70% 46%          /* Blue #2563eb */
--primary-foreground: 210 40% 98%

/* Background */
--background: 0 0% 100%         /* White */
--foreground: 222.2 84% 4.9%    /* Near black */

/* Card/Surface */
--card: 0 0% 100%
--card-foreground: 222.2 84% 4.9%

/* Muted/Secondary */
--muted: 210 40% 96%            /* Light gray */
--muted-foreground: 215.4 16.3% 46.9%

/* Border */
--border: 214.3 31.8% 91.4%     /* Light border */
--input: 214.3 31.8% 91.4%

/* Destructive */
--destructive: 0 84.2% 60.2%    /* Red */
--destructive-foreground: 210 40% 98%

/* Success */
--success: 142 76% 36%          /* Green */
--success-foreground: 210 40% 98%
```

### Dark Theme
```css
/* Primary Colors */
--primary: 212 70% 58%          /* Lighter blue */
--primary-foreground: 222.2 84% 4.9%

/* Background */
--background: 222.2 84% 4.9%    /* Dark gray */
--foreground: 210 40% 98%       /* Light gray */

/* Card/Surface */
--card: 222.2 84% 6%            /* Slightly lighter */
--card-foreground: 210 40% 98%

/* Muted/Secondary */
--muted: 217.2 32.6% 17.5%      /* Medium gray */
--muted-foreground: 215 20.2% 65.1%

/* Border */
--border: 217.2 32.6% 17.5%
--input: 217.2 32.6% 17.5%

/* Destructive */
--destructive: 0 62.8% 30.6%    /* Darker red */
--destructive-foreground: 210 40% 98%

/* Success */
--success: 142 76% 42%          /* Adjusted green */
--success-foreground: 210 40% 98%
```

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale
```css
/* Headings */
--text-4xl: 2.25rem;    /* 36px - Page titles */
--text-3xl: 1.875rem;   /* 30px - Section headers */
--text-2xl: 1.5rem;     /* 24px - Card titles */
--text-xl: 1.25rem;     /* 20px - Subsections */
--text-lg: 1.125rem;    /* 18px - Large body */

/* Body */
--text-base: 1rem;      /* 16px - Default body */
--text-sm: 0.875rem;    /* 14px - Secondary text */
--text-xs: 0.75rem;     /* 12px - Captions */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing System

### Grid: 8px Base Unit
```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
```

## Border Radius
```css
--radius-sm: 0.25rem;   /* 4px - Small elements */
--radius: 0.375rem;     /* 6px - Default */
--radius-md: 0.5rem;    /* 8px - Cards */
--radius-lg: 0.75rem;   /* 12px - Large cards */
--radius-xl: 1rem;      /* 16px - Modals */
```

## Shadows
```css
/* Light Theme */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Dark Theme */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.2);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
```

## Component Sizing

### Button Heights
```css
--button-sm: 2rem;      /* 32px */
--button-default: 2.5rem; /* 40px */
--button-lg: 3rem;      /* 48px */
```

### Input Heights
```css
--input-sm: 2rem;       /* 32px */
--input-default: 2.5rem; /* 40px */
--input-lg: 3rem;       /* 48px */
```

## Layout Specifications

### Sidebar Width
- **Collapsed**: 60px
- **Expanded**: 240px
- **Transition**: 200ms ease-in-out

### Content Areas
- **Max width**: 1400px
- **Padding**: 24px
- **Gap between sections**: 32px

### macOS Specific
- **Window chrome**: Native Tauri window controls
- **Vibrancy**: Background blur effects when supported
- **Scrollbars**: Native macOS scrollbar styling