import React, {useState} from "react";

function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const {index, task, onDelete} = props;

  const updateTask = () => {
    setIsCompleted(!isCompleted);
  }

  const deleteTask = () => {
    onDelete(index);
  }

  const textStyle = {
    textDecorationLine: isCompleted ? "line-through" : "none"
  };

  return (
    <div>
      <input 
          type="checkbox" 
          className="TodoItem" 
          checked={isCompleted} 
          onChange={updateTask}
        />
        <label htmlFor="TodoItem" style={ textStyle }>{task}</label>
        <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TodoItem;