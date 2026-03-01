# Button Design Guidelines

## Overview
This document outlines the button design system used throughout the Data Communication Lab project. All buttons should follow these guidelines to ensure consistency and maintain a professional appearance.

## Button Variants

### 1. **Solid (Primary) Buttons**
- **Purpose**: Primary actions, main CTAs (Call-to-Action)
- **Usage**: Sign Up, Create Account, Submit, Save
- **Properties**: 
  - Filled background with high contrast
  - Most prominent button on the page
  - Should be used sparingly (typically one per page section)

```tsx
<Button colorScheme="blue">Primary Action</Button>
```

### 2. **Outline Buttons**
- **Purpose**: Secondary actions, alternative options
- **Usage**: Cancel, Delete, Log Out, Secondary CTAs
- **Properties**: 
  - Transparent background with colored border
  - Less prominent than solid buttons
  - Good for destructive actions when using red color

```tsx
<Button variant="outline" colorScheme="blue">Secondary Action</Button>
<Button variant="outline" colorScheme="red">Delete</Button>
```

### 3. **Ghost Buttons**
- **Purpose**: Tertiary actions, navigation items
- **Usage**: Navigation links, Log In, Dashboard, Settings
- **Properties**: 
  - Transparent background, no border
  - Subtle hover state
  - Minimal visual weight

```tsx
<Button variant="ghost">Tertiary Action</Button>
```

### 4. **Plain Buttons**
- **Purpose**: Text-only actions, inline links
- **Usage**: "Learn more", "View details", inline actions
- **Properties**: 
  - Minimal styling
  - No background or border
  - Minimal visual presence

```tsx
<Button variant="plain" colorScheme="blue">Learn More</Button>
```

## Button Sizes

### Small (`size="sm"`)
- **Usage**: Compact spaces, cards, navigation bars, inline actions
- **Height**: ~32px
- **Padding**: Smaller horizontal padding
- **Font Size**: Smaller text

```tsx
<Button size="sm">Small Button</Button>
```

### Medium (`size="md"`) - Default
- **Usage**: Standard forms, most common use case
- **Height**: ~40px
- **Padding**: Standard horizontal padding
- **Font Size**: Base text size

```tsx
<Button size="md">Medium Button</Button>
```

### Large (`size="lg"`)
- **Usage**: Hero sections, important CTAs, landing pages
- **Height**: ~48px
- **Padding**: Larger horizontal padding
- **Font Size**: Larger text

```tsx
<Button size="lg">Large Button</Button>
```

## Color Schemes

### Blue (Primary)
- **Usage**: Primary actions, positive confirmations
- **When to use**: Sign up, submit, save, continue, next

```tsx
<Button colorScheme="blue">Continue</Button>
```

### Red (Danger)
- **Usage**: Destructive actions, deletions, warnings
- **When to use**: Delete, remove, cancel subscription, log out

```tsx
<Button colorScheme="red" variant="outline">Delete Account</Button>
```

### Green (Success)
- **Usage**: Success confirmations, positive actions
- **When to use**: Approve, publish, activate, enable

```tsx
<Button colorScheme="green">Publish</Button>
```

### Gray (Neutral)
- **Usage**: Neutral actions, cancel operations
- **When to use**: Cancel, back, dismiss, close

```tsx
<Button colorScheme="gray" variant="outline">Cancel</Button>
```

## Button States

### Default
- Normal appearance when not interacted with

### Hover
- Slight color change or shadow
- Cursor changes to pointer
- Provides visual feedback

### Active/Pressed
- Darker color or pressed appearance
- Occurs when button is clicked

### Disabled
- Reduced opacity (typically 0.4-0.6)
- Cursor shows not-allowed
- Cannot be clicked

```tsx
<Button isDisabled>Disabled Button</Button>
<Button isLoading loadingText="Processing...">Loading Button</Button>
```

## Icon Buttons

Use IconButton for actions represented by icons only:

```tsx
<IconButton
  aria-label="Toggle theme"
  icon={<FaSun />}
  size="sm"
  variant="ghost"
/>
```

## Best Practices

### Do's ✅
- Use consistent button styles throughout the application
- Maintain clear visual hierarchy (primary, secondary, tertiary)
- Provide adequate spacing between buttons (minimum 12px)
- Use loading states for async operations
- Disable buttons during form submission
- Use appropriate color schemes for button actions
- Make button text clear and action-oriented ("Create Account" not "Submit")
- Ensure sufficient contrast for accessibility (WCAG AA minimum)

### Don'ts ❌
- Don't use more than one primary button in a single section
- Don't use red for non-destructive actions
- Don't make buttons too small (minimum 32px height for touch)
- Don't use vague labels ("Click here", "OK")
- Don't place destructive actions in prominent positions
- Don't ignore loading and disabled states
- Don't make buttons full-width unnecessarily on desktop

## Common Button Patterns

### Form Actions
```tsx
<HStack gap="3">
  <Button variant="outline" colorScheme="gray">Cancel</Button>
  <Button colorScheme="blue" type="submit">Save Changes</Button>
</HStack>
```

### Confirmation Dialogs
```tsx
<HStack gap="3">
  <Button variant="ghost">Cancel</Button>
  <Button colorScheme="red">Delete</Button>
</HStack>
```

### Navigation
```tsx
<HStack gap="4">
  <Button variant="ghost" size="sm">Dashboard</Button>
  <Button variant="ghost" size="sm">Settings</Button>
  <Button colorScheme="blue" size="sm">Sign Up</Button>
</HStack>
```

### Card Actions
```tsx
<Button variant="outline" size="sm" w="full">View Details</Button>
```

## Accessibility

- Always include meaningful `aria-label` for icon-only buttons
- Ensure sufficient color contrast (minimum 4.5:1 for text)
- Maintain minimum touch target size (44x44px for mobile)
- Provide focus indicators
- Support keyboard navigation
- Use semantic HTML with proper button types

## Responsive Considerations

- On mobile, consider using full-width buttons for primary actions
- Adjust button sizes based on viewport (sm on mobile, md on desktop)
- Stack buttons vertically on small screens when space is limited
- Ensure touch targets are large enough on mobile devices

## Examples by Context

### Authentication Pages
```tsx
// Login
<Button colorScheme="blue" size="lg" w="full">Log In</Button>

// Sign Up
<Button colorScheme="blue" size="lg" w="full">Create Account</Button>
```

### Dashboard Actions
```tsx
<Button size="sm" colorScheme="blue">+ New Post</Button>
<Button size="sm" variant="outline">Export Data</Button>
```

### Settings
```tsx
<Button colorScheme="blue">Save Settings</Button>
<Button variant="ghost">Reset to Default</Button>
```

### Destructive Actions
```tsx
<Button colorScheme="red" variant="outline">Delete Post</Button>
<Button colorScheme="red" variant="ghost">Remove User</Button>
```

---

**Last Updated**: March 1, 2026  
**Version**: 1.0.0
