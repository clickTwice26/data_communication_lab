import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiPresentationLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Presentation Layer" description="Data format translation, encryption, and compression" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Presentation layer (Layer 6) ensures data from the sender is understandable by the receiver.
            It handles encoding, transformation, encryption/decryption, and compression/decompression.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Core Responsibilities</Heading>
          <VStack align="stretch" gap="3">
            <Text>• Data translation between different formats and character sets.</Text>
            <Text>• Encryption and decryption for confidentiality.</Text>
            <Text>• Compression and decompression to optimize transmission.</Text>
            <Text>• Serialization support for structured payload exchange.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Examples in Real Systems</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Data formats such as JSON, XML, and UTF-8 encoding relate to this layer's purpose.
            Security protocols like TLS include functions aligned with presentation concerns.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Multimedia codecs and compressed content delivery are additional practical examples.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add data transformation and encryption flow diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
