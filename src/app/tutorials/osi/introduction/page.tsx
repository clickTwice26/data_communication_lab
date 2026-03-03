import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiIntroductionPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader
          heading="OSI Model Introduction"
          description="The conceptual framework for understanding network communication"
        />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Open Systems Interconnection (OSI) model is a 7-layer conceptual model that explains how data moves
            from one computer to another across a network. It does not define one specific protocol implementation;
            instead, it provides a common reference language for designing, comparing, and troubleshooting systems.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Why the OSI Model Matters
          </Heading>
          <VStack align="stretch" gap="3">
            <Text>• Standardization: gives vendors and engineers a shared communication framework.</Text>
            <Text>• Modularity: each layer handles specific responsibilities independently.</Text>
            <Text>• Troubleshooting: helps isolate issues by mapping symptoms to a layer.</Text>
            <Text>• Learning: builds strong fundamentals for protocols and real network behavior.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            How to Read the Model
          </Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Data travels down the layers at the sender side (encapsulation), across the medium, and then up the layers
            at the receiver side (decapsulation). Each layer adds or removes control information relevant to its role.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            In practice, modern stacks map OSI concepts to TCP/IP implementation layers, but OSI remains highly useful
            for architecture and diagnostics.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">
            Image Space
          </Heading>
          <Text fontSize="sm" opacity={0.8}>Add an OSI overview stack diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
