'use client';

import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <>
      <Box className={className}>
        {children}
      </Box>
    </>
  );
}
