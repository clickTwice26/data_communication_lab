import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';

export default function OsiApplicationLayerPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading="Application Layer" description="Network services closest to end users" />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            The Application layer (Layer 7) provides network services directly to end-user applications.
            This is where protocol-level interactions for web access, name resolution, file transfer,
            and email happen.
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Typical Protocols</Heading>
          <VStack align="stretch" gap="3">
            <Text>• HTTP / HTTPS for web communication.</Text>
            <Text>• DNS for hostname to IP resolution.</Text>
            <Text>• SMTP / IMAP / POP for email communication.</Text>
            <Text>• FTP / SFTP for file exchange services.</Text>
          </VStack>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>Practical Troubleshooting</Heading>
          <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
            Application-layer problems are often visible as invalid responses, authentication failures,
            request format errors, or unavailable services.
          </Text>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Engineers inspect logs, status codes, protocol messages, and endpoint configuration to resolve these issues.
          </Text>
        </Box>

        <Box p="8" borderWidth="2px" borderStyle="dashed" borderColor="blue.300" borderRadius="lg" bg="blue.50" _dark={{ bg: 'blue.900', borderColor: 'blue.500' }} textAlign="center">
          <Heading size="md" color="blue.700" _dark={{ color: 'blue.200' }} mb="2">Image Space</Heading>
          <Text fontSize="sm" opacity={0.8}>Add client-server request/response protocol diagram here.</Text>
        </Box>
      </VStack>
    </Container>
  );
}
