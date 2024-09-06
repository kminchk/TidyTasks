import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function TidyTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`card ${task.completed ? "bg-base-200" : ""}`}
          >
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <p className="ml-2">{task.text}</p>
              <RemoveCircleIcon
                sx={{ ml: 2, color: "#e74c3c" }}
                onClick={() => deleteTask(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Add Task"
          className="w-1/3 input input-bordered mr-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn btn-circle btn-error" onClick={addTask}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
}

export default TidyTasks;
