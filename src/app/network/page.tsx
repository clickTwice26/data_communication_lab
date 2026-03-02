import { Container, Heading, Text, VStack, Box, HStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { ZoomableImage } from '@/components/zoomable-image';
import { QuizModal, QuizQuestion } from '@/components/quiz-modal';

const networkQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is a network?',
    options: [
      'A single computer system',
      'The interconnection of a set of devices capable of communication',
      'A software application',
      'A type of transmission medium'
    ],
    correctAnswer: 1,
    explanation: 'A network is the interconnection of a set of devices capable of communication. Devices can be hosts (end systems) or connecting devices like routers and switches.'
  },
  {
    id: 2,
    question: 'Which of the following is NOT a network criteria?',
    options: [
      'Performance',
      'Reliability',
      'Security',
      'Cost'
    ],
    correctAnswer: 3,
    explanation: 'The three main network criteria are Performance, Reliability, and Security. While cost is a consideration, it is not listed as one of the primary network criteria.'
  },
  {
    id: 3,
    question: 'What does transit time measure in network performance?',
    options: [
      'The number of users on the network',
      'The amount of time required for a message to travel from one device to another',
      'The frequency of network failures',
      'The cost of network maintenance'
    ],
    correctAnswer: 1,
    explanation: 'Transit time is the amount of time required for a message to travel from one device to another. It is one of the ways to measure network performance.'
  },
  {
    id: 4,
    question: 'What does response time in network performance refer to?',
    options: [
      'Time to install the network',
      'Time elapsed between an inquiry and a response',
      'Time to repair a network failure',
      'Time to transmit all data'
    ],
    correctAnswer: 1,
    explanation: 'Response time is the time elapsed between an inquiry and a response. It measures how quickly the network can respond to user requests.'
  },
  {
    id: 5,
    question: 'What does reliability in networks measure?',
    options: [
      'Speed of data transmission',
      'Frequency of failure and the time needed to recover',
      'Number of connected devices',
      'Cost of network equipment'
    ],
    correctAnswer: 1,
    explanation: 'Reliability is a measure of frequency of failure and the time needed to recover. Network robustness is a key aspect of reliability.'
  },
  {
    id: 6,
    question: 'In a point-to-point connection, how many devices share the link?',
    options: [
      'One device',
      'Two devices',
      'Three or more devices',
      'Unlimited devices'
    ],
    correctAnswer: 1,
    explanation: 'In a point-to-point connection, a dedicated link connects exactly two devices. The entire capacity of the link is reserved for transmission between those two devices.'
  },
  {
    id: 7,
    question: 'In a multipoint connection, how is the link shared?',
    options: [
      'Each device has a dedicated link',
      'Only two devices can connect',
      'More than two devices share a single link',
      'Devices cannot share the link'
    ],
    correctAnswer: 2,
    explanation: 'In a multipoint (multidrop) connection, more than two devices share a single link. The capacity of the channel is shared among the connected devices.'
  },
  {
    id: 8,
    question: 'What aspect of network security protects data from unauthorized users?',
    options: [
      'Performance optimization',
      'Protecting data from unauthorized access',
      'Increasing transmission speed',
      'Reducing network cost'
    ],
    correctAnswer: 1,
    explanation: 'Security in networks involves protecting data from unauthorized users. It ensures that only authorized users can access and modify network data.'
  }
];

