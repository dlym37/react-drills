import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      input: ''
    }
    this.handleTask= this.handleTask.bind(this);
  }
  changeItem(val) {
    this.setState({ input: val });
  }
  handleTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: ''
    })
  }
  render() {
    let tasks = this.state.tasks.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input value ={this.state.input}
          placeholder="Enter new task"
          onChange={(e) => this.changeItem(e.target.value)} />
          <button onClick={this.handleTask}>Add</button>
        </div>
        <br />
        {tasks}
      </div>
    );
  }
}

export default App;
