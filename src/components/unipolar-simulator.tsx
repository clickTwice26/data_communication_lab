'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, VStack, HStack, Heading, Text, Input, Badge, Grid } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { FaPlay, FaRedo, FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaChartLine, FaCircle } from 'react-icons/fa';

export function UnipolarSimulator() {
  const [binaryInput, setBinaryInput] = useState('10110100');
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredBit, setHoveredBit] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const validateBinaryInput = (input: string) => {
    return /^[01]+$/.test(input) && input.length > 0 && input.length <= 16;
  };

  const drawWaveform = (binary: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const bitWidth = width / binary.length;
    const highVoltage = height * 0.2;
    const lowVoltage = height * 0.8;

    // Draw grid
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;

    // Vertical grid lines
    for (let i = 0; i <= binary.length; i++) {
      ctx.beginPath();
      ctx.moveTo(i * bitWidth, 0);
      ctx.lineTo(i * bitWidth, height);
      ctx.stroke();
    }

    // Horizontal grid lines
    ctx.beginPath();
    ctx.moveTo(0, highVoltage);
    ctx.lineTo(width, highVoltage);
    ctx.strokeStyle = '#cbd5e0';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, lowVoltage);
    ctx.lineTo(width, lowVoltage);
    ctx.stroke();

    // Draw voltage labels
    ctx.fillStyle = '#4a5568';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('+V', 35, highVoltage + 5);
    ctx.fillText('0V', 35, lowVoltage + 5);

    // Draw waveform
    ctx.strokeStyle = '#3182ce';
    ctx.lineWidth = 3;
    ctx.beginPath();

    const bits = binary.split('');
    bits.forEach((bit, index) => {
      const x1 = index * bitWidth;
      const x2 = (index + 1) * bitWidth;
      const y = bit === '1' ? highVoltage : lowVoltage;

      if (index === 0) {
        ctx.moveTo(x1, y);
      } else {
        const prevBit = bits[index - 1];
        const prevY = prevBit === '1' ? highVoltage : lowVoltage;
        
        // Draw vertical transition if bit changed
        if (prevY !== y) {
          ctx.lineTo(x1, prevY);
          ctx.lineTo(x1, y);
        }
      }
      
      ctx.lineTo(x2, y);
    });

    ctx.stroke();

    // Draw bit labels
    ctx.fillStyle = '#2d3748';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    bits.forEach((bit, index) => {
      const x = index * bitWidth + bitWidth / 2;
      ctx.fillText(bit, x, height - 15);
    });

    // Draw time markers
    ctx.fillStyle = '#718096';
    ctx.font = '12px sans-serif';
    bits.forEach((_, index) => {
      const x = index * bitWidth;
      ctx.fillText(`T${index}`, x + 5, 20);
    });
  };

  useEffect(() => {
    if (validateBinaryInput(binaryInput)) {
      drawWaveform(binaryInput);
    }
  }, [binaryInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^01]/g, '').slice(0, 16);
    setBinaryInput(value);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) * canvas.width) / rect.width;
    const bitWidth = canvas.width / binaryInput.length;
    const bitIndex = Math.floor(x / bitWidth);

    if (bitIndex >= 0 && bitIndex < binaryInput.length) {
      setHoveredBit(bitIndex);
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    } else {
      setHoveredBit(null);
    }
  };

  const handleCanvasMouseLeave = () => {
    setHoveredBit(null);
  };

  const getPresetExample = (preset: string) => {
    const presets: Record<string, string> = {
      basic: '10110100',
      alternating: '10101010',
      allOnes: '11111111',
      allZeros: '00000000',
      long: '1011010011001',
    };
    return presets[preset] || preset;
  };

  return (
    <Box
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue.300"
      bg="white"
      _dark={{ borderColor: 'blue.600', bg: 'gray.900' }}
    >
      <VStack gap="6" align="stretch">
        <Box>
          <HStack justifyContent="space-between" mb="4">
            <Heading size="lg" color="blue.700" _dark={{ color: 'blue.400' }}>
              Live Unipolar NRZ Simulator
            </Heading>
            <Badge colorScheme="blue" fontSize="md" px="3" py="1">
              Interactive
            </Badge>
          </HStack>
          <Text fontSize="md" opacity={0.8} mb="4">
            Enter a binary sequence (up to 16 bits) to visualize the Unipolar NRZ line coding waveform in real-time.
          </Text>
        </Box>

        {/* Input Section */}
        <Box>
          <Text fontWeight="600" mb="2">
            Binary Input:
          </Text>
          <HStack gap="3" mb="3">
            <Input
              value={binaryInput}
              onChange={handleInputChange}
              placeholder="Enter binary (e.g., 10110100)"
              size="lg"
              fontFamily="monospace"
              fontSize="xl"
              maxW="400px"
              borderColor={validateBinaryInput(binaryInput) ? 'green.400' : 'red.400'}
              _focus={{ borderColor: 'blue.500' }}
            />
            <Button
              colorScheme="blue"
              size="lg"
              onClick={handlePlay}
              disabled={!validateBinaryInput(binaryInput) || isPlaying}
            >
              <FaPlay style={{ marginRight: '8px' }} />
              Simulate
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setBinaryInput('10110100')}
            >
              <FaRedo style={{ marginRight: '8px' }} />
              Reset
            </Button>
          </HStack>
          <HStack fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            {validateBinaryInput(binaryInput) ? (
              <>
                <FaCheckCircle color="#38a169" />
                <Text>Valid input ({binaryInput.length} bits)</Text>
              </>
            ) : (
              <>
                <FaTimesCircle color="#e53e3e" />
                <Text>Please enter only 0s and 1s (max 16 bits)</Text>
              </>
            )}
          </HStack>
        </Box>

        {/* Preset Examples */}
        <Box>
          <Text fontWeight="600" mb="2">
            Quick Examples:
          </Text>
          <HStack gap="2" flexWrap="wrap">
            {[
              { label: 'Basic Pattern', value: 'basic' },
              { label: 'Alternating', value: 'alternating' },
              { label: 'All 1s', value: 'allOnes' },
              { label: 'All 0s', value: 'allZeros' },
              { label: 'Long Sequence', value: 'long' },
            ].map((preset) => (
              <Button
                key={preset.value}
                size="sm"
                variant="outline"
                onClick={() => setBinaryInput(getPresetExample(preset.value))}
              >
                {preset.label}
              </Button>
            ))}
          </HStack>
        </Box>

        {/* Canvas Waveform and Real-time Analysis - Side by Side */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 380px' }} gap="4" alignItems="start">
          {/* Left: Canvas Waveform */}
          <Box
            p="4"
            bg="gray.50"
            _dark={{ bg: 'gray.800' }}
            borderRadius="md"
            borderWidth="1px"
            position="relative"
          >
            <canvas
              ref={canvasRef}
              width={800}
              height={250}
              onMouseMove={handleCanvasMouseMove}
              onMouseLeave={handleCanvasMouseLeave}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '800px',
                display: 'block',
                cursor: 'crosshair',
              }}
            />
            
            {/* Hover Tooltip */}
            {hoveredBit !== null && (
              <Box
                position="absolute"
                left={`${mousePos.x}px`}
                top={`${mousePos.y - 80}px`}
                bg="gray.900"
                color="white"
                p="3"
                borderRadius="md"
                boxShadow="xl"
                fontSize="sm"
                maxW="250px"
                zIndex="10"
                pointerEvents="none"
                _dark={{ bg: 'gray.700' }}
              >
                <Text fontWeight="bold" mb="1">
                  Bit {hoveredBit}: {binaryInput[hoveredBit]}
                </Text>
                <Text fontSize="xs" lineHeight="tall">
                  {binaryInput[hoveredBit] === '1' ? (
                    <>
                      <strong>Voltage: +V (HIGH)</strong><br />
                      Binary 1 is represented by positive voltage. Signal remains at high level for entire bit period.
                    </>
                  ) : (
                    <>
                      <strong>Voltage: 0V (LOW)</strong><br />
                      Binary 0 is represented by zero voltage. Signal remains at ground level for entire bit period.
                    </>
                  )}
                </Text>
              </Box>
            )}
          </Box>

          {/* Right: Real-time Bit-by-Bit Analysis */}
          {validateBinaryInput(binaryInput) && (
            <Box p="4" bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md" borderWidth="2px" borderColor="purple.300" h="full">
              <HStack mb="3">
                <FaChartLine color="#805ad5" size={18} />
                <Heading size="sm" color="purple.800" _dark={{ color: 'purple.300' }}>
                  Real-time Bit Analysis:
                </Heading>
              </HStack>
              <VStack 
                align="stretch" 
                gap="2" 
                maxH="500px" 
                overflowY="auto" 
                pr="2"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#cbd5e0',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#a0aec0',
                  },
                }}
              >
                {binaryInput.split('').map((bit, index) => {
                  const prevBit = index > 0 ? binaryInput[index - 1] : null;
                  const hasTransition = prevBit !== null && prevBit !== bit;
                  
                  return (
                    <Box
                      key={index}
                      p="3"
                      bg={bit === '1' ? 'green.50' : 'orange.50'}
                      _dark={{ bg: bit === '1' ? 'green.950' : 'orange.950' }}
                      borderRadius="md"
                      borderLeftWidth="4px"
                      borderLeftColor={bit === '1' ? 'green.500' : 'orange.500'}
                    >
                      <HStack justifyContent="space-between" mb="1">
                        <HStack>
                          <Badge colorScheme={bit === '1' ? 'green' : 'orange'} fontSize="sm" px="2">
                            Bit {index}
                          </Badge>
                          <Text fontSize="xl" fontWeight="bold" fontFamily="monospace">
                            {bit}
                          </Text>
                          {hasTransition && (
                            <Badge colorScheme="purple" fontSize="xs">
                              Transition from {prevBit}
                            </Badge>
                          )}
                        </HStack>
                        <Text fontSize="lg" fontWeight="bold" color={bit === '1' ? 'green.700' : 'orange.700'} _dark={{ color: bit === '1' ? 'green.400' : 'orange.400' }}>
                          {bit === '1' ? '+V' : '0V'}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" lineHeight="tall" color="gray.700" _dark={{ color: 'gray.300' }}>
                        {bit === '1' ? (
                          <>
                            <strong>Binary 1 → Positive Voltage (+V):</strong> Signal is at HIGH level (+V). 
                            {hasTransition && prevBit === '0' ? ' Signal rises from 0V to +V (LOW to HIGH transition).' : ' Signal remains at +V (no change from previous bit).'}
                          </>
                        ) : (
                          <>
                            <strong>Binary 0 → Zero Voltage (0V):</strong> Signal is at LOW level (ground). 
                            {hasTransition && prevBit === '1' ? ' Signal drops from +V to 0V (HIGH to LOW transition).' : ' Signal remains at 0V (no change from previous bit).'}
                          </>
                        )}
                      </Text>
                      {!hasTransition && index > 0 && (
                        <HStack fontSize="xs" mt="1" color="orange.600" _dark={{ color: 'orange.400' }}>
                          <FaExclamationTriangle />
                          <Text fontStyle="italic">
                            No transition - Can cause clock synchronization issues in long sequences
                          </Text>
                        </HStack>
                      )}
                    </Box>
                  );
                })}
              </VStack>
            </Box>
          )}
        </Grid>

        {/* Explanation */}
        <Box p="4" bg="blue.50" _dark={{ bg: 'blue.950' }} borderRadius="md">
          <Heading size="sm" mb="2" color="blue.800" _dark={{ color: 'blue.300' }}>
            How Unipolar NRZ Works:
          </Heading>
          <VStack align="stretch" gap="2" fontSize="sm">
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '6px' }} />
              <Text><strong>Binary 1:</strong> Represented by positive voltage (+V)</Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '6px' }} />
              <Text><strong>Binary 0:</strong> Represented by zero voltage (0V)</Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '6px' }} />
              <Text><strong>NRZ (Non-Return-to-Zero):</strong> Signal remains at the voltage level for the entire bit period without returning to zero between bits</Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '6px' }} />
              <Text><strong>Advantage:</strong> Simple implementation with minimal hardware</Text>
            </HStack>
            <HStack align="start">
              <FaCircle size={6} style={{ marginTop: '6px' }} />
              <Text><strong>Disadvantage:</strong> DC component present, difficult clock recovery with long sequences of same bit</Text>
            </HStack>
          </VStack>
        </Box>

        {/* Signal Analysis */}
        {validateBinaryInput(binaryInput) && (
          <Box p="4" bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md">
            <Heading size="sm" mb="3" color="gray.800" _dark={{ color: 'gray.200' }}>
              Signal Analysis:
            </Heading>
            <HStack gap="6" flexWrap="wrap">
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Total Bits:
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                  {binaryInput.length}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Ones Count:
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">
                  {binaryInput.split('1').length - 1}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Zeros Count:
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="orange.600">
                  {binaryInput.split('0').length - 1}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Transitions:
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="purple.600">
                  {binaryInput
                    .split('')
                    .filter((bit, i, arr) => i > 0 && bit !== arr[i - 1]).length}
                </Text>
              </Box>
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
