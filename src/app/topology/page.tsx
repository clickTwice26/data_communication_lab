import { Container, Heading, Text, VStack, Box, HStack, Grid } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { ZoomableImage } from '@/components/zoomable-image';
import { QuizModal, QuizQuestion } from '@/components/quiz-modal';
import { FaNetworkWired, FaStar, FaRing, FaGlobeAmericas, FaTree, FaProjectDiagram } from 'react-icons/fa';

const topologyQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What does network topology refer to?',
    options: [
      'The physical arrangement of network devices and connections',
      'The speed of data transmission',
      'The security protocols used',
      'The type of cables used'
    ],
    correctAnswer: 0,
    explanation: 'Network topology refers to the physical arrangement of devices and connections in a network. It describes how computers, printers, and other devices are connected to each other and to the network.'
  },
  {
    id: 2,
    question: 'In a bus topology, what is the main transmission medium?',
    options: [
      'A central hub or switch',
      'A single cable to which all devices are connected',
      'Individual point-to-point connections',
      'A ring of connections'
    ],
    correctAnswer: 1,
    explanation: 'In a bus topology, all devices are connected to a single cable, called the bus. Data transmitted by any device travels along this single cable to all other devices on the network.'
  },
  {
    id: 3,
    question: 'What is a disadvantage of bus topology?',
    options: [
      'High cost of implementation',
      'If the main cable fails, the entire network goes down',
      'Requires a dedicated central device',
      'Cannot support multiple devices'
    ],
    correctAnswer: 1,
    explanation: 'A major disadvantage of bus topology is that if the main cable (bus) fails, the entire network stops working. Additionally, if one cable segment fails, it can affect the entire network.'
  },
  {
    id: 4,
    question: 'In a star topology, what is at the center?',
    options: [
      'A bus cable',
      'A central hub, switch, or router',
      'A ring connection',
      'A mesh network'
    ],
    correctAnswer: 1,
    explanation: 'In a star topology, a central hub, switch, or router is at the center, and all other devices connect to this central device. All communication passes through the central device.'
  },
  {
    id: 5,
    question: 'What is an advantage of star topology?',
    options: [
      'Lower cost than bus topology',
      'If one device fails, only that device is affected; the rest of the network continues to work',
      'No need for a central device',
      'All devices can communicate directly'
    ],
    correctAnswer: 1,
    explanation: 'A major advantage of star topology is that if one device or line fails, the rest of the network is not affected. The failure is isolated to that single device, not affecting other connections.'
  },
  {
    id: 6,
    question: 'What happens if the central device fails in a star topology?',
    options: [
      'Nothing, the network continues to work',
      'The entire network stops working',
      'Only adjacent devices are affected',
      'Data reroutes through bus connections'
    ],
    correctAnswer: 1,
    explanation: 'A disadvantage of star topology is that if the central hub/switch fails, the entire network goes down. The central device becomes a single point of failure for the entire network.'
  },
  {
    id: 7,
    question: 'In a ring topology, how are devices connected?',
    options: [
      'To a central hub',
      'In a circle, where each device is connected to exactly two others',
      'All connected to one main cable',
      'In a hierarchical tree structure'
    ],
    correctAnswer: 1,
    explanation: 'In a ring topology, devices are arranged in a circle. Each device is connected to exactly two other devices, forming a closed loop. Data travels around the ring from one device to another.'
  },
  {
    id: 8,
    question: 'What is a significant disadvantage of ring topology?',
    options: [
      'It requires a central device',
      'If any link or device in the ring fails, the entire network fails',
      'It cannot support high-speed transmission',
      'It is too expensive to implement'
    ],
    correctAnswer: 1,
    explanation: 'A major disadvantage of ring topology is that if any one link or device fails, the entire network is broken. The data cannot reach devices on the other side of the break, making it very vulnerable to failure.'
  },
  {
    id: 9,
    question: 'In a mesh topology, how are devices connected?',
    options: [
      'To a central hub only',
      'In a circle',
      'Each device is connected to every other device',
      'Through a single backbone cable'
    ],
    correctAnswer: 2,
    explanation: 'In a mesh topology, each device is connected to every other device. This means there are direct links between all pairs of devices, providing multiple paths for data transmission.'
  },
  {
    id: 10,
    question: 'What is the main advantage of mesh topology?',
    options: [
      'Low cost of implementation',
      'Easy to install and maintain',
      'If one link fails, data can still travel through other paths; provides high redundancy',
      'Requires less cabling'
    ],
    correctAnswer: 2,
    explanation: 'The main advantage of mesh topology is high redundancy and fault tolerance. If one link fails, data can still reach its destination through alternative paths, making the network very reliable.'
  },
  {
    id: 11,
    question: 'What is a disadvantage of mesh topology?',
    options: [
      'Devices cannot communicate directly',
      'High cost due to many cables and connections; difficult to install and maintain',
      'Requires a central hub',
      'Cannot support multiple devices'
    ],
    correctAnswer: 1,
    explanation: 'A major disadvantage of mesh topology is the high cost. It requires many cables and connections, one for each pair of devices. The number of connections is n*(n-1)/2, where n is the number of devices.'
  },
  {
    id: 12,
    question: 'What is a tree topology?',
    options: [
      'A single ring of connections',
      'A hierarchical topology that combines star and bus topologies',
      'All devices connected to one cable',
      'Each device connected to all others'
    ],
    correctAnswer: 1,
    explanation: 'Tree topology is a hierarchical topology that combines characteristics of star and bus topologies. It has a root node with branches, and each branch can have multiple levels of devices organized in a tree structure.'
  },
  {
    id: 13,
    question: 'What is a hybrid topology?',
    options: [
      'A topology that uses only one type of connection',
      'A combination of two or more different topology types',
      'A topology where all devices are in a ring',
      'A topology without any central device'
    ],
    correctAnswer: 1,
    explanation: 'A hybrid topology is a combination of two or more different topology types. For example, a network might use star topology in one section and tree topology in another section connected together.'
  },
];

