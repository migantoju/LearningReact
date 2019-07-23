import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import List from "./List";
import "./Todo.css";

class Todo extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      task: "",
      items: []
    };
  }
  componentWillMount() {
    // setting default tasks...
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false
        },
        {
          id: uuidv4(),
          task: "Go to the gym",
          completed: false
        },
        {
          id: uuidv4(),
          task: "Learn more React.JS",
          completed: false
        }
      ]
    });
  }

  handleOnChange = e => {
    const {
      target: { value }
    } = e;
    // Updating our task state with the input value...
    this.setState({
      task: value
    });
  };

  handleOnSubmit = e => {
    // prevent default to avid the atual form submit...
    e.preventDefault();
    // Once is submited we reset the task value and we push the
    // new task to the items array
    if (this.state.task.trim() !== "") {
      this.setState({
        task: "",
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            completed: false
          }
        ]
      });
    }
    localStorage.setItem("task", this.state.task);
  };

  markAsCompleted = id => {
    // finding the task by id...
    const foundTask = this.state.items.find(task => task.id === id);
    // updating the completed status
    foundTask.completed = true;
    //updating the state with the new updated task
    this.setState(prevState => ({ items: [...prevState.items, foundTask] }));
  };

  removeTask = id => {
    // Filtering the tasks by removing the specific task id
    const filteredTasks = this.state.items.filter(task => task.id !== id);
    // updating items state...
    this.setState({
      items: filteredTasks
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task: </h1>

        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
