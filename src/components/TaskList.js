import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <Box mt={8}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Your Tasks
      </Heading>
      <VStack spacing={4} align="stretch">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <Text textAlign="center" color="gray.500">
            No tasks yet. Add one to get started!
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default TaskList;
