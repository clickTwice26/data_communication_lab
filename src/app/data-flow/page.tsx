import { Container, Heading, Text, VStack, Box, Grid, HStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { ZoomableImage } from '@/components/zoomable-image';
import { QuizModal, QuizQuestion } from '@/components/quiz-modal';
import { FaArrowRight, FaArrowsAltH, FaExchangeAlt } from 'react-icons/fa';

const dataFlowQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'In which mode of communication can data flow in only one direction?',
    options: [
      'Simplex',
      'Half-duplex',
      'Full-duplex',
      'Multiplex'
    ],
    correctAnswer: 0,
    explanation: 'Simplex mode is unidirectional, meaning communication can occur in only one direction. The sender can only send data, and the receiver can only receive data.'
  },
  {
    id: 2,
    question: 'Which device pair is an example of simplex communication?',
    options: [
      'Telephone',
      'Walkie-talkie',
      'Keyboard and monitor',
      'Two-way radio'
    ],
    correctAnswer: 2,
    explanation: 'A keyboard and monitor operate in simplex mode. The keyboard can only send data (input), and the monitor can only receive and display data (output).'
  },
  {
    id: 3,
    question: 'What is the key characteristic of half-duplex mode?',
    options: [
      'Data flows in only one direction',
      'Data flows in both directions simultaneously',
      'Data flows in both directions but not at the same time',
      'Data cannot be transmitted'
    ],
    correctAnswer: 2,
    explanation: 'In half-duplex mode, each station can both transmit and receive, but not at the same time. When one device is sending, the other can only receive, and vice versa.'
  },
  {
    id: 4,
    question: 'Which of the following uses half-duplex communication?',
    options: [
      'Telephone network',
      'Walkie-talkies',
      'Television broadcasting',
      'Computer keyboard'
    ],
    correctAnswer: 1,
    explanation: 'Walkie-talkies and CB (citizens band) radios are both half-duplex systems. Users must take turns speaking and listening, often saying "over" to signal the end of their transmission.'
  },
  {
    id: 5,
    question: 'What advantage does half-duplex have over simplex?',
    options: [
      'Higher speed',
      'Can use the entire channel capacity in one direction',
      'Costs less',
      'More secure'
    ],
    correctAnswer: 1,
    explanation: 'The half-duplex mode is used in cases where there is no need for communication in both directions at the same time; the entire capacity of the channel can be utilized for each direction.'
  },
  {
    id: 6,
    question: 'In full-duplex mode, what happens to the channel capacity?',
    options: [
      'It doubles',
      'It must be divided between the two directions',
      'It remains the same for each direction',
      'It is not used'
    ],
    correctAnswer: 1,
    explanation: 'In full-duplex mode, both stations can transmit and receive simultaneously. However, the capacity of the channel must be divided between the two directions.'
  },
  {
    id: 7,
    question: 'Which is a common example of full-duplex communication?',
    options: [
      'Radio broadcasting',
      'Walkie-talkie',
      'Telephone network',
      'Keyboard to computer'
    ],
    correctAnswer: 2,
    explanation: 'The telephone network is a common example of full-duplex communication. When two people are communicating by telephone, both can talk and listen at the same time.'
  },
  {
    id: 8,
    question: 'What is another name for full-duplex mode?',
    options: [
      'Uniplex',
      'Simplex',
      'Duplex',
      'Multiplex'
    ],
    correctAnswer: 2,
    explanation: 'Full-duplex mode is also called simply "duplex." It allows for bidirectional communication simultaneously in both directions.'
  }
];

