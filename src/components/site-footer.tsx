'use client';

import { Box, Text, Container, Flex } from '@chakra-ui/react';

export function SiteFooter() {
  return (
    <Box as="footer" borderTopWidth="1px" py="6">
      <Container maxW="container.xl" px="4">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap="4">
          <Text fontSize="sm" opacity={0.6}>
            Built with Next.js, Chakra UI, and Framer Motion.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
