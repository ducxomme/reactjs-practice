import React, { useState } from "react";
import TodoItem from '../components/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  // const [isChecked, setIsChecked] = useState(false);

  const addTodo = (task) => {
    setTodos([...todos, task])
    setTaskInput("");
  }

  const displayTodos = () => {
    return todos.map((task, index) => {
      return (
        <li key={index} style={{ listStyleType: "none" }}>
          <TodoItem task={task} />
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