export default function NetworkPage() {
  return (
    <Container maxW="full" py="6" px={{ base: "3", md: "4" }}>
      <VStack gap="8" align="stretch">
 
        <Box>
          <VStack gap="6" align="stretch">
            {/* Introduction */}
            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>
                What is a Network?
              </Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                A <Text as="span" fontWeight="700">network</Text> is the interconnection of a set of devices capable of 
                communication. In this definition, a device can be a <Text as="span" fontWeight="700">host</Text> (or 
                an <Text as="span" fontStyle="italic">end system</Text> as it is sometimes called) such as a large computer, 
                desktop, laptop, workstation, cellular phone, or security system.
              </Text>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                A device in this definition can also be a <Text as="span" fontWeight="700">connecting device</Text> such 
                as a router, which connects the network to other networks, a switch, which connects devices together, a 
                modem (modulator-demodulator), which changes the form of data, and so on.
              </Text>
            </Box>

            {/* Network Criteria */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
            >
              <Heading size="xl" mb="4" color="blue.700" _dark={{ color: "blue.400" }}>
                Network Criteria
              </Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="6">
                A network must be able to meet a certain number of criteria. The most important of these are 
                performance, reliability, and security.
              </Text>

              {/* Performance */}
              <Box mb="6">
                <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.300" }}>
                  Performance
                </Heading>
                <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
                  Performance can be measured in many ways, including:
                </Text>
                <VStack gap="3" align="stretch" pl="4">
                  <Box 
                    p="4" 
                    bg="gray.50" 
                    _dark={{ bg: "gray.800" }} 
                    borderRadius="md"
                    borderLeftWidth="3px"
                    borderLeftColor="blue.500"
                  >
                    <Text fontSize="md" fontWeight="600" mb="2">Transit Time</Text>
                    <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                      The amount of time required for a message to travel from one device to another
                    </Text>
                  </Box>
                  <Box 
                    p="4" 
                    bg="gray.50" 
                    _dark={{ bg: "gray.800" }} 
                    borderRadius="md"
                    borderLeftWidth="3px"
                    borderLeftColor="blue.500"
                  >
                    <Text fontSize="md" fontWeight="600" mb="2">Response Time</Text>
                    <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                      The time elapsed between an inquiry and a response
                    </Text>
                  </Box>
                  <Box 
                    p="4" 
                    bg="gray.50" 
                    _dark={{ bg: "gray.800" }} 
                    borderRadius="md"
                    borderLeftWidth="3px"
                    borderLeftColor="blue.500"
                  >
                    <Text fontSize="md" fontWeight="600" mb="2">Other Factors</Text>
                    <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                      Number of users, type of transmission medium, hardware capabilities, and software efficiency
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Reliability */}
              <Box mb="6">
                <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.300" }}>
                  Reliability
                </Heading>
                <Box 
                  p="4" 
                  bg="gray.50" 
                  _dark={{ bg: "gray.800" }} 
                  borderRadius="md"
                  borderLeftWidth="3px"
                  borderLeftColor="blue.500"
                >
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    Reliability is a measure of the frequency of failure and the time needed to recover from failures. 
                    Network robustness is crucial for ensuring continuous operation and minimal disruption to services.
                  </Text>
                </Box>
              </Box>

              {/* Security */}
              <Box>
                <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.300" }}>
                  Security
                </Heading>
                <Box 
                  p="4" 
                  bg="gray.50" 
                  _dark={{ bg: "gray.800" }} 
                  borderRadius="md"
                  borderLeftWidth="3px"
                  borderLeftColor="blue.500"
                >
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    Network security involves protecting data from unauthorized users. This includes implementing measures 
                    to prevent unauthorized access, data breaches, and ensuring data integrity and confidentiality.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Physical Structure */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
            >
              <Heading size="xl" mb="4" color="blue.700" _dark={{ color: "blue.400" }}>
                Physical Structure
              </Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                Before discussing networks, we need to define some network terms. The term <Text as="span" fontWeight="700">link</Text> refers 
                to the physical communication pathway that transfers data from one device to another. The term <Text as="span" fontWeight="700">topology</Text> refers 
                to the way a network is laid out physically or logically.
              </Text>
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="6">
                There are two primary types of connections in networks: <Text as="span" fontWeight="700">point-to-point</Text> and{' '}
                <Text as="span" fontWeight="700">multipoint</Text>.
              </Text>

              {/* Point-to-Point */}
              <Box mb="6">
                <Heading size="lg" mb="4" color="blue.600" _dark={{ color: "blue.300" }}>
                  Point-to-Point Connection
                </Heading>
                <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                  A point-to-point connection provides a dedicated link between two devices. The entire capacity of the 
                  link is reserved for transmission between those two devices. Most point-to-point connections use an 
                  actual length of wire or cable to connect the two ends.
                </Text>
                <Box py="4" mb="4">
                  <ZoomableImage 
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20200609153707/point-to-point.png"
                    alt="Point-to-Point Connection Diagram"
                    maxWidth="700px"
                  />
                </Box>
                <Box 
                  p="4" 
                  bg="gray.50" 
                  _dark={{ bg: "gray.800" }} 
                  borderRadius="md"
                  borderLeftWidth="4px"
                  borderLeftColor="blue.500"
                >
                  <Text fontSize="md" fontWeight="600" mb="2">Characteristics:</Text>
                  <VStack gap="2" align="stretch">
                    <Text fontSize="md" lineHeight="tall">
                      • Dedicated link between exactly two devices
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Full capacity available for the two connected devices
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Direct physical connection (wire or cable)
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Higher security due to dedicated connection
                    </Text>
                  </VStack>
                </Box>
              </Box>

              {/* Multipoint */}
              <Box>
                <Heading size="lg" mb="4" color="blue.600" _dark={{ color: "blue.300" }}>
                  Multipoint Connection
                </Heading>
                <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                  A multipoint (also called multidrop) connection is one in which more than two devices share a single 
                  link. In a multipoint environment, the capacity of the channel is shared, either spatially or temporally. 
                  If several devices can use the link simultaneously, it is a spatially shared connection. If users must 
                  take turns, it is a timeshared connection.
                </Text>
                <Box py="4" mb="4">
                  <ZoomableImage 
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20200609153729/multipoint.png"
                    alt="Multipoint Connection Diagram"
                    maxWidth="700px"
                  />
                </Box>
                <Box 
                  p="4" 
                  bg="gray.50" 
                  _dark={{ bg: "gray.800" }} 
                  borderRadius="md"
                  borderLeftWidth="4px"
                  borderLeftColor="blue.500"
                >
                  <Text fontSize="md" fontWeight="600" mb="2">Characteristics:</Text>
                  <VStack gap="2" align="stretch">
                    <Text fontSize="md" lineHeight="tall">
                      • Multiple devices (more than two) share a single link
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Channel capacity is shared among all devices
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Can be spatially shared (simultaneous use) or timeshared (taking turns)
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • More cost-effective for connecting multiple devices
                    </Text>
                    <Text fontSize="md" lineHeight="tall">
                      • Common in broadcast networks and shared media LANs
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </Box>

            {/* Comparison Table */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
            >
              <Heading size="xl" mb="6" color="blue.700" _dark={{ color: "blue.400" }}>
                Point-to-Point vs. Multipoint Comparison
              </Heading>
              
              <Box overflowX="auto">
                <Box 
                  as="table" 
                  w="full" 
                  borderWidth="1px" 
                  borderColor="gray.300" 
                  _dark={{ borderColor: "gray.600" }}
                  borderRadius="lg"
                  overflow="hidden"
                  css={{
                    borderCollapse: 'collapse',
                    '& th': {
                      backgroundColor: 'var(--chakra-colors-blue-600)',
                      color: 'white',
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                      borderBottom: '2px solid var(--chakra-colors-gray-300)',
                    },
                    '& td': {
                      padding: '1rem',
                      borderBottom: '1px solid var(--chakra-colors-gray-200)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                    },
                    '& tr:last-child td': {
                      borderBottom: 'none',
                    },
                    '& tr:nth-of-type(even)': {
                      backgroundColor: 'var(--chakra-colors-gray-50)',
                    },
                    '& td:first-of-type': {
                      fontWeight: '600',
                      backgroundColor: 'var(--chakra-colors-gray-100)',
                      color: 'var(--chakra-colors-gray-900)',
                    },
                  }}
                >
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Point-to-Point</th>
                      <th>Multipoint</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Number of Devices</td>
                      <td>Exactly two devices</td>
                      <td>More than two devices</td>
                    </tr>
                    <tr>
                      <td>Link Type</td>
                      <td>Dedicated link</td>
                      <td>Shared link</td>
                    </tr>
                    <tr>
                      <td>Capacity Usage</td>
                      <td>Full capacity available for two devices</td>
                      <td>Capacity shared among all connected devices</td>
                    </tr>
                    <tr>
                      <td>Sharing Method</td>
                      <td>No sharing required</td>
                      <td>Spatially shared (simultaneous) or timeshared (taking turns)</td>
                    </tr>
                    <tr>
                      <td>Cost</td>
                      <td>Higher cost due to dedicated connection</td>
                      <td>More cost-effective for multiple devices</td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td>Higher security (private connection)</td>
                      <td>Lower security (shared medium)</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Better performance (no contention)</td>
                      <td>Performance depends on number of devices and sharing method</td>
                    </tr>
                    <tr>
                      <td>Common Uses</td>
                      <td>Direct connections, dedicated lines, WAN links</td>
                      <td>LANs, broadcast networks, bus topology</td>
                    </tr>
                  </tbody>
                </Box>
              </Box>
            </Box>

            {/* Key Takeaways */}
            <Box 
              p="6" 
              bg="gray.50" 
              _dark={{ bg: "gray.800" }} 
              borderRadius="lg"
              borderLeftWidth="4px"
              borderLeftColor="blue.500"
            >
              <Heading size="lg" mb="4" color="blue.700" _dark={{ color: "blue.400" }}>
                Key Takeaways
              </Heading>
              <VStack gap="3" align="stretch">
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">1.</Text> A network is the interconnection of devices capable of 
                  communication, including hosts and connecting devices.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">2.</Text> Networks are evaluated based on three main criteria: 
                  Performance, Reliability, and Security.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">3.</Text> Performance is measured by transit time, response time, 
                  and factors like number of users and transmission medium type.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">4.</Text> Point-to-point connections provide dedicated links between 
                  two devices with full capacity utilization.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">5.</Text> Multipoint connections allow multiple devices to share a 
                  single link, either spatially or through time-sharing.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Quiz Section */}
        <QuizModal
          sectionId="network"
          sectionTitle="Network"
          questions={networkQuizQuestions}
        />
      </VStack>
    </Container>
  );
}
