'use client';

import Link from 'next/link';
import { Box, Flex, HStack, Container, IconButton } from '@chakra-ui/react';
import { siteConfig } from '@/config/site';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      bg="white"
      _dark={{ bg: 'gray.900' }}
      backdropFilter="blur(10px)"
      suppressHydrationWarning
    >
      <Container maxW="full" py="3" px="6">
        <Flex justify="space-between" align="center" w="full">
          <Flex align="center" gap="6">
            <Link href="/">
              <Box fontSize="lg" fontWeight="bold">
                {siteConfig.name}
              </Box>
            </Link>
          </Flex>
          <HStack gap="3">
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleTheme}
              size="sm"
              variant="ghost"
              suppressHydrationWarning
            >
              {mounted ? (theme === 'dark' ? <FaSun /> : <FaMoon />) : <FaMoon />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
