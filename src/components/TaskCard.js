// src/components/TaskCard.js
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{task.title}</Typography>
      <Typography variant="body2">{task.description}</Typography>
      <Typography variant="caption" color="textSecondary">{task.dueDate}</Typography>
    </CardContent>
  </Card>
);

export default TaskCard;