export default function DataFlowPage() {
  return (
    <Container maxW="full" py="6" px={{ base: "3", md: "4" }}>
      <VStack gap="8" align="stretch">
 
        <Box>
          <VStack gap="6" align="stretch">
            {/* Introduction */}
            <Box>
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>
                What is Data Flow?
              </Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                Communication between two devices can be simplex, half-duplex, or full-duplex. Data flow refers to 
                the direction in which data travels between devices in a communication system. Understanding these modes 
                is crucial for designing efficient networks and selecting appropriate communication technologies.
              </Text>
            </Box>

            {/* Simplex Mode */}
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
                  <FaArrowRight size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Simplex Mode
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>simplex mode</Text>, 
                the communication is unidirectional, as on a one-way street. Only one of the two devices on a link can 
                transmit; the other can only receive. The simplex mode can use the entire capacity of the channel to 
                send data in one direction.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20190518182823/Untitled-Diagram-162.png"
                  alt="Simplex Mode Communication Diagram"
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
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Examples of Simplex Communication:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Keyboards and Traditional Monitors:</Text> The keyboard can only 
                    introduce input; the monitor can only accept output. The keyboard and monitor are not working in 
                    opposite directions simultaneously; rather, the stream is unidirectional.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Traditional Radio and Television Broadcasting:</Text> Audio and 
                    video signals travel from the broadcast station to home receivers, but not in the reverse direction.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Computer to Printer:</Text> Data flows only from the computer to 
                    the printer for printing documents.
                  </Text>
                </VStack>
              </Box>
            </Box>

            {/* Half-Duplex Mode */}
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
                  <FaArrowsAltH size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Half-Duplex Mode
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>half-duplex mode</Text>, 
                each station can both transmit and receive, but not at the same time. When one device is sending, the 
                other can only receive, and vice versa. The half-duplex mode is like a one-lane road with traffic 
                allowed in both directions, but only one direction at a time.
              </Text>

              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                The half-duplex mode is used in cases where there is no need for communication in both directions at 
                the same time; the entire capacity of the channel can be utilized for each direction.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20190518182850/Untitled-Diagram-172.png"
                  alt="Half-Duplex Mode Communication Diagram"
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
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Examples of Half-Duplex Communication:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Walkie-Talkies:</Text> Users must take turns speaking. When one 
                    person is transmitting (usually by pressing a button), the other person can only listen. They often 
                    say "over" to signal that they have finished speaking.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• CB (Citizens Band) Radios:</Text> Similar to walkie-talkies, 
                    these radios are half-duplex systems where users must alternate between transmitting and receiving.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Early Ethernet Networks:</Text> Used CSMA/CD (Carrier Sense 
                    Multiple Access with Collision Detection), which operated in half-duplex mode where devices had to 
                    take turns transmitting.
                  </Text>
                </VStack>
              </Box>
            </Box>

            {/* Full-Duplex Mode */}
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
                  <FaExchangeAlt size={24} />
                </Box>
                <Heading size="xl" color="blue.700" _dark={{ color: "blue.400" }}>
                  Full-Duplex Mode
                </Heading>
              </HStack>
              
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                In <Text as="span" fontWeight="700" color="blue.700" _dark={{ color: "blue.300" }}>full-duplex mode</Text> 
                (also called <Text as="span" fontWeight="700" fontStyle="italic">duplex</Text>), both stations can 
                transmit and receive simultaneously. The full-duplex mode is like a two-way street with traffic flowing 
                in both directions at the same time.
              </Text>

              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                One common example of full-duplex communication is the telephone network. When two people are 
                communicating by telephone, both can talk and listen at the same time. The full-duplex mode is used 
                when communication in both directions is required all the time. However, the capacity of the channel 
                must be divided between the two directions.
              </Text>

              <Box 
                py="4" 
                mb="4"
              >
                <ZoomableImage 
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20250214160949324516/Full-Duplex.png"
                  alt="Full-Duplex Mode Communication Diagram"
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
              >
                <Heading size="md" mb="3" color="gray.900" _dark={{ color: "gray.100" }}>
                  Examples of Full-Duplex Communication:
                </Heading>
                <VStack gap="2" align="stretch">
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Telephone Networks:</Text> Both parties can speak and listen 
                    simultaneously during a phone conversation, allowing for natural, flowing communication.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Modern Ethernet Networks:</Text> Switched Ethernet networks support 
                    full-duplex operation, allowing devices to send and receive data simultaneously without collisions.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Mobile Phone Communication:</Text> Like landline phones, mobile 
                    phones operate in full-duplex mode, enabling both parties to talk simultaneously.
                  </Text>
                  <Text fontSize="md" lineHeight="tall">
                    <Text as="span" fontWeight="600">• Video Conferencing:</Text> Systems like Zoom, Teams, or Skype allow 
                    multiple participants to send and receive audio and video simultaneously.
                  </Text>
                </VStack>
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
                Comparison of Data Flow Modes
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
                      <th>Parameters</th>
                      <th>Simplex</th>
                      <th>Half-Duplex</th>
                      <th>Full-Duplex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Direction of Communication</td>
                      <td>Unidirectional (one-way only)</td>
                      <td>Bidirectional (both ways, but one at a time)</td>
                      <td>Bidirectional (both ways simultaneously)</td>
                    </tr>
                    <tr>
                      <td>Sender and Receiver</td>
                      <td>In simplex mode, sender can send the data but sender cannot receive the data</td>
                      <td>In half-duplex mode, sender can send and also can receive the data but one at a time</td>
                      <td>In full-duplex mode, sender can send the data and also can receive the data simultaneously</td>
                    </tr>
                    <tr>
                      <td>Channel Usage</td>
                      <td>Usage of one channel for the transmission of data</td>
                      <td>Usage of one channel for the transmission of data</td>
                      <td>Usage of two channels for the transmission of data</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>The simplex mode provides less performance than half-duplex and full-duplex</td>
                      <td>The half-duplex mode provides less performance than full-duplex</td>
                      <td>Full-duplex provides better performance than simplex and half-duplex mode</td>
                    </tr>
                    <tr>
                      <td>Bandwidth Utilization</td>
                      <td>Simplex utilizes the maximum of a single bandwidth</td>
                      <td>The half-duplex involves lesser utilization of single bandwidth at the time of transmission</td>
                      <td>The full-duplex doubles the utilization of transmission bandwidth</td>
                    </tr>
                    <tr>
                      <td>Suitable For</td>
                      <td>It is suitable for those transmissions when there is requirement of full bandwidth for delivering data</td>
                      <td>It is suitable for those transmissions when there is requirement of sending data in both directions, but not at the same time</td>
                      <td>It is suitable for those transmissions when there is requirement of sending and receiving data simultaneously in both directions</td>
                    </tr>
                    <tr>
                      <td>Examples</td>
                      <td>Keyboard and monitor, Radio broadcasting</td>
                      <td>Walkie-talkie, CB radios</td>
                      <td>Telephone networks, Mobile phones, Video conferencing</td>
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
                  <Text as="span" fontWeight="700">1.</Text> Simplex mode provides unidirectional communication with 
                  full channel capacity in one direction.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">2.</Text> Half-duplex mode allows bidirectional communication but 
                  only one direction at a time, utilizing full capacity alternately.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">3.</Text> Full-duplex mode enables simultaneous bidirectional 
                  communication but requires dividing the channel capacity.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <Text as="span" fontWeight="700">4.</Text> The choice of data flow mode depends on the application 
                  requirements, cost considerations, and available technology.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Quiz Section */}
        <QuizModal
          sectionId="data-flow"
          sectionTitle="Data Flow"
          questions={dataFlowQuizQuestions}
        />
      </VStack>
    </Container>
  );
}
