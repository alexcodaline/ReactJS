import React, { useState } from "react";

export default function Task({ title, description, isCompleted: noComplited }) {
  const [isCompleted, setIsCompleted] = useState(noComplited);

  const toggleTask = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div
      className={`flex items-center justify-center flex-col gap-5  rounded-2xl w-6/18 h-50 ${
        isCompleted ? "bg-emerald-800" : "bg-pink-600"
      }`}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-3xl font-mono">{description}</p>
      <button onClick={toggleTask} className="w-max h20 bg-amber-100 p-1.5 cursor-pointer">
        {isCompleted ? "Complited" : "No complited"}
      </button>
    </div>
  );
}
