'use client';

/**
 * QuizModal Component
 * 
 * A reusable quiz component that displays in a modal dialog.
 * Features:
 * - Multiple choice questions
 * - Score tracking and display
 * - Results saved to localStorage
 * - Professional UI with animations
 * - Reusable across different sections
 * 
 * Usage:
 * ```tsx
 * <QuizModal
 *   sectionId="introduction"
 *   sectionTitle="Introduction to Data Communication"
 *   questions={questions}
 * />
 * ```
 */

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  HStack,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogBackdrop,
  DialogTitle,
  DialogCloseTrigger,
  Badge,
  Stack,
} from '@chakra-ui/react';
import { FaTrophy, FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizModalProps {
  sectionId: string;
  sectionTitle: string;
  questions: QuizQuestion[];
}

interface QuizResult {
  sectionId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
  answers: number[];
}

export function QuizModal({ sectionId, sectionTitle, questions }: QuizModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Load previous score from localStorage
    const savedResults = localStorage.getItem(`quiz_${sectionId}`);
    if (savedResults) {
      setPreviousScore(JSON.parse(savedResults));
    }
  }, [sectionId]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    
    // Save results to localStorage
    const result: QuizResult = {
      sectionId,
      score: correctCount,
      totalQuestions: questions.length,
      percentage: Math.round((correctCount / questions.length) * 100),
      completedAt: new Date().toISOString(),
      answers: selectedAnswers,
    };
    localStorage.setItem(`quiz_${sectionId}`, JSON.stringify(result));
    setPreviousScore(result);
    
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      resetQuiz();
    }, 300);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const percentage = Math.round((score / questions.length) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'green';
    if (percentage >= 60) return 'blue';
    if (percentage >= 40) return 'yellow';
    return 'red';
  };

  return (
    <>
      <Box textAlign="center" py="8" borderTopWidth="1px" mt="8">
        <VStack gap="4">
          <FaTrophy size={48} color="#0A509E" />
          <Heading size="xl">Test Your Knowledge</Heading>
          <Text fontSize="md" opacity={0.8} maxW="600px">
            Take this quiz to assess your understanding of {sectionTitle.toLowerCase()}.
          </Text>
          {previousScore && (
            <Text fontWeight="600" color="blue.600" _dark={{ color: "blue.400" }}>
              Previous Score: {previousScore.percentage}% ({previousScore.score}/{previousScore.totalQuestions})
            </Text>
          )}
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => setIsOpen(true)}
            px="8"
          >
            Start Quiz
          </Button>
        </VStack>
      </Box>

      <DialogRoot 
        open={isOpen} 
        onOpenChange={(e) => !e.open && handleClose()}
        placement="center"
        motionPreset="scale"
      >
        <DialogBackdrop 
          bg="blackAlpha.600"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <DialogContent
          maxW="900px"
          w="90vw"
          maxH="85vh"
          overflowY="auto"
          borderRadius="xl"
          boxShadow="2xl"
          css={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 0,
          }}
        >
          <DialogHeader borderBottomWidth="1px" pb="4">
            <DialogTitle>
              <HStack justifyContent="space-between" w="full" align="center">
                <Heading size="md">{sectionTitle} Quiz</Heading>
                {!showResults && (
                  <Badge colorScheme="blue" fontSize="md" px="4" py="2" borderRadius="full">
                    {currentQuestion + 1} / {questions.length}
                  </Badge>
                )}
              </HStack>
            </DialogTitle>
            <DialogCloseTrigger top="4" right="4" />
          </DialogHeader>

          <DialogBody>
            {!showResults ? (
              <VStack gap="6" align="stretch">
                <Box>
                  <Box
                    w="full"
                    h="2"
                    bg="gray.200"
                    _dark={{ bg: "gray.700" }}
                    borderRadius="full"
                    overflow="hidden"
                    mb="4"
                  >
                    <Box
                      h="full"
                      w={`${progress}%`}
                      bg="blue.500"
                      transition="width 0.3s"
                    />
                  </Box>
                </Box>

                <MotionBox
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heading size="md" mb="6">
                    {questions[currentQuestion].question}
                  </Heading>

                  <VStack gap="3" align="stretch">
                    {questions[currentQuestion].options.map((option, index) => (
                      <Box
                        key={index}
                        p="4"
                        borderWidth="2px"
                        borderRadius="lg"
                        borderColor={
                          selectedAnswers[currentQuestion] === index
                            ? 'blue.500'
                            : 'gray.200'
                        }
                        bg={
                          selectedAnswers[currentQuestion] === index
                            ? 'blue.50'
                            : 'transparent'
                        }
                        _dark={{
                          borderColor:
                            selectedAnswers[currentQuestion] === index
                              ? 'blue.400'
                              : 'gray.700',
                          bg:
                            selectedAnswers[currentQuestion] === index
                              ? 'blue.900'
                              : 'transparent',
                        }}
                        cursor="pointer"
                        onClick={() => handleAnswerSelect(index)}
                        transition="all 0.2s"
                        _hover={{
                          borderColor: 'blue.400',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                      >
                        <HStack>
                          <Box
                            w="6"
                            h="6"
                            borderRadius="full"
                            borderWidth="2px"
                            borderColor={
                              selectedAnswers[currentQuestion] === index
                                ? 'blue.500'
                                : 'gray.300'
                            }
                            bg={
                              selectedAnswers[currentQuestion] === index
                                ? 'blue.500'
                                : 'transparent'
                            }
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            {selectedAnswers[currentQuestion] === index && (
                              <Box w="3" h="3" borderRadius="full" bg="white" />
                            )}
                          </Box>
                          <Text fontSize="md">{option}</Text>
                        </HStack>
                      </Box>
                    ))}
                  </VStack>
                </MotionBox>
              </VStack>
            ) : (
              <VStack gap="8" align="stretch" py="2">
                <Box textAlign="center" py="6" borderBottomWidth="1px">
                  <MotionBox
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    display="flex"
                    justifyContent="center"
                  >
                    <FaTrophy size={64} color={getScoreColor() === 'green' ? '#38A169' : getScoreColor() === 'blue' ? '#0A509E' : getScoreColor() === 'yellow' ? '#D69E2E' : '#E53E3E'} />
                  </MotionBox>
                  <Heading size="2xl" mt="6" mb="3" fontWeight="bold">
                    Quiz Complete!
                  </Heading>
                  <Text fontSize="5xl" fontWeight="extrabold" color={`${getScoreColor()}.600`} _dark={{ color: `${getScoreColor()}.400` }} lineHeight="1">
                    {percentage}%
                  </Text>
                  <Text fontSize="lg" mt="3" color="gray.600" _dark={{ color: "gray.400" }}>
                    You scored <Text as="span" fontWeight="bold" color="gray.900" _dark={{ color: "white" }}>{score}</Text> out of <Text as="span" fontWeight="bold" color="gray.900" _dark={{ color: "white" }}>{questions.length}</Text>
                  </Text>
                </Box>

                <Box>
                  <Heading size="lg" mb="6" fontWeight="semibold">Review Answers</Heading>
                  <VStack gap="4" align="stretch" maxH="400px" overflowY="auto" pr="2">
                    {questions.map((question, index) => {
                      const isCorrect = selectedAnswers[index] === question.correctAnswer;
                      return (
                        <Box
                          key={index}
                          p="5"
                          borderWidth="2px"
                          borderRadius="xl"
                          borderColor={isCorrect ? 'green.400' : 'red.400'}
                          bg={isCorrect ? 'green.50' : 'red.50'}
                          _dark={{
                            borderColor: isCorrect ? 'green.600' : 'red.600',
                            bg: isCorrect ? 'green.950' : 'red.950',
                          }}
                          transition="all 0.2s"
                        >
                          <HStack mb="3" align="center">
                            {isCorrect ? (
                              <FaCheckCircle color="#38A169" size={22} />
                            ) : (
                              <FaTimesCircle color="#E53E3E" size={22} />
                            )}
                            <Badge 
                              colorScheme={isCorrect ? 'green' : 'red'} 
                              fontSize="xs" 
                              px="3" 
                              py="1" 
                              borderRadius="full"
                              textTransform="uppercase"
                            >
                              Question {index + 1}
                            </Badge>
                          </HStack>
                          <Text fontSize="md" mb="3" fontWeight="600" lineHeight="tall">
                            {question.question}
                          </Text>
                          {!isCorrect && (
                            <Box 
                              p="3" 
                              bg={isCorrect ? 'green.100' : 'red.100'} 
                              _dark={{ bg: isCorrect ? 'green.900' : 'red.900' }} 
                              borderRadius="md" 
                              mb="2"
                            >
                              <Text fontSize="sm" fontWeight="600" color="red.800" _dark={{ color: "red.200" }}>
                                Correct answer: {question.options[question.correctAnswer]}
                              </Text>
                            </Box>
                          )}
                          {question.explanation && (
                            <Box 
                              p="3" 
                              bg="gray.100" 
                              _dark={{ bg: "gray.800" }} 
                              borderRadius="md" 
                              mt="2"
                            >
                              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }} lineHeight="relaxed">
                                {question.explanation}
                              </Text>
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                  </VStack>
                </Box>
              </VStack>
            )}
          </DialogBody>

          <DialogFooter borderTopWidth="1px" pt="4">
            {!showResults ? (
              <HStack w="full" justifyContent="space-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  size="lg"
                  px="8"
                >
                  Previous
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  size="lg"
                  px="8"
                >
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </HStack>
            ) : (
              <HStack w="full" justifyContent="space-between">
                <Button
                  variant="outline"
                  onClick={resetQuiz}
                  size="lg"
                  px="6"
                >
                  <FaRedo style={{ marginRight: '8px' }} />
                  Retake Quiz
                </Button>
                <Button colorScheme="blue" onClick={handleClose} size="lg" px="8">
                  Close
                </Button>
              </HStack>
            )}
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
}
