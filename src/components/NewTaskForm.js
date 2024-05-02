import React from "react";

function NewTaskForm({ categoriesItems, onAddTask }) {

  console.log(categoriesItems.type);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {
      text: formData.get("text"),
      category: formData.get("category")
    };
    onAddTask(newTask);
    e.target.reset(); // Clear the form after submitting
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" required>
          {categoriesItems.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
