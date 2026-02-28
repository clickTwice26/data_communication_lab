'use client';

import Link from 'next/link';
import { Box, Flex, HStack, Button, Container } from '@chakra-ui/react';
import { siteConfig } from '@/config/site';

import { useState, useEffect } from 'react';
import { getCurrentUser, logout } from '@/actions/auth';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string | null;
}

export function SiteHeader() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <Container maxW="container.xl" py="3" px="4">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="6">
            <Link href="/">
              <Box fontSize="lg" fontWeight="bold">
                {siteConfig.name}
              </Box>
            </Link>
            <HStack as="nav" gap="6" hideBelow="md" fontSize="sm" fontWeight="500">
              <Link href="/users">
                <Box _hover={{ opacity: 0.8 }} transition="opacity 0.2s">
                  Users
                </Box>
              </Link>
              <Link href="/posts">
                <Box _hover={{ opacity: 0.8 }} transition="opacity 0.2s">
                  Posts
                </Box>
              </Link>
            </HStack>
          </Flex>
          <HStack gap="3">
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
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm">
                GitHub
              </Button>
            </a>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
