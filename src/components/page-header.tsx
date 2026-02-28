'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/styles/animations';
import { VStack, Heading, Text } from '@chakra-ui/react';

interface PageHeaderProps {
  heading: string;
  description?: string;
  className?: string;
}

export function PageHeader({ heading, description, className }: PageHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <VStack align="start" gap="4" className={className}>
        <motion.div variants={fadeInUp}>
          <Heading as="h1" size="2xl">
            {heading}
          </Heading>
        </motion.div>
        {description && (
          <motion.div variants={fadeInUp}>
            <Text fontSize="lg" opacity={0.7}>
              {description}
            </Text>
          </motion.div>
        )}
      </VStack>
    </motion.div>
  );
}
