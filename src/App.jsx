import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="todo-app">
      <Form tasks={tasks} setTasks={setTasks} />
      <div className="todo-list">
        {tasks.map((task, index) => (
          <Task
            key={index + task.description}
            taskIndex={index}
            task={task}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
