import React, { Component } from 'react';
import './App.css';
import Counters from './counters';
import Header from './Header';
import Ppc from './ppc';
import ThemeContext from './context';

export default class App extends Component {

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 4 }
    ]
  }

  render() {
    return (
      <ThemeContext.Provider value={{ name: 'tanmay', theme: 'dark' }}>
        <div className="App" >
          <Header count={this.state.counters.filter(x => x.value > 0).length}></Header>
          <Counters counters={this.state.counters}
            onIncrement={this.onIncrement}
            onReset={this.onReset}
            doGlobalReset={this.doGlobalReset}
            onDelete={this.doDelete}></Counters>
          {/* <Ppc></Ppc> */}
        </div>
      </ThemeContext.Provider>
    );
  }

  onIncrement = (id) => {
    this.state.counters.forEach(counter => {
      if (counter.id === id) {
        counter.value = counter.value + 1
      }
    });
    this.setState(this.state);
  }

  onReset = (id) => {
    this.state.counters.forEach(counter => {
      if (counter.id === id) {
        counter.value = 0
      }
    })
    this.setState(this.state);
  }

  doGlobalReset = () => {
    this.state.counters.forEach(counter => counter.value = 0);
    this.setState(this.state);
  }

  doDelete = (id) => {
    this.setState({ counters: this.state.counters.filter(x => x.id != id) });
  }

}

