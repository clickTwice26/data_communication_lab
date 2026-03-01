'use client';

import { Container, Heading, Text, VStack, Box, HStack, Grid, IconButton, Stack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';
import { FaSun, FaMoon, FaPlus, FaTrash, FaEdit, FaSave } from 'react-icons/fa';

export default function ButtonGuidelinesPage() {
  return (
    <Container maxW="container.xl" py={{ base: '8', md: '12' }} px={{ base: '4', md: '6' }}>
      <VStack gap="12" align="stretch">
        <PageHeader
          heading="Button Design Guidelines"
          description="Comprehensive button system with variants, sizes, and color schemes for consistent UI design"
        />

        {/* Button Variants */}
        <AnimatedSection delay={0.1}>
          <Box>
            <Heading size="lg" mb="4">Button Variants</Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="8">
              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="md" mb="4">Solid (Primary)</Heading>
                <Text fontSize="sm" mb="4" opacity={0.8}>
                  For primary actions and main CTAs
                </Text>
                <VStack align="start" gap="3">
                  <Button colorScheme="blue">Primary Action</Button>
                  <Button colorScheme="green">Success Action</Button>
                  <Button colorScheme="red">Danger Action</Button>
                </VStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="md" mb="4">Outline</Heading>
                <Text fontSize="sm" mb="4" opacity={0.8}>
                  For secondary actions and alternatives
                </Text>
                <VStack align="start" gap="3">
                  <Button variant="outline" colorScheme="blue">Secondary Action</Button>
                  <Button variant="outline" colorScheme="red">Delete</Button>
                  <Button variant="outline" colorScheme="gray">Cancel</Button>
                </VStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="md" mb="4">Ghost</Heading>
                <Text fontSize="sm" mb="4" opacity={0.8}>
                  For tertiary actions and navigation
                </Text>
                <VStack align="start" gap="3">
                  <Button variant="ghost">Tertiary Action</Button>
                  <Button variant="ghost" colorScheme="blue">Link Style</Button>
                  <Button variant="ghost" colorScheme="red">Subtle Delete</Button>
                </VStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="md" mb="4">Plain (Link Style)</Heading>
                <Text fontSize="sm" mb="4" opacity={0.8}>
                  For text-only inline actions
                </Text>
                <VStack align="start" gap="3">
                  <Button variant="plain" colorScheme="blue">Learn More →</Button>
                  <Button variant="plain" colorScheme="blue">View Details</Button>
                  <Button variant="plain" colorScheme="red">Remove Item</Button>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </AnimatedSection>

        {/* Button Sizes */}
        <AnimatedSection delay={0.2}>
          <Box>
            <Heading size="lg" mb="4">Button Sizes</Heading>
            <Box p="6" borderWidth="1px" rounded="md">
              <VStack align="start" gap="4">
                <Box>
                  <Text fontSize="sm" fontWeight="600" mb="2">Small (sm)</Text>
                  <HStack gap="3">
                    <Button size="sm" colorScheme="blue">Small Button</Button>
                    <Button size="sm" variant="outline">Small Outline</Button>
                    <Button size="sm" variant="ghost">Small Ghost</Button>
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" mb="2">Medium (md) - Default</Text>
                  <HStack gap="3">
                    <Button size="md" colorScheme="blue">Medium Button</Button>
                    <Button size="md" variant="outline">Medium Outline</Button>
                    <Button size="md" variant="ghost">Medium Ghost</Button>
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" mb="2">Large (lg)</Text>
                  <HStack gap="3">
                    <Button size="lg" colorScheme="blue">Large Button</Button>
                    <Button size="lg" variant="outline">Large Outline</Button>
                    <Button size="lg" variant="ghost">Large Ghost</Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Box>
        </AnimatedSection>

        {/* Color Schemes */}
        <AnimatedSection delay={0.3}>
          <Box>
            <Heading size="lg" mb="4">Color Schemes</Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="6">
              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Blue (Primary)</Heading>
                <Text fontSize="xs" mb="3" opacity={0.7}>Sign up, submit, save, continue</Text>
                <HStack gap="2">
                  <Button colorScheme="blue" size="sm">Solid</Button>
                  <Button colorScheme="blue" variant="outline" size="sm">Outline</Button>
                  <Button colorScheme="blue" variant="ghost" size="sm">Ghost</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Red (Danger)</Heading>
                <Text fontSize="xs" mb="3" opacity={0.7}>Delete, remove, cancel subscription</Text>
                <HStack gap="2">
                  <Button colorScheme="red" size="sm">Solid</Button>
                  <Button colorScheme="red" variant="outline" size="sm">Outline</Button>
                  <Button colorScheme="red" variant="ghost" size="sm">Ghost</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Green (Success)</Heading>
                <Text fontSize="xs" mb="3" opacity={0.7}>Approve, publish, activate</Text>
                <HStack gap="2">
                  <Button colorScheme="green" size="sm">Solid</Button>
                  <Button colorScheme="green" variant="outline" size="sm">Outline</Button>
                  <Button colorScheme="green" variant="ghost" size="sm">Ghost</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Gray (Neutral)</Heading>
                <Text fontSize="xs" mb="3" opacity={0.7}>Cancel, back, dismiss</Text>
                <HStack gap="2">
                  <Button colorScheme="gray" size="sm">Solid</Button>
                  <Button colorScheme="gray" variant="outline" size="sm">Outline</Button>
                  <Button colorScheme="gray" variant="ghost" size="sm">Ghost</Button>
                </HStack>
              </Box>
            </Grid>
          </Box>
        </AnimatedSection>

        {/* Button States */}
        <AnimatedSection delay={0.4}>
          <Box>
            <Heading size="lg" mb="4">Button States</Heading>
            <Box p="6" borderWidth="1px" rounded="md">
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap="6">
                <VStack align="start">
                  <Text fontSize="sm" fontWeight="600" mb="2">Default</Text>
                  <Button colorScheme="blue">Normal State</Button>
                </VStack>

                <VStack align="start">
                  <Text fontSize="sm" fontWeight="600" mb="2">Loading</Text>
                  <Button colorScheme="blue" loading loadingText="Loading...">
                    Processing
                  </Button>
                </VStack>

                <VStack align="start">
                  <Text fontSize="sm" fontWeight="600" mb="2">Disabled</Text>
                  <Button colorScheme="blue" disabled>
                    Disabled
                  </Button>
                </VStack>
              </Grid>
            </Box>
          </Box>
        </AnimatedSection>

        {/* Icon Buttons */}
        <AnimatedSection delay={0.5}>
          <Box>
            <Heading size="lg" mb="4">Icon Buttons</Heading>
            <Box p="6" borderWidth="1px" rounded="md">
              <Text fontSize="sm" mb="4" opacity={0.8}>
                Use IconButton for actions represented by icons only
              </Text>
              <HStack gap="3">
                <IconButton aria-label="Add" size="sm" colorScheme="blue">
                  <FaPlus />
                </IconButton>
                <IconButton aria-label="Edit" size="sm" variant="outline">
                  <FaEdit />
                </IconButton>
                <IconButton aria-label="Delete" size="sm" variant="ghost" colorScheme="red">
                  <FaTrash />
                </IconButton>
                <IconButton aria-label="Toggle theme" size="sm" variant="ghost">
                  <FaSun />
                </IconButton>
                <IconButton aria-label="Save" size="md" colorScheme="green">
                  <FaSave />
                </IconButton>
              </HStack>
            </Box>
          </Box>
        </AnimatedSection>

        {/* Common Patterns */}
        <AnimatedSection delay={0.6}>
          <Box>
            <Heading size="lg" mb="4">Common Button Patterns</Heading>
            <VStack gap="6" align="stretch">
              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Form Actions</Heading>
                <HStack gap="3">
                  <Button variant="outline" colorScheme="gray">Cancel</Button>
                  <Button colorScheme="blue">Save Changes</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Confirmation Dialog</Heading>
                <HStack gap="3">
                  <Button variant="ghost">Cancel</Button>
                  <Button colorScheme="red">Delete</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Navigation Bar</Heading>
                <HStack gap="4">
                  <Button variant="ghost" size="sm">Dashboard</Button>
                  <Button variant="ghost" size="sm">Settings</Button>
                  <Button colorScheme="blue" size="sm">Sign Up</Button>
                </HStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md">
                <Heading size="sm" mb="3">Full Width (Mobile)</Heading>
                <Stack gap="3" w="full" maxW="400px">
                  <Button colorScheme="blue" size="lg" w="full">Create Account</Button>
                  <Button variant="outline" size="lg" w="full">Log In</Button>
                </Stack>
              </Box>
            </VStack>
          </Box>
        </AnimatedSection>

        {/* Best Practices */}
        <AnimatedSection delay={0.7}>
          <Box>
            <Heading size="lg" mb="4">Best Practices</Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="6">
              <Box p="6" borderWidth="1px" rounded="md" bg="green.50" _dark={{ bg: 'green.900' }}>
                <Heading size="sm" mb="3" color="green.700" _dark={{ color: 'green.300' }}>✅ Do's</Heading>
                <VStack align="start" gap="2" fontSize="sm">
                  <Text>• Use consistent button styles</Text>
                  <Text>• Maintain clear visual hierarchy</Text>
                  <Text>• Provide adequate spacing (min 12px)</Text>
                  <Text>• Use loading states for async operations</Text>
                  <Text>• Make button text clear and action-oriented</Text>
                  <Text>• Ensure sufficient contrast (WCAG AA)</Text>
                </VStack>
              </Box>

              <Box p="6" borderWidth="1px" rounded="md" bg="red.50" _dark={{ bg: 'red.900' }}>
                <Heading size="sm" mb="3" color="red.700" _dark={{ color: 'red.300' }}>❌ Don'ts</Heading>
                <VStack align="start" gap="2" fontSize="sm">
                  <Text>• Don't use multiple primary buttons</Text>
                  <Text>• Don't use red for non-destructive actions</Text>
                  <Text>• Don't make buttons too small (&lt;32px)</Text>
                  <Text>• Don't use vague labels ("Click here")</Text>
                  <Text>• Don't ignore loading/disabled states</Text>
                  <Text>• Don't make all buttons full-width on desktop</Text>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </AnimatedSection>

        {/* Documentation Link */}
        <AnimatedSection delay={0.8}>
          <Box p="6" borderWidth="1px" rounded="md" bg="blue.50" _dark={{ bg: 'blue.900' }}>
            <Heading size="sm" mb="3">📚 Full Documentation</Heading>
            <Text fontSize="sm" mb="4" opacity={0.9}>
              For complete guidelines including accessibility, responsive considerations, and code examples, 
              refer to the BUTTON_GUIDELINES.md file in the project root.
            </Text>
            <Button size="sm" variant="outline" colorScheme="blue">
              View Full Documentation
            </Button>
          </Box>
        </AnimatedSection>
      </VStack>
    </Container>
  );
}
