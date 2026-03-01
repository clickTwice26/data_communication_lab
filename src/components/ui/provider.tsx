'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

const customConfig = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    tokens: {
      ...defaultConfig.theme?.tokens,
      fonts: {
        body: { value: "'Josefin Sans', var(--font-sans), system-ui, -apple-system, sans-serif" },
        heading: { value: "'Josefin Sans', var(--font-sans), system-ui, -apple-system, sans-serif" },
      },
    },
  },
  globalCss: {
    '*': {
      fontFamily: "'Josefin Sans', var(--font-sans), system-ui, -apple-system, sans-serif !important",
    },
  },
};

const system = createSystem(customConfig);

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
