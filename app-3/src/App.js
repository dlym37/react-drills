import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr2: '',
      arr: [
        "spaghetti",
        "ice cream",
        "Cookie Dough",
        "Dorritos",
        "Mountain dew"
      ]
    }
  }
  changeItem(val){
    this.setState({arr2 : val});
  }
  render() {
    let listArr = this.state.arr.filter((element, index) =>{
      
      return element.includes(this.state.arr2)
    }).map((element, index) => {
      return <h2 key= {index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e)=> this.changeItem(e.target.value)}/>
        {listArr}              
      </div>
    );
  }
}

export default App;
