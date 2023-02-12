import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isChecked: false
    }
  }

  updateTask = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const textStyle = {
      textDecorationLine: this.state.isChecked ? "line-through" : "none"
    };
    return (
      <div>
        <input 
          type="checkbox" 
          className="TodoItem" 
          checked={this.state.isChecked} 
          onChange={this.updateTask}
        />
        <label htmlFor="TodoItem" style={ textStyle }>{this.props.text}</label>
      </div>
    );
  }
}

export default TodoItem;