import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Task1', isCompleted: false },
  { id: 2, title: 'Task 2', isCompleted: false },
  { id: 3, title: 'Task3', isCompleted: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.isCompleted ? 'task completed' : 'task'}
          >
            {task.title}
            <button onClick={() => toggleComplete(task.id)}>
              {task.isCompleted ? 'No Complete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
