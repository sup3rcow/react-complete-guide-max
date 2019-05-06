import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component { // function App()

  state = { // state je react-ov property samo kod class based component, u kojeg mozes stavljati svoje objekte
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Maz', age: 29 }
    ]
  };

  switchNameHandler = () => { // koristis arrow function ako bi this bio referenciran na App class
    // this.state.persons[0].name = 'Maxona'; // ne ovako!!
    this.setState({ // metodu samo naledili iz Component class-e
      persons: [
        { name: 'Maxona', age: 28 },
        { name: 'Maz', age: 29 }
      ]
    });
  }

  render() { // fuctional based component ne treba render() {}
    return (
      <div className="App">
        <div>Hi, I'm a react app!!!</div>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobies: Gaming.</Person>
      </div>
    );
  }

}

export default App;
