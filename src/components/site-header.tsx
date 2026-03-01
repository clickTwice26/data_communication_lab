'use client';

import Link from 'next/link';
import { Box, Flex, HStack, Container, IconButton } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { getCurrentUser, logout } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

interface User {
  id: string;
  email: string;
  name: string | null;
}

export function SiteHeader() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser as User | null);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      setUser(null);
      router.push('/');
      router.refresh();
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      position="sticky"
      top="0"
      zIndex="50"
      bg="bg"
      backdropFilter="blur(10px)"
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
                        {!isLoading && user ? (
                          <>
                            <Link href="/dashboard">
                              <Button size="sm" variant="ghost">
                                Dashboard
                              </Button>
                            </Link>
                            <Button size="sm" colorScheme="red" variant="outline" onClick={handleLogout}>
                              Log Out
                            </Button>
                          </>
                        ) : !isLoading ? (
                          <>
                            <Link href="/login">
                              <Button size="sm" variant="ghost">
                                Log In
                              </Button>
                            </Link>
                            <Link href="/signup">
                              <Button size="sm" colorScheme="blue">
                                Sign Up
                              </Button>
                            </Link>
                          </>
                        ) : null}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
