import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiNetworkLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Network Layer" description="Logical addressing and routing across multiple networks" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Network layer (Layer 3) is responsible for packet forwarding across different network segments.
            It handles logical addressing (IPv4/IPv6), route selection, and path determination between source and destination.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Key Responsibilities</Heading>
          <VStack align="stretch" gap="3">
            <Text>• Logical addressing with IP addresses.</Text>
            <Text>• Routing packets through routers and hops.</Text>
            <Text>• Fragmentation and reassembly (when required).</Text>
            <Text>• TTL/Hop limit enforcement to prevent loops.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Common Troubleshooting Areas</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Layer-3 issues usually involve incorrect IP configuration, subnet mismatch, gateway errors, or missing routes.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Diagnostic tools like ping and traceroute are commonly used to test reachability and route behavior.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add router path and IP packet diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
