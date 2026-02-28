/**
 * Typography Design System
 * 
 * Consistent font sizes across the application
 * Based on a modular scale with a 1.25 ratio
 */

export const typography = {
  // Display (Hero sections)
  display: {
    xl: 'text-6xl font-bold tracking-tight', // 60px
    lg: 'text-5xl font-bold tracking-tight', // 48px
    md: 'text-4xl font-bold tracking-tight', // 36px
  },
  
  // Headings
  heading: {
    h1: 'text-3xl font-bold tracking-tight', // 30px
    h2: 'text-2xl font-bold tracking-tight', // 24px
    h3: 'text-xl font-semibold tracking-tight', // 20px
    h4: 'text-lg font-semibold', // 18px
    h5: 'text-base font-semibold', // 16px
    h6: 'text-sm font-semibold', // 14px
  },
  
  // Body text
  body: {
    xl: 'text-xl', // 20px
    lg: 'text-lg', // 18px
    base: 'text-base', // 16px
    sm: 'text-sm', // 14px
    xs: 'text-xs', // 12px
  },
  
  // Special
  label: 'text-sm font-medium',
  caption: 'text-xs text-muted-foreground',
  overline: 'text-xs uppercase tracking-wider font-semibold',
  
  // Code
  code: {
    inline: 'text-sm font-mono bg-muted px-1 py-0.5 rounded',
    block: 'text-sm font-mono',
  },
} as const;

// Font weight utilities
export const fontWeight = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

// Letter spacing utilities
export const letterSpacing = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const;
