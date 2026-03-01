'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

const customSystem = createSystem(defaultConfig, {
  globalCss: {
    body: {
      fontFamily: "var(--font-sans), 'Josefin Sans', system-ui, -apple-system, sans-serif",
      fontSize: '18px',
    },
    '*': {
      fontFamily: "var(--font-sans), 'Josefin Sans', system-ui, -apple-system, sans-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-sans), 'Josefin Sans', system-ui, -apple-system, sans-serif" },
        heading: { value: "var(--font-sans), 'Josefin Sans', system-ui, -apple-system, sans-serif" },
      },
      fontSizes: {
        xs: { value: '14px' },
        sm: { value: '16px' },
        md: { value: '18px' },
        lg: { value: '20px' },
        xl: { value: '22px' },
        '2xl': { value: '26px' },
        '3xl': { value: '32px' },
        '4xl': { value: '38px' },
        '5xl': { value: '50px' },
        '6xl': { value: '62px' },
        '7xl': { value: '74px' },
        '8xl': { value: '98px' },
        '9xl': { value: '130px' },
      },
    },
  },
});

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={customSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
