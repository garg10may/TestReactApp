import React from 'react'

export default function Counter({ onDelete, onReset, onIncrement, value, id }) {
  return (
    <div>
      <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{value}</div>
      <button style={{ margin: 10 }} onClick={() => { onIncrement(id) }}>Increment</button>
      <button style={{ margin: 10 }} onClick={() => { onReset(id) }}>Reset</button>
      <button style={{ margin: 10 }} onClick={() => { onDelete(id) }}>Delete</button>
    </div>
  );
}