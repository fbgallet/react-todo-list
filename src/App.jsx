import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
library.add(faTrash, faList, faSearch);

function App() {
  const [tasks, setTasks] = useState([]);
  const [matchingTasks, setMatchingTasks] = useState([]);

  return (
    <div className="todo-app">
      <Header tasks={tasks} setMatchingTasks={setMatchingTasks} />
      <Form setTasks={setTasks} />
      <div className="todo-list">
        {tasks.map(
          (task, index) =>
            (matchingTasks.length === 0 || matchingTasks[index]) && (
              <Task
                key={index + task.description}
                taskIndex={index}
                task={task}
                setTasks={setTasks}
              />
            )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
