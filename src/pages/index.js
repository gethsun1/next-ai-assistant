// src/pages/index.js
import Layout from '../components/Layout';
import TaskCard from '../components/TaskCard';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/tasks');
      setTaskList(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate_task', { task: newTask.title });
      const generatedTask = response.data.task_list;
      setTaskList([...taskList, { title: newTask.title, description: generatedTask, dueDate: newTask.dueDate }]);
      setNewTask({ title: '', description: '', dueDate: '' });
    } catch (error) {
      console.error('Error generating task:', error);
    }
  };

  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          AI-Powered Task Manager
        </Typography>
        <Box sx={{ mb: 4 }}>
          {taskList.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', mb: 4 }}>
          <TextField
            label="Task Title"
            name="title"
            value={newTask.title}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            label="Task Description"
            name="description"
            value={newTask.description}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            label="Due Date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleChange}
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
