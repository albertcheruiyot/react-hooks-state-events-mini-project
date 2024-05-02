import React, { useState }  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES});

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoriesItems={categories} selectedCategory={selectedCategory} onFilter={handleFilter}/>
      <NewTaskForm categoriesItems={categories} onAddTask={handleAddTask}/>
      <TaskList tasksItems={tasks} onDeleteTask={handleDeleteTask} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;


