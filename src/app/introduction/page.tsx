import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { ZoomableImage } from '@/components/zoomable-image';
import { QuizModal, QuizQuestion } from '@/components/quiz-modal';

const introductionQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is data communication?',
    options: [
      'The exchange of data between two devices through some form of transmission medium',
      'The process of storing data on a computer',
      'The encryption of data for security purposes',
      'The compression of files for faster transfer'
    ],
    correctAnswer: 0,
    explanation: 'Data communication refers to the exchange of data between two devices through some form of transmission medium. It is the process of sending and receiving data from one device to another.'
  },
  {
    id: 2,
    question: 'How many fundamental components are there in a data communication system?',
    options: [
      '3 components',
      '4 components',
      '5 components',
      '6 components'
    ],
    correctAnswer: 2,
    explanation: 'There are 5 fundamental components: Message, Sender, Receiver, Transmission Medium, and Protocol.'
  },
  {
    id: 3,
    question: 'Which component represents the physical path by which the message travels?',
    options: [
      'Protocol',
      'Sender',
      'Transmission Medium',
      'Receiver'
    ],
    correctAnswer: 2,
    explanation: 'The Transmission Medium is the physical path by which the message travels from sender to receiver, such as twisted-pair wire, coaxial cable, or fiber-optic cable.'
  },
  {
    id: 4,
    question: 'What does "delivery" mean in the characteristics of data communication?',
    options: [
      'Data must be delivered quickly',
      'Data must be delivered to the correct destination',
      'Data must be delivered without errors',
      'Data must be delivered in packets'
    ],
    correctAnswer: 1,
    explanation: 'Delivery means the system must deliver data to the correct destination. Data must be received by the intended device or user and only by that device or user.'
  },
  {
    id: 5,
    question: 'What is jitter in data communication?',
    options: [
      'The total time taken for data transmission',
      'The variation in packet arrival time',
      'The number of errors in transmission',
      'The speed of data transfer'
    ],
    correctAnswer: 1,
    explanation: 'Jitter refers to the variation in the packet arrival time. It is the uneven delay in the delivery of audio or video packets, which can cause quality issues.'
  },
  {
    id: 6,
    question: 'What is a protocol in data communication?',
    options: [
      'A physical device that connects computers',
      'A set of rules that govern data communication',
      'The speed at which data is transmitted',
      'A type of transmission medium'
    ],
    correctAnswer: 1,
    explanation: 'A protocol is a set of rules that govern data communication. It represents an agreement between the communicating devices. Without a protocol, two devices may be connected but not communicating.'
  },
  {
    id: 7,
    question: 'Which characteristic ensures that data has not been altered during transmission?',
    options: [
      'Delivery',
      'Timeliness',
      'Accuracy',
      'Jitter'
    ],
    correctAnswer: 2,
    explanation: 'Accuracy ensures the system must deliver the data accurately. Data that have been altered in transmission and left uncorrected are unusable.'
  },
  {
    id: 8,
    question: 'What type of transmission delivers data as they are produced, in the same order, without significant delay?',
    options: [
      'Batch transmission',
      'Real-time transmission',
      'Packet transmission',
      'Circuit transmission'
    ],
    correctAnswer: 1,
    explanation: 'Real-time transmission delivers data as they are produced, in the same order that they are produced, and without significant delay. This is crucial for video and audio streaming.'
  }
];

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
              <Heading as="h2" size="2xl" mb="4" fontWeight="bold" color="blue.600" _dark={{ color: "blue.400" }}>Characteristics of Data Communication</Heading>
              <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="4">
                The effectiveness of a data communications system depends on four fundamental characteristics: 
                delivery, accuracy, timeliness, and jitter.
              </Text>
              
              <VStack gap="5" align="stretch">
                <Box 
                  p="5" 
                  borderWidth="1px" 
                  borderRadius="lg" 
                  borderColor="blue.200" 
                  _dark={{ borderColor: "blue.800", bg: "gray.900" }}
                  bg="blue.50"
                  transition="all 0.3s"
                  _hover={{ 
                    borderColor: "blue.400",
                    boxShadow: "md",
                    transform: "translateY(-2px)"
                  }}
                >
                  <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.400" }}>
                    1. Delivery
                  </Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The system must deliver data to the correct destination. Data must be received by the intended 
                    device or user and only by that device or user. Proper addressing and routing mechanisms ensure 
                    that information reaches its intended recipient without being misdirected.
                  </Text>
                </Box>

                <Box 
                  p="5" 
                  borderWidth="1px" 
                  borderRadius="lg" 
                  borderColor="blue.200" 
                  _dark={{ borderColor: "blue.800", bg: "gray.900" }}
                  bg="blue.50"
                  transition="all 0.3s"
                  _hover={{ 
                    borderColor: "blue.400",
                    boxShadow: "md",
                    transform: "translateY(-2px)"
                  }}
                >
                  <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.400" }}>
                    2. Accuracy
                  </Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    The system must deliver the data accurately. Data that have been altered in transmission and left 
                    uncorrected are unusable. Error detection and correction mechanisms, such as checksums and parity bits, 
                    are essential to maintain data integrity throughout the communication process.
                  </Text>
                </Box>

                <Box 
                  p="5" 
                  borderWidth="1px" 
                  borderRadius="lg" 
                  borderColor="blue.200" 
                  _dark={{ borderColor: "blue.800", bg: "gray.900" }}
                  bg="blue.50"
                  transition="all 0.3s"
                  _hover={{ 
                    borderColor: "blue.400",
                    boxShadow: "md",
                    transform: "translateY(-2px)"
                  }}
                >
                  <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.400" }}>
                    3. Timeliness
                  </Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
                    The system must deliver data in a timely manner. Data delivered late are useless. In the case of 
                    video and audio, timely delivery means delivering data as they are produced, in the same order that 
                    they are produced, and without significant delay. This kind of delivery is called{' '}
                    <Text as="span" fontWeight="600" fontStyle="italic">real-time transmission</Text>.
                  </Text>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    For example, live video streaming requires data to arrive promptly to maintain smooth playback. 
                    Delays can result in buffering or degraded user experience.
                  </Text>
                </Box>

                <Box 
                  p="5" 
                  borderWidth="1px" 
                  borderRadius="lg" 
                  borderColor="blue.200" 
                  _dark={{ borderColor: "blue.800", bg: "gray.900" }}
                  bg="blue.50"
                  transition="all 0.3s"
                  _hover={{ 
                    borderColor: "blue.400",
                    boxShadow: "md",
                    transform: "translateY(-2px)"
                  }}
                >
                  <Heading size="lg" mb="3" color="blue.600" _dark={{ color: "blue.400" }}>
                    4. Jitter
                  </Heading>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9} mb="3">
                    Jitter refers to the variation in the packet arrival time. It is the uneven delay in the delivery of 
                    audio or video packets. For example, let us assume that video packets are sent every 30 ms. If some 
                    of the packets arrive with 30-ms delay and others with 40-ms delay, an uneven quality in the video 
                    is the result.
                  </Text>
                  <Text fontSize="md" lineHeight="tall" opacity={0.9}>
                    High jitter can cause choppy audio in VoIP calls or stuttering in video conferences. Network protocols 
                    use buffering and quality of service (QoS) mechanisms to minimize jitter effects.
                  </Text>
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

        {/* Quiz Section */}
        <QuizModal
          sectionId="introduction"
          sectionTitle="Introduction to Data Communication"
          questions={introductionQuizQuestions}
        />
      </VStack>
    </Container>
  );
}
