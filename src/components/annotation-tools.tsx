'use client';

import { useState, useRef } from 'react';
import { Box, HStack, IconButton, Flex, Text } from '@chakra-ui/react';
import { FaPen, FaHighlighter, FaEraser, FaUndo, FaRedo, FaTrash, FaTimes, FaPencilAlt } from 'react-icons/fa';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

export function AnnotationTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [penColor, setPenColor] = useState('#FF0000');
  const [highlighterColor, setHighlighterColor] = useState('#FFFF00');
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const penColors = ['#FF0000', '#0000FF', '#000000', '#00FF00', '#FF00FF', '#FFA500'];
  const highlighterColors = ['#FFFF00', '#00FFFF', '#FF00FF', '#90EE90', '#FFA500', '#FFB6C1'];

  const getCurrentColor = () => {
    if (tool === 'eraser') return '#FFFFFF';
    if (tool === 'highlighter') return highlighterColor;
    return penColor;
  };

  const getCurrentStrokeWidth = () => {
    if (tool === 'eraser') return 20;
    if (tool === 'highlighter') return 24;
    return 3;
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleRedo = () => {
    canvasRef.current?.redo();
  };

  const handleClear = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleReset = () => {
    canvasRef.current?.resetCanvas();
  };

  if (!isOpen) {
    return (
      <MotionBox
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="9998"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          aria-label="Open Annotation Tools"
          title="Open Annotation Tools"
          size="lg"
          colorScheme="blue"
          variant="solid"
          onClick={() => setIsOpen(true)}
          borderRadius="full"
          boxShadow="xl"
        >
          <FaPencilAlt />
        </IconButton>
      </MotionBox>
    );
  }

  return (
    <>
      {/* Canvas Overlay */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="9999"
        pointerEvents="auto"
      >
        <ReactSketchCanvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
          }}
          strokeWidth={getCurrentStrokeWidth()}
          strokeColor={getCurrentColor()}
          canvasColor="transparent"
          exportWithBackgroundImage={false}
          allowOnlyPointerType="all"
        />
      </Box>

      {/* Toolbar */}
      <MotionFlex
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="10000"
        bg="white"
        _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
        borderRadius="xl"
        boxShadow="2xl"
        p="3"
        gap="2"
        align="center"
        borderWidth="1px"
        borderColor="gray.200"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Text fontSize="sm" fontWeight="600" px="2">
          Annotation Tools
        </Text>

        <Box h="6" w="1px" bg="gray.300" _dark={{ bg: 'gray.600' }} />

        {/* Pen Tool */}
        <Box position="relative">
          <IconButton
            aria-label="Pen"
            title="Pen"
            size="md"
            variant={tool === 'pen' ? 'solid' : 'ghost'}
            colorScheme={tool === 'pen' ? 'blue' : 'gray'}
            onClick={() => setTool('pen')}
          >
            <FaPen />
          </IconButton>
          {tool === 'pen' && (
            <HStack
              position="absolute"
              bottom="calc(100% + 8px)"
              left="50%"
              transform="translateX(-50%)"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              borderRadius="lg"
              boxShadow="xl"
              p="2"
              gap="1"
              borderWidth="1px"
            >
              {penColors.map((color) => (
                <Box
                  key={color}
                  w="6"
                  h="6"
                  bg={color}
                  borderRadius="md"
                  cursor="pointer"
                  borderWidth="2px"
                  borderColor={penColor === color ? 'blue.500' : 'transparent'}
                  onClick={() => setPenColor(color)}
                  _hover={{ transform: 'scale(1.1)' }}
                  transition="all 0.2s"
                />
              ))}
            </HStack>
          )}
        </Box>

        {/* Highlighter */}
        <Box position="relative">
          <IconButton
            aria-label="Highlighter"
            title="Highlighter"
            size="md"
            variant={tool === 'highlighter' ? 'solid' : 'ghost'}
            colorScheme={tool === 'highlighter' ? 'yellow' : 'gray'}
            onClick={() => setTool('highlighter')}
          >
            <FaHighlighter />
          </IconButton>
          {tool === 'highlighter' && (
            <HStack
              position="absolute"
              bottom="calc(100% + 8px)"
              left="50%"
              transform="translateX(-50%)"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              borderRadius="lg"
              boxShadow="xl"
              p="2"
              gap="1"
              borderWidth="1px"
            >
              {highlighterColors.map((color) => (
                <Box
                  key={color}
                  w="6"
                  h="6"
                  bg={color}
                  borderRadius="md"
                  cursor="pointer"
                  borderWidth="2px"
                  borderColor={highlighterColor === color ? 'blue.500' : 'transparent'}
                  onClick={() => setHighlighterColor(color)}
                  _hover={{ transform: 'scale(1.1)' }}
                  transition="all 0.2s"
                />
              ))}
            </HStack>
          )}
        </Box>

        {/* Eraser */}
        <IconButton
          aria-label="Eraser"
          title="Eraser"
          size="md"
          variant={tool === 'eraser' ? 'solid' : 'ghost'}
          colorScheme={tool === 'eraser' ? 'red' : 'gray'}
          onClick={() => setTool('eraser')}
        >
          <FaEraser />
        </IconButton>

        <Box h="6" w="1px" bg="gray.300" _dark={{ bg: 'gray.600' }} />

        {/* Undo */}
        <IconButton
          aria-label="Undo"
          title="Undo"
          size="md"
          variant="ghost"
          onClick={handleUndo}
        >
          <FaUndo />
        </IconButton>

        {/* Redo */}
        <IconButton
          aria-label="Redo"
          title="Redo"
          size="md"
          variant="ghost"
          onClick={handleRedo}
        >
          <FaRedo />
        </IconButton>

        {/* Clear */}
        <IconButton
          aria-label="Clear"
          title="Clear All"
          size="md"
          variant="ghost"
          colorScheme="red"
          onClick={handleClear}
        >
          <FaTrash />
        </IconButton>

        <Box h="6" w="1px" bg="gray.300" _dark={{ bg: 'gray.600' }} />

        {/* Close */}
        <IconButton
          aria-label="Close"
          title="Close"
          size="md"
          variant="ghost"
          onClick={() => {
            setIsOpen(false);
            handleReset();
          }}
        >
          <FaTimes />
        </IconButton>
      </MotionFlex>
    </>
  );
}
