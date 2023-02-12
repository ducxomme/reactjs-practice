import React, {useState} from "react";

function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const updateTask = () => {
    setIsCompleted(!isCompleted);
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
        <label htmlFor="TodoItem" style={ textStyle }>{props.task}</label>
    </div>
  );
}

export default TodoItem;