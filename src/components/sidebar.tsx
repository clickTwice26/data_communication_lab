'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, VStack, Flex, Text, IconButton, Collapsible } from '@chakra-ui/react';
import { FaChevronDown, FaChevronRight, FaHome, FaBook, FaCode, FaLaptopCode, FaDatabase, FaReact, FaBars, FaTimes, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

interface NavigationItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const navigationData: NavigationItem[] = [
  {
    title: 'Getting Started',
    icon: <FaHome />,
    children: [
      { title: 'Introduction', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'HTML Tutorial',
    icon: <FaCode />,
    children: [
      { title: 'HTML Basics', href: '/tutorials/html/basics' },
      { title: 'HTML Elements', href: '/tutorials/html/elements' },
      { title: 'HTML Attributes', href: '/tutorials/html/attributes' },
      { title: 'HTML Forms', href: '/tutorials/html/forms' },
    ],
  },
  {
    title: 'CSS Tutorial',
    icon: <FaBook />,
    children: [
      { title: 'CSS Basics', href: '/tutorials/css/basics' },
      { title: 'CSS Selectors', href: '/tutorials/css/selectors' },
      { title: 'CSS Layout', href: '/tutorials/css/layout' },
      { title: 'CSS Flexbox', href: '/tutorials/css/flexbox' },
      { title: 'CSS Grid', href: '/tutorials/css/grid' },
    ],
  },
  {
    title: 'JavaScript Tutorial',
    icon: <FaLaptopCode />,
    children: [
      { title: 'JS Introduction', href: '/tutorials/javascript/intro' },
      { title: 'JS Variables', href: '/tutorials/javascript/variables' },
      { title: 'JS Functions', href: '/tutorials/javascript/functions' },
      { title: 'JS Objects', href: '/tutorials/javascript/objects' },
      { title: 'JS Arrays', href: '/tutorials/javascript/arrays' },
      { title: 'JS DOM', href: '/tutorials/javascript/dom' },
    ],
  },
  {
    title: 'React Tutorial',
    icon: <FaReact />,
    children: [
      { title: 'React Intro', href: '/tutorials/react/intro' },
      { title: 'Components', href: '/tutorials/react/components' },
      { title: 'Props & State', href: '/tutorials/react/props-state' },
      { title: 'Hooks', href: '/tutorials/react/hooks' },
      { title: 'Routing', href: '/tutorials/react/routing' },
    ],
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    children: [
      { title: 'SQL Basics', href: '/tutorials/sql/basics' },
      { title: 'SQL Queries', href: '/tutorials/sql/queries' },
      { title: 'SQL Joins', href: '/tutorials/sql/joins' },
      { title: 'Prisma ORM', href: '/tutorials/prisma/intro' },
    ],
  },
  {
    title: 'Design Guidelines',
    icon: <FaPalette />,
    children: [
      { title: 'Button System', href: '/guidelines/buttons' },
      { title: 'Typography', href: '/guidelines/typography' },
      { title: 'Colors', href: '/guidelines/colors' },
    ],
  },
];

function NavigationSection({ item, level = 0 }: { item: NavigationItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren && item.href) {
    const isActive = pathname === item.href;
    return (
      <Link href={item.href}>
        <Flex
          align="center"
          gap="3"
          px="4"
          py="2.5"
          pl={level > 0 ? `${4 + level * 4}` : '4'}
          cursor="pointer"
          bg={isActive ? 'blue.500' : 'transparent'}
          color={isActive ? 'white' : 'inherit'}
          _hover={{ bg: isActive ? 'blue.600' : 'gray.100', _dark: { bg: isActive ? 'blue.600' : 'whiteAlpha.100' } }}
          transition="all 0.2s"
          borderLeftWidth="3px"
          borderLeftColor={isActive ? 'blue.500' : 'transparent'}
          fontSize="sm"
        >
          {item.icon && <Box fontSize="md">{item.icon}</Box>}
          <Text fontWeight={isActive ? '600' : '400'}>{item.title}</Text>
        </Flex>
      </Link>
    );
  }

  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        px="4"
        py="2.5"
        pl={level > 0 ? `${4 + level * 4}` : '4'}
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        _hover={{ bg: 'gray.100', _dark: { bg: 'whiteAlpha.100' } }}
        transition="all 0.2s"
        fontWeight="600"
        fontSize="sm"
      >
        <Flex align="center" gap="3">
          {item.icon && <Box fontSize="md">{item.icon}</Box>}
          <Text>{item.title}</Text>
        </Flex>
        <Box fontSize="xs" color="gray.500">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </Box>
      </Flex>
      <Collapsible.Root open={isOpen}>
        <Collapsible.Content>
          <VStack gap="0" align="stretch">
            {item.children?.map((child, index) => (
              <NavigationSection key={index} item={child} level={level + 1} />
            ))}
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <IconButton
        aria-label="Toggle sidebar"
        position="fixed"
        bottom="4"
        left="4"
        zIndex="60"
        hideFrom="md"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        colorScheme="blue"
        size="lg"
        rounded="full"
        boxShadow="lg"
      >
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </IconButton>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.600"
          zIndex="40"
          hideFrom="md"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <MotionBox
        position="fixed"
        left={isMobileOpen ? '0' : '-280px'}
        top="0"
        h="100vh"
        w="280px"
        bg="white"
        _dark={{ bg: 'gray.900' }}
        borderRightWidth="1px"
        overflowY="auto"
        zIndex="50"
        pt="16"
        initial={false}
        animate={{ x: isMobileOpen ? 280 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        hideBelow="md"
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#cbd5e0',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a0aec0',
          },
        }}
      >
        <VStack gap="0" align="stretch" pb="8">
          {navigationData.map((item, index) => (
            <NavigationSection key={index} item={item} />
          ))}
        </VStack>
      </MotionBox>

      {/* Desktop Sidebar (Always visible) */}
      <Box
        position="fixed"
        left="0"
        top="0"
        h="100vh"
        w="280px"
        bg="white"
        _dark={{ bg: 'gray.900' }}
        borderRightWidth="1px"
        overflowY="auto"
        zIndex="40"
        pt="16"
        hideBelow="md"
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#cbd5e0',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a0aec0',
          },
        }}
      >
        <VStack gap="0" align="stretch" pb="8">
          {navigationData.map((item, index) => (
            <NavigationSection key={index} item={item} />
          ))}
        </VStack>
      </Box>
    </>
  );
}
