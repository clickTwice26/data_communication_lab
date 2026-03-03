import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiTransportLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Transport Layer" description="End-to-end communication between processes" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Transport layer (Layer 4) provides process-to-process delivery and service differentiation using
            port numbers. It ensures either reliable delivery (TCP) or lightweight best-effort delivery (UDP),
            depending on application requirements.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Transport Services</Heading>
          <VStack align="stretch" gap="3">
            <Text>• Segmentation and reassembly of application data.</Text>
            <Text>• Port addressing to deliver data to correct applications.</Text>
            <Text>• Reliability features: acknowledgment, retransmission, ordering.</Text>
            <Text>• Flow and congestion control (mainly in TCP).</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>TCP vs UDP in Practice</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            TCP is used when reliability and ordered delivery are required, such as web pages and file transfer.
            UDP is often chosen for low-latency use cases like streaming, online gaming, and voice traffic.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Choosing the right transport protocol directly impacts user experience and system performance.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add TCP handshake and TCP-vs-UDP diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
