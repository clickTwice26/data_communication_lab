'use client';

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface ButtonProps extends ChakraButtonProps {
  colorScheme?: string;
}

// Color scheme mappings for solid variants
const solidColors: Record<string, { bg: string; hover: string; active: string }> = {
  blue: { bg: '#3182ce', hover: '#2c5282', active: '#2a4365' },
  red: { bg: '#e53e3e', hover: '#c53030', active: '#9b2c2c' },
  green: { bg: '#38a169', hover: '#2f855a', active: '#276749' },
  gray: { bg: '#718096', hover: '#4a5568', active: '#2d3748' },
};

// Color scheme mappings for outline/ghost variants
const outlineColors: Record<string, { color: string; hoverBg: string; activeBg: string }> = {
  blue: { color: '#3182ce', hoverBg: '#ebf8ff', activeBg: '#bee3f8' },
  red: { color: '#e53e3e', hoverBg: '#fff5f5', activeBg: '#fed7d7' },
  green: { color: '#38a169', hoverBg: '#f0fff4', activeBg: '#c6f6d5' },
  gray: { color: '#718096', hoverBg: '#f7fafc', activeBg: '#edf2f7' },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { 
    variant = 'solid', 
    colorScheme = 'blue', 
    size = 'md',
    children,
    ...rest 
  } = props;

  const colorConfig = solidColors[colorScheme] || solidColors.blue;
  const outlineConfig = outlineColors[colorScheme] || outlineColors.blue;

  const getVariantStyles = () => {
    switch (variant) {
      case 'solid':
        return {
          backgroundColor: colorConfig.bg,
          color: 'white',
          borderColor: 'transparent',
          '&:hover:not(:disabled)': {
            backgroundColor: colorConfig.hover,
          },
          '&:active:not(:disabled)': {
            backgroundColor: colorConfig.active,
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: outlineConfig.color,
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: outlineConfig.color,
          '&:hover:not(:disabled)': {
            backgroundColor: outlineConfig.hoverBg,
          },
          '&:active:not(:disabled)': {
            backgroundColor: outlineConfig.activeBg,
          },
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: outlineConfig.color,
          borderColor: 'transparent',
          '&:hover:not(:disabled)': {
            backgroundColor: outlineConfig.hoverBg,
          },
          '&:active:not(:disabled)': {
            backgroundColor: outlineConfig.activeBg,
          },
        };
      default:
        return {};
    }
  };

  return (
    <ChakraButton
      ref={ref}
      size={size}
      css={{
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        ...getVariantStyles(),
        '&:hover:not(:disabled)': {
          ...getVariantStyles()['&:hover:not(:disabled)'],
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
        '&:active:not(:disabled)': {
          ...getVariantStyles()['&:active:not(:disabled)'],
          transform: 'translateY(0) scale(0.98)',
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
          transform: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
});

Button.displayName = 'Button';
