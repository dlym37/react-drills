import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    
  }
  changedItem (val) {
    this.setState({input : val});
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.changedItem(e.target.value)}></input> 
        <h1>{this.state.input}</h1>     
      </div>
    );
  
  }
}

export default App;
