import React, { useState } from "react";
import TodoItem from '../components/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTodo = (task) => {
    setTodos([...todos, task])
    setTaskInput("");
  }

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  const displayTodos = () => {
    return todos.map((task, index) => {
      return (
        <li key={index} style={{ listStyleType: "none" }}>
          <TodoItem index={index} task={task} onDelete={deleteTask}/>
        </li>
      );
    })
  }

  return (
    <div>
      <input
        type="text"
        id="taskInput"
        value={taskInput}
        name="taskInput"
        onChange={e => setTaskInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
          }
        }}
      />
      <button
        type="submit"
        onClick={() => addTodo(document.getElementById('taskInput').value)}>
        Add Task
      </button>

      <ul>{displayTodos()}</ul>
    </div>
  );
}

export default TodoList;
