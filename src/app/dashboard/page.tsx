'use client';

import { Container, VStack, Heading, Text, HStack, Box, Grid, Badge } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { useState, useEffect } from 'react';
import { logout, getCurrentUser } from '@/actions/auth';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser as User);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      router.push('/login');
      router.refresh();
    }
  };

  if (isLoading) {
    return (
      <Container maxW="full" py="8" px={{ base: '3', md: '4' }}>
        <VStack gap="4" align="center" justify="center" h="60vh">
          <Text>Loading...</Text>
        </VStack>
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  const createdDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <HStack justify="space-between" align="start">
          <VStack gap="2" align="start">
            <Heading as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">Dashboard</Heading>
            <Text opacity={0.7}>Welcome back, {user.name || user.email}!</Text>
          </VStack>
     
        </HStack>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap="6">
          <Box p="6" rounded="md" borderWidth="1px">
            <Stat>
              <StatLabel>Account Status</StatLabel>
              <HStack gap="2" mt="2">
                <Badge colorScheme="green">Active</Badge>
              </HStack>
            </Stat>
          </Box>

          <Box p="6" rounded="md" borderWidth="1px">
            <Stat>
              <StatLabel>Member Since</StatLabel>
              <StatNumber fontSize="md" mt="2">{createdDate}</StatNumber>
            </Stat>
          </Box>

          <Box p="6" rounded="md" borderWidth="1px">
            <Stat>
              <StatLabel>Email</StatLabel>
              <StatNumber fontSize="sm" mt="2" isTruncated>{user.email}</StatNumber>
            </Stat>
          </Box>
        </Grid>

        <Box p="6" rounded="md" borderWidth="1px">
          <VStack gap="4" align="start">
            <Heading size="md">Profile Information</Heading>
            <Box w="full">
              <Text fontSize="sm" fontWeight="bold" opacity={0.6} mb="1">
                User ID
              </Text>
              <Text fontSize="sm" fontFamily="mono" opacity={0.8}>
                {user.id}
              </Text>
            </Box>
            <Box w="full">
              <Text fontSize="sm" fontWeight="bold" opacity={0.6} mb="1">
                Full Name
              </Text>
              <Text fontSize="sm">
                {user.name || 'Not provided'}
              </Text>
            </Box>
            <Box w="full">
              <Text fontSize="sm" fontWeight="bold" opacity={0.6} mb="1">
                Email Address
              </Text>
              <Text fontSize="sm">
                {user.email}
              </Text>
            </Box>
          </VStack>
        </Box>

        <HStack gap="4" flexWrap="wrap">
          <Button colorScheme="blue" variant="outline" onClick={() => router.push('/posts')}>
            View Posts
          </Button>
          <Button colorScheme="blue" variant="outline" onClick={() => router.push('/')}>
            Back to Home
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}
