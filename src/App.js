import React, { Component } from 'react';
import Child from './components/Child'
import './App.css';

class App extends Component {
  constructor() {
    super();
    // super allows us to use 'this' keyword
    this.state = {
      favFood: 'pizza'
    }
  }

  changeFav(foodItem) {
    this.setState({
      favFood: 'fries'
    })
  }

  render() {

    return (
      <div className="App">
        <h3>My favorite food is: {this.state.favFood}</h3>
        <button onClick={ () => this.changeFav() }>Change</button>
       
      </div>
    );
  }
}

export default App;
