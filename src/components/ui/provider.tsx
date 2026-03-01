'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

const customSystem = createSystem(defaultConfig, {
  globalCss: {
    body: {
      fontFamily: "var(--font-sans), 'Josefin Sans', system-ui, -apple-system, sans-serif",
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