export default function TopologyPage() {
  return (
    <Container maxW="full" py="6" px={{ base: "3", md: "4" }}>
    
      <VStack gap="8" align="stretch">
 
        <Box>
          <VStack gap="6" align="stretch">
            {/* Introduction */}
            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>
                What is Network Topology?
              </Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                Network topology refers to the physical and logical arrangement of nodes (devices) and connections in a computer network. 
                It describes how computers, printers, servers, and other network devices are interconnected and how data flows between them. 
                The topology you choose affects network performance, reliability, cost, and scalability. Different environments require different topologies based on their specific needs and constraints.
              </Text>
            </Box>

            {/* Bus Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaNetworkWired size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Bus Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In a <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>bus topology</Text>, 
                all devices are connected to a single main cable called the bus or backbone. Each device sends data onto 
                the bus, and the data travels to all connected devices. Only the device with the matching address accepts the data.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115349427884/droplines_.webp"
                  alt="Bus Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Characteristics:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Simple and inexpensive to implement</Text>
                  <Text fontSize="md">• Easy to extend by adding more devices</Text>
                  <Text fontSize="md">• All devices share the same bandwidth</Text>
                  <Text fontSize="md">• Single cable acts as shared transmission medium</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> Low cost, easy installation, works well for small networks</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Network failure if main cable breaks, limited cable length, heavy traffic can cause collisions</Text>
              </Box>
            </Box>

            {/* Star Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaStar size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Star Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In a <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>star topology</Text>, 
                all devices are connected to a central hub, switch, or router. Each device has its own dedicated connection to 
                the central device. All data communication passes through the central device, which acts as the controller and repeater.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115231111145/star_topology.webp"
                  alt="Star Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Characteristics:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Central hub/switch/router at the center</Text>
                  <Text fontSize="md">• Each device has dedicated connection to center</Text>
                  <Text fontSize="md">• All communication flows through central device</Text>
                  <Text fontSize="md">• Easy to add or remove devices</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> Easy to install, failure isolated to one device, good performance, supports multiple transmission media</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Central device failure brings down entire network, more cabling required, higher cost for central device</Text>
              </Box>
            </Box>

            {/* Ring Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaRing size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Ring Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In a <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>ring topology</Text>, 
                devices are arranged in a circular formation. Each device is connected to exactly two other devices, forming a closed loop. 
                Data travels around the ring from one device to the next until it reaches its destination. Common in token ring networks.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115504176473/ring_topology_.webp"
                  alt="Ring Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Characteristics:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Devices arranged in a circle</Text>
                  <Text fontSize="md">• Each device connected to exactly two others</Text>
                  <Text fontSize="md">• Data moves in one direction around the ring</Text>
                  <Text fontSize="md">• Often uses token passing for transmission control</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> Fair access to transmission medium, predictable behavior, works well with token passing</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Failure of one device or link breaks entire network, difficult to troubleshoot, adding/removing devices disrupts network</Text>
              </Box>
            </Box>

            {/* Mesh Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaGlobeAmericas size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Mesh Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In a <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>mesh topology</Text>, 
                each device is connected to every other device. This provides multiple paths for data transmission. 
                There are two types: full mesh (every device connected to every other) and partial mesh (some devices have multiple connections).
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115047723647/mesh_topology.webp"
                  alt="Mesh Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Characteristics:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Each device connects to multiple other devices</Text>
                  <Text fontSize="md">• Multiple paths available for data transmission</Text>
                  <Text fontSize="md">• Full mesh: n(n-1)/2 connections for n devices</Text>
                  <Text fontSize="md">• Provides high redundancy and fault tolerance</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> High redundancy, reliable (failure of one link doesn't disconnect network), excellent for critical networks</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Very high cost (many cables), complex installation and maintenance, scales poorly, uses significant bandwidth for routing</Text>
              </Box>
            </Box>

            {/* Tree Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaTree size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Tree Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>Tree topology</Text> is a 
                hierarchical topology that combines characteristics of star and bus topologies. It has a root node with branches 
                extending from it. Each branch can have multiple levels of devices organized in a tree-like structure, similar to 
                an organizational hierarchy.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115607389808/tree_topology.webp"
                  alt="Tree Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Characteristics:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Hierarchical arrangement of devices</Text>
                  <Text fontSize="md">• Root node with branches</Text>
                  <Text fontSize="md">• Multiple levels of nodes</Text>
                  <Text fontSize="md">• Combines star and bus characteristics</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> Organized structure, scales well, can support large networks, flexible expansion</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Failure of upper-level nodes can disconnect entire branches, complex configuration, higher cost than bus or star alone</Text>
              </Box>
            </Box>

            {/* Hybrid Topology */}
            <Box 
              p="6" 
              borderWidth="1px" 
              borderRadius="lg" 
              borderColor="gray.200" 
              _dark={{ borderColor: "gray.700", bg: "gray.900" }}
              bg="white"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "blue.400",
                boxShadow: "lg"
              }}
            >
              <HStack mb="4" gap="3">
                <Box 
                  p="3" 
                  bg="blue.600" 
                  borderRadius="lg" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaProjectDiagram size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Hybrid Topology
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                A <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>hybrid topology</Text> is a 
                combination of two or more different topology types. Real-world networks often use hybrid topologies because 
                different departments or sections may have different requirements. This approach combines the benefits of multiple 
                topologies while managing their limitations.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20251129115657703877/23.webp"
                  alt="Hybrid Topology Diagram"
                  maxWidth="700px"
                />
              </Box>

              <Box 
                p="4" 
                bg="gray.50" 
                _dark={{ bg: "gray.800" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
                mb="4"
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Common Examples:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md">• Star topology connected with another star topology via a bus</Text>
                  <Text fontSize="md">• Star topology connected with a tree topology</Text>
                  <Text fontSize="md">• Mesh network for critical servers connected to star topology for workstations</Text>
                  <Text fontSize="md">• Multiple bus segments connected via main backbone</Text>
                </VStack>
              </Box>

              <Box 
                p="4" 
                bg="blue.50" 
                _dark={{ bg: "blue.900" }} 
                borderRadius="lg"
                borderLeftWidth="4px"
                borderLeftColor="blue.500"
              >
                <Text mb="3"><Text as="span" fontWeight="600" color="green.700" _dark={{ color: "green.300" }}>Advantages:</Text> Flexible, can optimize for different needs, scalable, can isolate network problems</Text>
                <Text><Text as="span" fontWeight="600" color="red.700" _dark={{ color: "red.300" }}>Disadvantages:</Text> Complex design and installation, difficult to troubleshoot, higher cost, requires skilled management</Text>
              </Box>
            </Box>

            {/* Comparison Table */}
            <Box>
              <Heading as="h3" size="lg" mb="4" color="blue.600" _dark={{ color: "blue.400" }}>
                Topology Comparison
              </Heading>
              <Box 
                overflowX="auto" 
                bg="white"
                _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                p="6" 
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
              >
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Topology</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Cost</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Installation</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Performance</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Reliability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>Bus</td>
                      <td style={{ padding: '16px' }}>Low</td>
                      <td style={{ padding: '16px' }}>Easy</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Low</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>Star</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Easy</td>
                      <td style={{ padding: '16px' }}>Good</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>Ring</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Good</td>
                      <td style={{ padding: '16px' }}>Low</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>Mesh</td>
                      <td style={{ padding: '16px' }}>High</td>
                      <td style={{ padding: '16px' }}>Difficult</td>
                      <td style={{ padding: '16px' }}>Excellent</td>
                      <td style={{ padding: '16px' }}>Excellent</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>Tree</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                      <td style={{ padding: '16px' }}>Good</td>
                      <td style={{ padding: '16px' }}>Medium</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '16px' }}>Hybrid</td>
                      <td style={{ padding: '16px' }}>Variable</td>
                      <td style={{ padding: '16px' }}>Complex</td>
                      <td style={{ padding: '16px' }}>Variable</td>
                      <td style={{ padding: '16px' }}>Variable</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>

            {/* Key Concepts */}
            <Box 
              p="6" 
              bg="blue.50" 
              _dark={{ bg: "blue.900" }}
              borderRadius="lg"
              borderLeftWidth="4px"
              borderLeftColor="blue.500"
            >
              <Heading as="h3" size="lg" mb="4" color="blue.700" _dark={{ color: "blue.300" }}>
                Key Concepts to Remember
              </Heading>
              <VStack align="start" gap="3">
                <Text fontSize="md"><Text as="span" fontWeight="600">Scalability:</Text> How well the topology can grow with additional devices</Text>
                <Text fontSize="md"><Text as="span" fontWeight="600">Reliability:</Text> How well the network handles device or link failures</Text>
                <Text fontSize="md"><Text as="span" fontWeight="600">Cost:</Text> Installation and maintenance expenses</Text>
                <Text fontSize="md"><Text as="span" fontWeight="600">Performance:</Text> Speed and efficiency of data transmission</Text>
                <Text fontSize="md"><Text as="span" fontWeight="600">Fault Tolerance:</Text> Ability to continue functioning despite failures</Text>
                <Text fontSize="md"><Text as="span" fontWeight="600">Maintainability:</Text> Ease of monitoring, troubleshooting, and repair</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Quiz Section */}
        <QuizModal
          sectionId="topology"
          sectionTitle="Network Topology"
          questions={topologyQuizQuestions}
        />
      </VStack>
    </Container>
  );
}
