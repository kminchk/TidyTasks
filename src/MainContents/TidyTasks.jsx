import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function TidyTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to save tasks to localStorage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to localStorage! : ", tasks);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ];
      setTasks(updatedTasks);
      setNewTask("");
      saveTasksToLocalStorage(updatedTasks);
      console.log("New task added!");
    }
  };

  // Toggle the completed status of a task
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    console.log("Task deleted!");
  };

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="p-4 flex flex-col">
      <div className="flex-grow overflow-hidden">
        <div className="h-[calc(65vh-4rem)] overflow-y-auto p-2 rounded">
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center p-2 rounded bg-base-200 text-2xl"
              >
                <p
                  className={`flex-grow cursor-pointer text-white ${
                    task.completed ? "line-through decoration-red-500" : ""
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <RemoveCircleIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Add Task"
            className="input input-bordered flex-grow mr-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <button
            className="btn-circle bg-gray-100 text-red-500 p-2"
            onClick={addTask}
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TidyTasks;
