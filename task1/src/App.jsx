import Task from "./components/Task"
import './App.css'

function App() {
  
  return (
    <div className="w-full my-2.5 flex gap-5 flex-col text-center items-center">
<Task
title="Task 1"
description="Create react component"
isCompleted={true}
/>
<Task
title="Task 1.1"
description="Use tailwind"
isCompleted={false}
/>
    </div>
  )
}

export default App
