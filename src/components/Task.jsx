import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, taskIndex, setTasks }) => {
  const handleCheck = (event) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].done = event.target.checked;
      const [thisTask] = updatedTasks.splice(taskIndex, 1);
      let i = 0;
      while (i < updatedTasks.length && updatedTasks[i].done === false) {
        i++;
      }
      updatedTasks.splice(i, 0, thisTask);
      return updatedTasks;
    });
  };

  const handleDelete = () => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="task">
      <input onChange={handleCheck} type="checkbox" checked={task.done} />
      <div className={task.done ? "done" : ""}>{task.description}</div>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon="trash" size="sm" color="#5c48d3" />
      </button>
    </div>
  );
};

export default Task;
