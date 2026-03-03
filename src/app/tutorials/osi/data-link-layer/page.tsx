import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiDataLinkLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Data Link Layer" description="Reliable node-to-node communication on a local network segment" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Data Link layer (Layer 2) packages raw bits into frames and enables local delivery between directly
            connected devices. It uses MAC addressing and error detection mechanisms to improve reliability.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Core Functions</Heading>
          <VStack align="stretch" gap="3">
            <Text>• Framing: organizes bits into structured frame units.</Text>
            <Text>• Physical addressing: uses source and destination MAC addresses.</Text>
            <Text>• Error detection: often via FCS/CRC checks.</Text>
            <Text>• Media access control: controls transmission on shared links.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Devices and Protocol Examples</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Ethernet switches primarily operate at this layer by forwarding frames based on MAC tables.
            Common technologies include Ethernet, Wi-Fi MAC, VLAN tagging (802.1Q), and ARP interactions with Layer 3.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Typical issues include VLAN mismatch, duplex mismatch, and MAC table instability.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add Ethernet frame and switch forwarding diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
