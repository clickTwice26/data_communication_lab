import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { ZoomableImage } from '@/components/zoomable-image';

export default function IntroductionPage() {
  return (
    <Container maxW="full" py="6" px={{ base: "3", md: "4" }}>
      <VStack gap="8" align="stretch">
 
        <Box>
          <VStack gap="6" align="stretch">
            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>What is Data Communication?</Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                Data communication refers to the exchange of data between two devices through some form of transmission medium. 
                It is the process of sending and receiving data from one device to another. For communication to occur, 
                communicating devices must be part of a communication system made up of hardware and software.
                The term telecommunication means communication at a
                distance. The word data refers to information presented
                in whatever form is agreed upon by the parties creating
                and using the data.
                Data communications are the exchange of data between
                two devices via some form of transmission medium such
                as a wire cable.
                For data communications to occur, the communicating
                devices must be part of a communication system made up
                of a combination of hardware (physical equipment) and
                software (programs).
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>Components of Data Communication</Heading>
              
              <ZoomableImage 
                src="https://www.boardinfinity.com/blog/content/images/2023/05/Data-Communication.png"
                alt="Components of Data Communication Diagram"
                maxWidth="800px"
              />

              <VStack gap="4" align="stretch">
                <Box>
                  <Heading size="md" mb="2">1. Message</Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The data or information that needs to be communicated. It can be text, numbers, pictures, audio, video, or any combination of these.
                  </Text>
                </Box>
                
                <Box>
                  <Heading size="md" mb="2">2. Sender</Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The device that sends the data message. It can be a computer, workstation, telephone, video camera, etc.
                  </Text>
                </Box>
                
                <Box>
                  <Heading size="md" mb="2">3. Receiver</Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The device that receives the message. It can be a computer, workstation, television, telephone, etc.
                  </Text>
                </Box>
                
                <Box>
                  <Heading size="md" mb="2">4. Transmission Medium</Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The physical path by which the message travels from sender to receiver. Examples include twisted-pair wire, 
                    coaxial cable, fiber-optic cable, and wireless radio waves.
                  </Text>
                </Box>
                
                <Box>
                  <Heading size="md" mb="2">5. Protocol</Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    A set of rules that govern data communication. It represents an agreement between the communicating devices. 
                    Without a protocol, two devices may be connected but not communicating.
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>Data Flow in Communication</Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                Communication between two devices can occur in three different modes:
              </Text>
              <VStack gap="3" align="stretch" mt="4">
                <Box>
                  <Text fontWeight="600">Simplex:</Text>
                  <Text opacity={0.9}>Unidirectional communication (e.g., keyboard to computer, radio broadcasting)</Text>
                </Box>
                <Box>
                  <Text fontWeight="600">Half-Duplex:</Text>
                  <Text opacity={0.9}>Bidirectional but not simultaneous (e.g., walkie-talkies)</Text>
                </Box>
                <Box>
                  <Text fontWeight="600">Full-Duplex:</Text>
                  <Text opacity={0.9}>Bidirectional and simultaneous (e.g., telephone conversations)</Text>
                </Box>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>Why Study Data Communication?</Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                Understanding data communication is essential in today's digital world. It forms the foundation for:
              </Text>
              <VStack gap="2" align="stretch" mt="4" pl="6">
                <Text>• Network design and implementation</Text>
                <Text>• Internet and web technologies</Text>
                <Text>• Mobile and wireless communications</Text>
                <Text>• Cloud computing and distributed systems</Text>
                <Text>• IoT (Internet of Things) applications</Text>
                <Text>• Cybersecurity and data protection</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
