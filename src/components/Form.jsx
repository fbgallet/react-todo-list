import { useState } from "react";
import { insertAsLastUndone } from "../utils";

const Form = ({ setTasks }) => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    setTasks((tasks) =>
      insertAsLastUndone([...tasks], { description, done: false })
    );
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="new task"
        type="text"
        name="task"
        value={description}
        onChange={handleChange}
      />
      <button>Add task</button>
    </form>
  );
};

export default Form;
