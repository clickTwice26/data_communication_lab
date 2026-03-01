import { getPosts } from '@/actions/posts';
import { PageHeader } from '@/components/page-header';
import { Container, VStack, Heading, Text, Box, Badge, Stack } from '@chakra-ui/react';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <Container maxW="container.xl" py={{ base: '8', md: '12' }} px={{ base: '4', md: '6' }}>
      <VStack gap="8" align="stretch">
        <PageHeader
          heading="Posts"
          description="View all posts with their authors. Demonstrates relational data with Prisma."
        />

        {posts.length === 0 ? (
          <Box p="8" textAlign="center" rounded="md" borderWidth="1px">
            <Text mb="4">No posts found. Create one using the API endpoint.</Text>
            <Text fontSize="sm" opacity={0.6}>
              First create a user, then POST to <code>/api/posts</code> with{' '}
              <code>{'{ "title": "My Post", "content": "Content here", "authorId": "user_id" }'}</code>
            </Text>
          </Box>
        ) : (
          <Stack gap="6">
            {posts.map((post) => (
              <Box key={post.id} p="6" rounded="md" borderWidth="1px">
                <VStack align="start" gap="4">
                  <Box w="full">
                    <Stack direction="row" justifyContent="space-between" align="start" mb="2">
                      <Heading size="md">{post.title}</Heading>
                      {post.published && (
                        <Badge colorScheme="green">Published</Badge>
                      )}
                    </Stack>
                    <Text fontSize="sm" opacity={0.6}>
                      By {post.author.name || post.author.email} •{' '}
                      {new Date(post.createdAt).toLocaleDateString()}
                    </Text>
                  </Box>
                  {post.content && (
                    <Text fontSize="base" opacity={0.7}>
                      {post.content}
                    </Text>
                  )}
                </VStack>
              </Box>
            ))}
          </Stack>
        )}
      </VStack>
    </Container>
  );
}
