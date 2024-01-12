import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ tasks, setMatchingTasks }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      setMatchingTasks([]);
      return;
    }
    setMatchingTasks();
    const tasksClone = [...tasks];
    setMatchingTasks(
      tasksClone.map((task) =>
        task.description.toLowerCase().includes(event.target.value)
          ? true
          : false
      )
    );
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      setSearch("");
      setMatchingTasks([]);
    }
  };

  return (
    <header>
      <div>
        <div className="logo">
          <FontAwesomeIcon icon="list" size="xl" color="#5c48d3" />
        </div>
        <h1>Todo List</h1>
      </div>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          onKeyDown={handleEscape}
        />
        <FontAwesomeIcon
          className="search-icon"
          icon="search"
          color="#aa9bffbf"
        />
      </div>
    </header>
  );
};

export default Header;
