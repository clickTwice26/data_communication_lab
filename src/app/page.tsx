'use client';

import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';
import { Box, Button, Stack, Grid, Heading, Text, Container, HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { hoverLift, tapScale } from '@/styles/animations';
import Link from 'next/link';

const MotionBox = motion(Box);

export default function Home() {
  const features = [
    {
      title: 'Next.js 15',
      description: 'Built with the latest version of Next.js with App Router and Server Components.',
    },
    {
      title: 'TypeScript',
      description: 'Fully typed codebase for better development experience and fewer bugs.',
    },
    {
      title: 'Chakra UI',
      description: 'Beautiful, accessible components from Chakra UI for rapid development.',
    },
    {
      title: 'Framer Motion',
      description: 'Production-ready animations and transitions for a polished user experience.',
    },
    {
      title: 'Prisma + SQLite',
      description: 'Type-safe database ORM with SQLite for easy local development.',
    },
    {
      title: 'Professional Structure',
      description: 'Industry-grade project organization with clear separation of concerns.',
    },
  ];

  return (
    <Container maxW="container.xl" py={{ base: '8', md: '12', lg: '16' }}>
      <VStack gap="12" align="stretch">
        <PageHeader
          heading="Welcome to DC Lab"
          description="A professional Next.js starter template with modern tools and best practices. Features include TypeScript, Chakra UI, Framer Motion, and Prisma with SQLite."
        />

        <AnimatedSection delay={0.2}>
          <HStack justifyContent="center" gap="4" flexWrap="wrap">
            <Link href="/users">
              <Button size="lg" colorScheme="blue">
                View Users
              </Button>
            </Link>
            <Link href="/posts">
              <Button size="lg" variant="outline">
                View Posts
              </Button>
            </Link>
          </HStack>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <VStack align="start" gap="8" w="full">
            <Heading size="xl">Features</Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap="6" w="full">
              {features.map((feature, index) => (
                <MotionBox
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={hoverLift}
                  whileTap={tapScale}
                  p="6"
                  h="full"
                  rounded="md"
                  borderWidth="1px"
                  _hover={{ boxShadow: 'lg' }}
                  css={{ transition: 'all 0.2s' }}
                >
                  <VStack align="start" gap="3" h="full">
                    <Heading size="md">{feature.title}</Heading>
                    <Text fontSize="sm" opacity={0.7}>
                      {feature.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <Box p="6" rounded="md" borderWidth="1px">
            <VStack align="start" gap="6">
              <Heading size="lg">Design System</Heading>
              <Text fontSize="base" opacity={0.7}>
                Built-in typography system ensures consistent font sizes across the application.
              </Text>
              <Stack gap="6" w="full">
                <Box>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="2">
                    Display XL
                  </Text>
                  <Heading as="h1" size="4xl">
                    The quick brown fox
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="2">
                    Heading H1
                  </Text>
                  <Heading as="h1" size="2xl">
                    The quick brown fox
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="2">
                    Body Large
                  </Text>
                  <Text fontSize="lg">
                    The quick brown fox jumps over the lazy dog. This is a sample text to demonstrate body typography.
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="2">
                    Body Base
                  </Text>
                  <Text fontSize="base">
                    The quick brown fox jumps over the lazy dog. This is the default body text size.
                  </Text>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </AnimatedSection>
      </VStack>
    </Container>
  );
}
