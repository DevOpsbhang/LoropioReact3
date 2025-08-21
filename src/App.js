import React from 'react';
import { Box, Heading, Container, Flex } from '@chakra-ui/react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <Box bg="gray.100" minH="100vh">
        <Box bg="purple.600" color="white" py={8} mb={8} textAlign="center">
          <Heading as="h1" size="2xl">Task Management App</Heading>
        </Box>
        <Container maxW="container.md">
          <Flex direction="column" gap={8}>
            <TaskForm />
            <TaskList />
          </Flex>
        </Container>
      </Box>
    </TaskProvider>
  );
};

export default App;
