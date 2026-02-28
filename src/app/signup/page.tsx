'use client';

import { Container, VStack, Box, Text } from '@chakra-ui/react';
import { AuthForm } from '@/components/auth-form';
import { signup } from '@/actions/auth';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = async (data: Record<string, string>) => {
    const result = await signup(data.email, data.password, data.name);

    if (result.success) {
      router.push('/dashboard');
      router.refresh();
    } else {
      throw new Error(result.message);
    }
  };

  return (
    <Container maxW="container.sm" h="100vh" display="flex" alignItems="center" justifyContent="center" py="8">
      <VStack gap="8" w="full" align="center">
        <Box w="full">
          <AuthForm
            title="Create Account"
            subtitle="Join us today and start managing your posts."
            fields={[
              { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter a strong password' },
            ]}
            buttonLabel="Create Account"
            onSubmit={handleSubmit}
            footerText="Already have an account?"
            footerLink={{ text: 'Log in', href: '/login' }}
          />
        </Box>

        <Box w="full" maxW="400px" p="4" rounded="md" bg="blue.50" borderWidth="1px" borderColor="blue.100">
          <Text fontSize="xs" fontWeight="500" mb="2">
            Password Requirements:
          </Text>
          <Text fontSize="xs" opacity={0.7}>
            • At least 8 characters<br/>
            • At least one uppercase letter<br/>
            • At least one lowercase letter<br/>
            • At least one number
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
