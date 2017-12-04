import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: [
        "spaghetti",
        "ice cream",
        "Cookie Dough",
        "Dorritos",
        "Mountain dew"
      ]
    }
  }
  render() {
    let listArr = this.state.arr.map((element, index) =>{
      return (
        <h2 key={ index }>{ element }</h2>
      )
    });
    return (
      <div className="App">
        {listArr}              
      </div>
    );
  }
}

export default App;
