import React from "react";

const TaskList = ({tasks}) => {
    if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
        return <p>Add new task</p>
    }
    
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    {task.description && <p>{task.description}</p>}
                </li>
            ))}
        </ul>
    );
}

TaskList.defaultProps = {
    tasks: []
};

export default TaskList;