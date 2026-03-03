import { notFound } from 'next/navigation';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { tutorialTopicContent } from '@/lib/topic-content';

interface TutorialTopicPageProps {
  params: Promise<{
    category: string;
    topic: string;
  }>;
}

export default async function TutorialTopicPage({ params }: TutorialTopicPageProps) {
  const { category, topic } = await params;
  const key = `${category}/${topic}`;
  const content = tutorialTopicContent[key];

  if (!content) {
    notFound();
  }

  return (
    <Container maxW="full" py={{ base: '6', md: '8' }} px={{ base: '3', md: '4' }}>
      <VStack gap="8" align="stretch">
        <PageHeader heading={content.title} description={content.subtitle} />

        <Box>
          <Text fontSize="md" lineHeight="tall" opacity={0.9}>
            {content.overview}
          </Text>
        </Box>

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Learning Objectives
          </Heading>
          <VStack align="stretch" gap="3">
            {content.objectives.map((objective) => (
              <Text key={objective} fontSize="md" lineHeight="tall">
                • {objective}
              </Text>
            ))}
          </VStack>
        </Box>

        {content.sections.map((section) => (
          <Box
            key={section.title}
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            bg="white"
            _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}
            transition="all 0.3s"
            _hover={{ borderColor: 'blue.400', boxShadow: 'lg' }}
          >
            <Heading size="xl" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
              {section.title}
            </Heading>
            <VStack align="stretch" gap="4">
              {section.body.map((paragraph) => (
                <Text key={paragraph} fontSize="md" lineHeight="tall" opacity={0.9}>
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </Box>
        ))}

        <Box p="6" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white" _dark={{ borderColor: 'gray.700', bg: 'gray.900' }}>
          <Heading size="lg" mb="4" color="blue.700" _dark={{ color: 'blue.400' }}>
            Image Area
          </Heading>
          <VStack align="stretch" gap="4">
            {content.imagePrompts.map((prompt, index) => (
              <Box
                key={prompt}
                p="8"
                borderWidth="2px"
                borderStyle="dashed"
                borderColor="blue.300"
                borderRadius="lg"
                bg="blue.50"
                _dark={{ bg: 'blue.900', borderColor: 'blue.500' }}
                textAlign="center"
              >
                <Text fontWeight="700" color="blue.700" _dark={{ color: 'blue.200' }}>
                  Image Slot {index + 1}
                </Text>
                <Text fontSize="sm" mt="2" opacity={0.8}>
                  Suggested: {prompt}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
