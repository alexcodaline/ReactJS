import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskManager() {

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const inputData = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, 
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: form.title,
      description: form.description,
    };
    setTasks([...tasks, newTask]);
    setForm({
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={inputData}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={inputData}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h2>Task List</h2>
        <TaskList tasks={tasks}/>
      </div>
    </div>
  );
}