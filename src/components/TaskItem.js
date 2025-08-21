import React, { useState } from 'react';
import { Box, Text, Button, Flex, Input, Select, useColorModeValue } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleDone, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDeadline, setNewDeadline] = useState(task.deadline);
  const [newPriority, setNewPriority] = useState(task.priority);

  const getBackgroundColor = () => {
    if (task.isDone) return "green.200";
    if (task.priority === "High") return "red.200";
    if (task.priority === "Medium") return "orange.200";
    if (task.priority === "Low") return "yellow.200";
    return "white";
  };

  const isDeadlinePassed = new Date(task.deadline) < new Date() && !task.isDone;

  const handleUpdate = () => {
    updateTask(task.id, {
      name: newName,
      deadline: newDeadline,
      priority: newPriority,
    });
    setIsEditing(false);
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={getBackgroundColor()}>
      <Flex direction="column" gap={2}>
        {isEditing ? (
          <Flex direction="column" gap={2}>
            <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <Input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} />
            <Select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Select>
            <Button colorScheme="green" onClick={handleUpdate}>
              Save
            </Button>
          </Flex>
        ) : (
          <>
            <Text fontSize="xl" fontWeight="bold" textDecoration={task.isDone ? "line-through" : "none"}>
              {task.name}
            </Text>
            <Flex alignItems="center">
              <Text fontSize="sm">Deadline: {task.deadline}</Text>
              {isDeadlinePassed && <WarningIcon color="red.500" ml={2} />}
            </Flex>
            <Flex mt={2} gap={2}>
              <Button size="sm" colorScheme="blue" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button size="sm" colorScheme="red" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
              <Button size="sm" colorScheme={task.isDone ? "gray" : "green"} onClick={() => toggleDone(task.id)}>
                {task.isDone ? "Undone" : "Done"}
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default TaskItem;
