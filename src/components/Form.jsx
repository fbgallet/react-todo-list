import { useState } from "react";

const Form = ({ tasks, setTasks }) => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    setTasks((prev) => [...tasks, { description, done: false }]);
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
