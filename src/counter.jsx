import React from 'react'

// export default function Counter({ onDelete, onReset, onIncrement, value, id }) {
// return (
// <div>
{/* <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{value}</div> */ }
{/* <button style={{ margin: 10 }} onClick={() => onIncrement(id)}>Increment</button> */ }
{/* <button style={{ margin: 10 }} onClick={() => onReset(id)}>Reset</button> */ }
{/* <button style={{ margin: 10 }} onClick={() => onDelete(id)}>Delete</button> */ }
{/* </div> */ }
// );
// }

export default function Counter(props) { //using prop destructing to get the props
  return (
    <div>
      <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{props.value}</div>
      <button style={{ margin: 10 }} onClick={() => props.onIncrement(props.id)}>Increment</button>
      <button style={{ margin: 10 }} onClick={() => props.onReset(props.id)}>Reset</button>
      <button style={{ margin: 10 }} onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}