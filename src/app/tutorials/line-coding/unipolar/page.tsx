import { Container, VStack, Box, Heading, Text, HStack, Badge, Grid } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { UnipolarSimulator } from '@/components/unipolar-simulator';
import { Button } from '@/components/ui/button';
import { FaCheckCircle, FaCircle, FaArrowRight, FaTimesCircle, FaCheck } from 'react-icons/fa';

export default function UnipolarLineCodingPage() {
  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader
          heading="Unipolar Line Coding"
          description="Single-polarity signaling with NRZ representation"
        />

        {/* Overview */}
        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            Unipolar signaling uses one active voltage polarity for binary representation and is one of the earliest
            digital line coding approaches. In this scheme, one binary value is represented by a positive voltage
            while the other is represented by zero voltage, making it conceptually simple but with practical limitations.
          </Text>
        </Box>

        {/* Learning Objectives */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Learning Objectives
          </Heading>
          <VStack align="stretch" gap="3">
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '8px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall">
                Understand how Unipolar NRZ maps bits to signal levels
              </Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '8px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall">
                Identify practical drawbacks such as DC component and synchronization challenges
              </Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '8px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall">
                Recognize where unipolar encoding is useful as a conceptual baseline
              </Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '8px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall">
                Visualize signal transitions and analyze timing characteristics
              </Text>
            </HStack>
          </VStack>
        </Box>

        {/* Interactive Simulator */}
        <UnipolarSimulator />

        {/* What is Unipolar NRZ? */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            What is Unipolar NRZ?
          </Heading>
          <VStack align="stretch" gap="4">
            <Text fontSize="md" lineHeight="tall" opacity={0.9}>
              In Unipolar Non-Return-to-Zero (NRZ), one binary value (typically 1) is represented by a positive voltage
              (+V), while the other value (0) is represented by zero voltage (0V). The signal maintains its level for
              the entire duration of each bit period.
            </Text>
            <Text fontSize="md" lineHeight="tall" opacity={0.9}>
              The term "Non-Return-to-Zero" means that the signal does not return to a neutral or zero state between
              consecutive bits of the same value. This is in contrast to Return-to-Zero (RZ) encoding where the signal
              returns to zero voltage midway through each bit period.
            </Text>
            <Box p="4" bg="blue.50" _dark={{ bg: 'blue.950' }} borderRadius="md">
              <Text fontSize="md" fontWeight="600" mb="2">
                Key Characteristic:
              </Text>
              <Text fontSize="md" lineHeight="tall">
                Because the signal does not return to a neutral midpoint within each bit interval, this format is
                simple to generate but less robust for clock recovery over long sequences of identical bits. This makes
                it challenging to maintain synchronization in real-world transmission systems.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Signal Representation */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Signal Representation
          </Heading>
          <VStack align="stretch" gap="4">
            <Text fontSize="md" lineHeight="tall" opacity={0.9}>
              Understanding how binary data maps to voltage levels is fundamental to unipolar signaling:
            </Text>
            
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
              <Box p="5" bg="green.50" _dark={{ bg: 'green.950' }} borderRadius="md" borderWidth="2px" borderColor="green.400">
                <HStack mb="3">
                  <Badge colorScheme="green" fontSize="lg" px="3" py="1">
                    Binary 1
                  </Badge>
                </HStack>
                <Text fontSize="md" fontWeight="600" mb="2">
                  Positive Voltage (+V)
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Typically +5V, +3.3V, or other positive voltage depending on the system. The signal remains at this
                  high level for the entire bit duration.
                </Text>
              </Box>

              <Box p="5" bg="orange.50" _dark={{ bg: 'orange.950' }} borderRadius="md" borderWidth="2px" borderColor="orange.400">
                <HStack mb="3">
                  <Badge colorScheme="orange" fontSize="lg" px="3" py="1">
                    Binary 0
                  </Badge>
                </HStack>
                <Text fontSize="md" fontWeight="600" mb="2">
                  Zero Voltage (0V)
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  No voltage is applied. The signal remains at ground level (0V) for the entire bit duration, consuming
                  no power during this state.
                </Text>
              </Box>
            </Grid>

            <Box p="4" bg="yellow.50" _dark={{ bg: 'yellow.950' }} borderRadius="md" borderLeftWidth="4px" borderLeftColor="yellow.500">
              <Text fontSize="md" fontWeight="600" mb="2" color="yellow.800" _dark={{ color: 'yellow.300' }}>
                Example Sequence: 10110100
              </Text>
              <VStack align="stretch" gap="1">
                {['Bit 1 (first): Signal at +V', 'Bit 0 (second): Signal drops to 0V', 'Bit 1 (third): Signal rises to +V', 'Bit 1 (fourth): Signal remains at +V (no transition)', 'Bit 0 (fifth): Signal drops to 0V', 'And so on...'].map((item, idx) => (
                  <HStack key={idx} align="start">
                    <FaCircle size={4} style={{ marginTop: '6px', flexShrink: 0 }} />
                    <Text fontSize="sm">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Advantages and Limitations */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Advantages and Limitations
          </Heading>
          <VStack align="stretch" gap="4">
            <Box>
              <HStack mb="3">
                <FaCheckCircle color="#38a169" size={20} />
                <Heading size="md" color="green.700" _dark={{ color: 'green.400' }}>
                  Advantages
                </Heading>
              </HStack>
              <VStack align="stretch" gap="2" pl="4">
                <Text fontSize="md" lineHeight="tall">
                  <strong>1. Implementation Simplicity:</strong> The primary advantage is implementation simplicity.
                  Only one voltage level needs to be generated, making the transmitter hardware extremely simple and
                  cost-effective.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>2. Low Power for Zeros:</strong> When transmitting zeros, no power is consumed since the
                  voltage is at ground level. This can be beneficial for power-constrained applications.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>3. Educational Value:</strong> Serves as an excellent introduction to line coding concepts,
                  making it ideal for teaching and understanding more complex schemes.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>4. Short-Distance Use:</strong> Suitable for very short-distance communication where
                  synchronization and DC component issues are not critical.
                </Text>
              </VStack>
            </Box>

            <Box>
              <HStack mb="3">
                <FaTimesCircle color="#e53e3e" size={20} />
                <Heading size="md" color="red.700" _dark={{ color: 'red.400' }}>
                  Limitations
                </Heading>
              </HStack>
              <VStack align="stretch" gap="2" pl="4">
                <Text fontSize="md" lineHeight="tall">
                  <strong>1. DC Component:</strong> Major limitation is the strong DC component. Long runs of 1s create
                  a significant average voltage, which can cause problems with AC-coupled transmission lines and
                  transformers. This DC bias can lead to signal distortion and baseline wander.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>2. Poor Clock Recovery:</strong> Lacks self-clocking capability. During long sequences of
                  identical bits (especially zeros), there are no signal transitions, making it difficult for the
                  receiver to maintain synchronization with the transmitter's clock.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>3. Noise Immunity:</strong> Poor noise immunity compared with balanced schemes (like polar
                  signaling). The single-ended nature makes it more susceptible to electromagnetic interference and
                  noise.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>4. Baseline Wander:</strong> The varying DC component causes baseline wander, where the
                  receiver's decision threshold drifts over time, leading to increased bit error rates.
                </Text>
                <Text fontSize="md" lineHeight="tall">
                  <strong>5. Bandwidth Efficiency:</strong> Not the most bandwidth-efficient scheme, especially when
                  considering the need for additional synchronization overhead.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Practical Applications */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Practical Applications
          </Heading>
          <VStack align="stretch" gap="4">
            <Text fontSize="md" lineHeight="tall" opacity={0.9}>
              While unipolar NRZ is rarely used in modern high-speed communication systems due to its limitations, it
              still finds applications in specific scenarios:
            </Text>
            
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
              <Box p="4" bg="purple.50" _dark={{ bg: 'purple.950' }} borderRadius="md">
                <Text fontSize="md" fontWeight="600" mb="2" color="purple.800" _dark={{ color: 'purple.300' }}>
                  Embedded Systems
                </Text>
                <Text fontSize="sm" lineHeight="tall">
                  Used in simple embedded systems for internal communication where simplicity and cost are more
                  important than performance. Examples include basic sensor interfaces and control signals.
                </Text>
              </Box>

              <Box p="4" bg="teal.50" _dark={{ bg: 'teal.950' }} borderRadius="md">
                <Text fontSize="md" fontWeight="600" mb="2" color="teal.800" _dark={{ color: 'teal.300' }}>
                  Legacy Systems
                </Text>
                <Text fontSize="sm" lineHeight="tall">
                  Found in older communication equipment and legacy systems where backward compatibility is required.
                  Some early computer peripherals used unipolar signaling.
                </Text>
              </Box>

              <Box p="4" bg="cyan.50" _dark={{ bg: 'cyan.950' }} borderRadius="md">
                <Text fontSize="md" fontWeight="600" mb="2" color="cyan.800" _dark={{ color: 'cyan.300' }}>
                  Educational Tools
                </Text>
                <Text fontSize="sm" lineHeight="tall">
                  Widely used in education and training to introduce students to digital communication concepts before
                  moving to more complex schemes like polar and bipolar encoding.
                </Text>
              </Box>

              <Box p="4" bg="pink.50" _dark={{ bg: 'pink.950' }} borderRadius="md">
                <Text fontSize="md" fontWeight="600" mb="2" color="pink.800" _dark={{ color: 'pink.300' }}>
                  Conceptual Baseline
                </Text>
                <Text fontSize="sm" lineHeight="tall">
                  Serves as a reference point for understanding why more sophisticated line coding techniques were
                  developed and what problems they solve.
                </Text>
              </Box>
            </Grid>
          </VStack>
        </Box>

        {/* Comparison with Other Schemes */}
        <Box
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
        >
          <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Why Modern Systems Use Other Schemes
          </Heading>
          <VStack align="stretch" gap="4">
            <Text fontSize="md" lineHeight="tall" opacity={0.9}>
              The limitations of unipolar NRZ led to the development of more sophisticated line coding schemes:
            </Text>
            
            <Box p="4" bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md">
              <HStack mb="2">
                <FaArrowRight color="#3182ce" />
                <Text fontSize="md" fontWeight="600">
                  Polar Schemes (NRZ-L, NRZ-I, Manchester)
                </Text>
              </HStack>
              <Text fontSize="sm" lineHeight="tall">
                Use both positive and negative voltages to eliminate DC component and improve noise immunity. Manchester
                encoding provides self-clocking capability by guaranteeing a transition in every bit period.
              </Text>
            </Box>

            <Box p="4" bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md">
              <HStack mb="2">
                <FaArrowRight color="#3182ce" />
                <Text fontSize="md" fontWeight="600">
                  Bipolar Schemes (AMI, Pseudoternary)
                </Text>
              </HStack>
              <Text fontSize="sm" lineHeight="tall">
                Use three voltage levels with alternating polarity to maintain signal balance and enable error
                detection through violation detection.
              </Text>
            </Box>

            <Box p="4" bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md">
              <HStack mb="2">
                <FaArrowRight color="#3182ce" />
                <Text fontSize="md" fontWeight="600">
                  Multilevel Schemes (2B1Q, 8B6T)
                </Text>
              </HStack>
              <Text fontSize="sm" lineHeight="tall">
                Encode multiple bits per symbol to achieve higher data rates over the same bandwidth, important for
                high-speed communications.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Key Takeaways */}
        <Box
          p="6"
          borderWidth="2px"
          borderRadius="lg"
          borderColor="blue.400"
          bg="blue.50"
          _dark={{ borderColor: 'blue.600', bg: 'blue.950' }}
        >
          <Heading size="lg" mb="4" color="blue.800" _dark={{ color: 'blue.300' }}>
            Key Takeaways
          </Heading>
          <VStack align="stretch" gap="3">
            <HStack align="start">
              <FaCheck color="#3182ce" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall" fontWeight="500">
                Unipolar NRZ uses +V for binary 1 and 0V for binary 0
              </Text>
            </HStack>
            <HStack align="start">
              <FaCheck color="#3182ce" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall" fontWeight="500">
                Simple to implement but has significant DC component issues
              </Text>
            </HStack>
            <HStack align="start">
              <FaCheck color="#3182ce" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall" fontWeight="500">
                Poor clock recovery makes synchronization difficult
              </Text>
            </HStack>
            <HStack align="start">
              <FaCheck color="#3182ce" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall" fontWeight="500">
                Best suited for short-distance, low-speed applications
              </Text>
            </HStack>
            <HStack align="start">
              <FaCheck color="#3182ce" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text fontSize="md" lineHeight="tall" fontWeight="500">
                Serves as an excellent conceptual foundation for understanding more advanced line coding techniques
              </Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
