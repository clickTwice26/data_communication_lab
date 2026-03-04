'use client';

import { VStack, Heading, Text } from '@chakra-ui/react';

interface PageHeaderProps {
  heading: string;
  description?: string;
  className?: string;
}

export function PageHeader({ heading, description, className }: PageHeaderProps) {
  return (
    <>
      <VStack align="start" gap="4" className={className}>
        <>
          <Heading as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">
            {heading}
          </Heading>
        </>
        {description && (
          <>
            <Text fontSize="xl" opacity={0.8}>
              {description}
            </Text>
          </>
        )}
      </VStack>
    </>
  );
}
