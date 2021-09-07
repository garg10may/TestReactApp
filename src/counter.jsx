import React, { Component } from 'react'

export default class Counter extends Component {

  render() {

    const { onDelete, onReset, onIncrement, value, id } = this.props;

    // here the click events are bubbled to the topmost 'App' component
    // we pass the id, but then others are just references and finally we use the id
    return (
      <div>
        <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{value}</div>
        <button style={{ margin: 10 }} onClick={() => { onIncrement(id) }}>Increment</button>
        <button style={{ margin: 10 }} onClick={this.onReset}>Reset</button>
        <button style={{ margin: 10 }} onClick={this.onDelete}>Delete</button>
      </div>
    );
  }

  onDelete = () => {
    this.props.onDelete(this.props.id);
  }

  onIncrement = () => {
    this.props.onIncrement(this.props.id);
  }

  onReset = () => {
    this.props.onReset(this.props.id);
  }

}
