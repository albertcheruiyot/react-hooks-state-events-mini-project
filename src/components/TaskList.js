import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ tasksItems, onDeleteTask, selectedCategory }) {


  const [filteredTasks, setFilteredTasks] = useState(tasksItems);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTasks(tasksItems);
    } else {
      const filtered = tasksItems.filter(task => task.category === selectedCategory);
      setFilteredTasks(filtered);
    }
  }, [selectedCategory, tasksItems]);


  const handleDeleteTask = (index) => {
    onDeleteTask(index);
  };

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
