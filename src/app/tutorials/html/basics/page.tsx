'use client';

import { Container, Heading, Text, VStack, Box, Code, Stack, Flex } from '@chakra-ui/react';
import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';

export default function HtmlBasicsPage() {
  return (
    <Container maxW="container.xl" py={{ base: '8', md: '12' }} px={{ base: '4', md: '6' }}>
      <VStack gap="8" align="stretch">
        <PageHeader
          heading="HTML Basics"
          description="Learn the fundamentals of HTML - the building blocks of web development"
        />

        <AnimatedSection delay={0.2}>
          <VStack align="start" gap="6">
            <Box>
              <Heading size="lg" mb="4">What is HTML?</Heading>
              <Text fontSize="md" lineHeight="1.7" opacity={0.9}>
                HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
                It describes the structure of a web page using a series of elements.
              </Text>
            </Box>

            <Box>
              <Heading size="lg" mb="4">Basic HTML Structure</Heading>
              <Text fontSize="md" lineHeight="1.7" opacity={0.9} mb="4">
                Every HTML document has a basic structure:
              </Text>
              <Box
                bg="gray.50"
                _dark={{ bg: 'gray.800' }}
                p="4"
                rounded="md"
                borderWidth="1px"
                overflowX="auto"
              >
                <Code display="block" whiteSpace="pre" fontSize="sm">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
                </Code>
              </Box>
            </Box>

            <Box>
              <Heading size="lg" mb="4">HTML Elements</Heading>
              <Text fontSize="md" lineHeight="1.7" opacity={0.9} mb="4">
                HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, 
                some content, and an end tag:
              </Text>
              <Stack gap="3">
                <Box p="4" bg="blue.50" _dark={{ bg: 'blue.900' }} rounded="md">
                  <Code fontSize="sm">&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</Code>
                </Box>
                <Text fontSize="sm" opacity={0.8}>
                  Example: <Code>&lt;h1&gt;My Heading&lt;/h1&gt;</Code>
                </Text>
              </Stack>
            </Box>

            <Box>
              <Heading size="lg" mb="4">Common HTML Tags</Heading>
              <VStack align="stretch" gap="2">
                {[
                  { tag: '<h1> to <h6>', desc: 'Heading tags' },
                  { tag: '<p>', desc: 'Paragraph tag' },
                  { tag: '<a>', desc: 'Anchor (link) tag' },
                  { tag: '<img>', desc: 'Image tag' },
                  { tag: '<div>', desc: 'Division (container) tag' },
                  { tag: '<span>', desc: 'Inline container tag' },
                ].map((item, index) => (
                  <Box
                    key={index}
                    p="3"
                    bg="gray.50"
                    _dark={{ bg: 'gray.800' }}
                    rounded="md"
                    borderLeftWidth="3px"
                    borderLeftColor="blue.500"
                  >
                    <Flex justify="space-between" align="center">
                      <Code fontWeight="600">{item.tag}</Code>
                      <Text fontSize="sm" opacity={0.8}>{item.desc}</Text>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box
              p="6"
              bg="green.50"
              _dark={{ bg: 'green.900', borderColor: 'green.700' }}
              rounded="md"
              borderWidth="1px"
              borderColor="green.200"
            >
              <Heading size="md" mb="3">💡 Pro Tip</Heading>
              <Text fontSize="sm" lineHeight="1.7">
                Always use semantic HTML elements when possible. They help search engines and screen readers 
                understand the structure and meaning of your content!
              </Text>
            </Box>
          </VStack>
        </AnimatedSection>
      </VStack>
    </Container>
  );
}
