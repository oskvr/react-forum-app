import { Container, Progress } from '@chakra-ui/react';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { DarkModeSwitch } from './DarkModeSwitch';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      {/* TODO: Headern har konstig width vid window resize */}
      <Header />
      <DarkModeSwitch />
      <Progress isIndeterminate hidden={true} size="xs" />
      <Container
        as="main"
        mx="auto"
        maxW={{ base: 'container.md', lg: 'container.lg' }}
        minH="80vh"
      >
        <Breadcrumbs my="8" />
        {children}
      </Container>
    </>
  );
}
