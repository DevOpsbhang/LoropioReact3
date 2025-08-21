import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, VStack } from '@chakra-ui/react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !deadline) return;

    const newTask = { name, deadline, priority };
    addTask(newTask);
    setName('');
    setDeadline('');
    setPriority('Low');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg" bg="white">
      <VStack spacing={4}>
        <FormControl id="task-name" isRequired>
          <FormLabel>Task Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Learn React" />
        </FormControl>
        <FormControl id="task-deadline" isRequired>
          <FormLabel>Deadline</FormLabel>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>
        <FormControl id="task-priority">
          <FormLabel>Priority</FormLabel>
          <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">
          Add Task
        </Button>
      </VStack>
    </Box>
  );
};

export default TaskForm;import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, VStack } from '@chakra-ui/react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !deadline) return;

    const newTask = { name, deadline, priority };
    addTask(newTask);
    setName('');
    setDeadline('');
    setPriority('Low');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg" bg="white">
      <VStack spacing={4}>
        <FormControl id="task-name" isRequired>
          <FormLabel>Task Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Learn React" />
        </FormControl>
        <FormControl id="task-deadline" isRequired>
          <FormLabel>Deadline</FormLabel>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>
        <FormControl id="task-priority">
          <FormLabel>Priority</FormLabel>
          <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">
          Add Task
        </Button>
      </VStack>
    </Box>
  );
};

export default TaskForm;
