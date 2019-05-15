import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component { // function App()

  state = { // state je react-ov property samo kod class based component, u kojeg mozes stavljati svoje objekte
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Maz', age: 29 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => { // koristis arrow function ako bi this bio referenciran na App class
    this.setState({ // metodu samo naledili iz Component class-e
      persons: [
        { name: newName, age: 28 },
        { name: 'Maxonac', age: 29 }
      ]
    });
  }

  nameChangeHandler(event) {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Maxonac', age: 29 }
      ]
    });
  }

  togglePersonsHandler = () => { // ako koristi arrow func, ne moras bind this u template-u
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() { // fuctional based component ne treba render() {}
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(p => {
            return <Person
                      name={p.name}
                      age={p.age}
                      click={this.switchNameHandler.bind(this, 'Maxonac!')}
                      changed={this.nameChangeHandler.bind(this)}
                      >My hobies: Gaming.
                   </Person>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <div>Hi, I'm a react app!!!</div>
        <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>

        {persons}
        {/* {this.state.showPersons ?
        <div>
          <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maxonac!')}
          changed={this.nameChangeHandler.bind(this)}
          >My hobies: Gaming.</Person>
        </div>
        : null} */}

      </div>
    );
  }

}

export default App;
