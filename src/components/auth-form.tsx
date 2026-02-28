'use client';

import { Box, VStack, Button, Text, HStack, Input } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { useState } from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
}

export function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  name,
}: FormInputProps) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontSize="sm" fontWeight="medium">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        name={name}
        size="md"
        _focusVisible={{ borderColor: 'blue.500' }}
      />
      {error && <FormErrorMessage fontSize="sm">{error}</FormErrorMessage>}
    </FormControl>
  );
}

interface AuthFormProps {
  title: string;
  subtitle?: string;
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
  }>;
  buttonLabel: string;
  onSubmit: (data: Record<string, string>) => Promise<void>;
  loading?: boolean;
  footerText?: string;
  footerLink?: { text: string; href: string };
}

export function AuthForm({
  title,
  subtitle,
  fields,
  buttonLabel,
  onSubmit,
  loading = false,
  footerText,
  footerLink,
}: AuthFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (formError) {
      setFormError('');
    }
    // Clear error for this field when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setFormError('');

    try {
      await onSubmit(formData);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setFormError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="full" maxW="400px">
      <VStack gap="6" align="stretch">
        <VStack gap="2" align="start">
          <Text fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          {subtitle && (
            <Text fontSize="sm" opacity={0.7}>
              {subtitle}
            </Text>
          )}
        </VStack>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack gap="4" align="stretch">
            {fields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(value) => handleChange(field.name, value)}
                error={errors[field.name]}
                disabled={isLoading || loading}
                name={field.name}
              />
            ))}

            <Button
              type="submit"
              colorScheme="blue"
              size="md"
              loading={isLoading || loading}
              mt="2"
            >
              {buttonLabel}
            </Button>
            {formError && (
              <Text fontSize="sm" color="red.500">
                {formError}
              </Text>
            )}
          </VStack>
        </form>

        {footerText && footerLink && (
          <HStack gap="1" fontSize="sm" justify="center">
            <Text>{footerText}</Text>
            <a href={footerLink.href}>
              <Text color="blue.500" _hover={{ textDecoration: 'underline' }}>
                {footerLink.text}
              </Text>
            </a>
          </HStack>
        )}
      </VStack>
    </Box>
  );
}
