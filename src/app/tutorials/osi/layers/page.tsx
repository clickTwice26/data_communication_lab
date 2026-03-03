import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiLayersPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Layers of the OSI Model" description="Understanding all 7 layers from Application to Physical" />

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>OSI Layer Order</Heading>
          <VStack align="stretch" gap="2">
            <Text>7. Application — user-facing network services (HTTP, DNS, SMTP).</Text>
            <Text>6. Presentation — data translation, encryption, compression.</Text>
            <Text>5. Session — session establishment, control, synchronization.</Text>
            <Text>4. Transport — end-to-end delivery, reliability, port addressing.</Text>
            <Text>3. Network — logical addressing and routing (IP).</Text>
            <Text>2. Data Link — framing, MAC addressing, local link reliability.</Text>
            <Text>1. Physical — transmission of raw bits on media.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Layer Grouping for Study</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Layers 7-5 are often considered upper layers focused on applications and data representation.
            Layers 4-3 handle end-to-end and internetwork delivery.
            Layers 2-1 handle local media transmission.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            This grouping helps in troubleshooting because errors often originate in one cluster of responsibilities.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add a seven-layer pyramid or stack chart here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
