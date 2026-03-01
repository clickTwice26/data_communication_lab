'use client';

import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { FaHome, FaBook, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <Container maxW="6xl" py="20" px={{ base: '4', md: '6' }}>
      <VStack gap="8" align="center" textAlign="center">
        <Box>
          <Heading
            fontSize={{ base: '8xl', md: '9xl' }}
            fontWeight="bold"
            bgGradient="to-r"
            gradientFrom="blue.400"
            gradientTo="purple.600"
            bgClip="text"
            lineHeight="1"
          >
            404
          </Heading>
        </Box>

        <VStack gap="4" maxW="2xl">
          <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            Page Not Found
          </Heading>
          <Text fontSize="lg" opacity={0.8}>
            Sorry, we couldn't find the page you're looking for. The page might have been removed, 
            renamed, or doesn't exist.
          </Text>
        </VStack>

        <HStack gap="4" pt="4" flexWrap="wrap" justify="center">
          <Link href="/">
            <Button colorScheme="blue" size="lg" gap="2">
              <FaHome />
              Go Home
            </Button>
          </Link>
          
          <Link href="/tutorials/html/basics">
            <Button variant="outline" colorScheme="blue" size="lg" gap="2">
              <FaBook />
              Browse Tutorials
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            colorScheme="gray"
            size="lg"
            gap="2"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft />
            Go Back
          </Button>
        </HStack>

        <Box pt="8">
          <Text fontSize="sm" opacity={0.6}>
            Error Code: 404 - Page Not Found
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
