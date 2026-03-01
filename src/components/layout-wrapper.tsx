'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { SiteHeader } from './site-header';
import { Sidebar } from './sidebar';
import { SiteFooter } from './site-footer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  // For auth pages, render without header, sidebar, and footer
  if (isAuthPage) {
    return (
      <Box position="relative" minH="100vh" display="flex" flexDirection="column">
        {children}
      </Box>
    );
  }

  // For all other pages, render with full layout
  return (
    <Box position="relative" minH="100vh" display="flex" flexDirection="column">
      <SiteHeader />
      <Sidebar />
      <Box
        as="main"
        flex="1"
        ml={{ base: '0', md: '280px' }}
        transition="margin 0.3s"
      >
        {children}
      </Box>
      <Box ml={{ base: '0', md: '280px' }}>
        <SiteFooter />
      </Box>
    </Box>
  );
}
