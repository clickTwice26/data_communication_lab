import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiSessionLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Session Layer" description="Managing dialogs and communication sessions" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Session layer (Layer 5) controls the establishment, maintenance, and termination of communication
            sessions between applications. It enables structured dialogs and synchronization points in long-running exchanges.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Main Functions</Heading>
          <VStack align="stretch" gap="3">
            <Text>• Session setup and teardown between endpoints.</Text>
            <Text>• Dialog control (who sends and when).</Text>
            <Text>• Synchronization and checkpoints for recovery.</Text>
            <Text>• Continuity support for long data transfers.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Modern Relevance</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            In modern implementations, session responsibilities are often distributed across application and transport layers.
            Still, the OSI Session concept remains useful for architecture thinking.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Examples include authenticated sessions, remote procedure call sessions, and persistent communication channels.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add session lifecycle and synchronization checkpoint diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
