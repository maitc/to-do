import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', items: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: '',
      items: [...this.state.items, this.state.value]
    });
  }
  deleteItem(item){
     const newState = this.state.items.slice();
      if (newState.indexOf(item) > -1) {
        newState.splice(newState.indexOf(item), 1);
        this.setState({items: [...newState]})
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-do in React</h1>
        </header>
        <div>
          <ul>
            {this.state.items.map((item, index) => <li key={index} onClick={() => this.deleteItem(item)}>{item}</li>)}
          </ul>
        </div>
        <div className="App-intro">
          <input placeholder="¿Qué debo hacer?" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Guardar</button>
        </div>
      </div>
    );
  }
}

export default App;
