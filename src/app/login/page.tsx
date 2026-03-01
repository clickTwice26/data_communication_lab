'use client';

import { Container, VStack, Box } from '@chakra-ui/react';
import { AuthForm } from '@/components/auth-form';
import { login } from '@/actions/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (data: Record<string, string>) => {
    const result = await login(data.email, data.password);

    if (result.success) {
      router.push('/dashboard');
      router.refresh();
    } else {
      throw new Error(result.message);
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" py="8" px="4">
      <Container maxW="md" w="full">
        <VStack gap="8" w="full" align="center">
          <Box w="full">
            <AuthForm
              title="Log In"
              subtitle="Welcome back! Sign in to your account."
              fields={[
                { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
                { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
              ]}
              buttonLabel="Log In"
              onSubmit={handleSubmit}
              footerText="Don't have an account?"
              footerLink={{ text: 'Sign up', href: '/signup' }}
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
