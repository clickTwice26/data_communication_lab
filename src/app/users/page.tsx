import { getUsers } from '@/actions/users';
import { PageHeader } from '@/components/page-header';
import { Container, Grid, VStack, Heading, Text, Box } from '@chakra-ui/react';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <Container maxW="container.xl" py={{ base: '8', md: '12' }}>
      <VStack gap="8" align="stretch">
        <PageHeader
          heading="Users"
          description="Manage users in the system. This showcases server-side data fetching with Prisma and SQLite."
        />

        {users.length === 0 ? (
          <Box p="8" textAlign="center" rounded="md" borderWidth="1px">
            <Text mb="4">No users found. Create one using the API endpoint.</Text>
            <Text fontSize="sm" opacity={0.6}>
              POST to <code>/api/users</code> with{' '}
              <code>{'{ "email": "user@example.com", "name": "John Doe" }'}</code>
            </Text>
          </Box>
        ) : (
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap="6">
            {users.map((user) => (
              <Box key={user.id} p="6" rounded="md" borderWidth="1px">
                <VStack align="start" gap="4">
                  <Heading size="md">{user.name || 'Unnamed User'}</Heading>
                  <Text fontSize="sm" opacity={0.7}>
                    {user.email}
                  </Text>
                  <Box w="full" pt="4" borderTopWidth="1px" gap="2">
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="1">
                      User ID
                    </Text>
                    <Text fontSize="xs" fontFamily="mono">
                      {user.id}
                    </Text>
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" opacity={0.6} mb="1" mt="3">
                      Created
                    </Text>
                    <Text fontSize="sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ))}
          </Grid>
        )}
      </VStack>
    </Container>
  );
}
