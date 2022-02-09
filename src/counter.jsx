import React from 'react'
import ThemeContext from './context';
import { useContext } from 'react';
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

  const context = useContext(ThemeContext); //using useContext hook to get the context
  return (
    <div>
      <div>{context.name}</div>
      <div>{context.theme}</div>
      <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{props.value}</div>
      <button style={{ margin: 10 }} onClick={() => props.onIncrement(props.id)}>Increment</button>
      <button style={{ margin: 10 }} onClick={() => props.onReset(props.id)}>Reset</button>
      <button style={{ margin: 10 }} onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

/* Other way to consume context, using Consumer. If multiple values, destructure it. 
return (
  <ThemeContext.Consumer>
    {({ name, theme }) => (
      <div>
        <div>{name}</div>
        <div>{theme}</div>
        <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{props.value}</div>
        <button style={{ margin: 10 }} onClick={() => props.onIncrement(props.id)}>Increment</button>
        <button style={{ margin: 10 }} onClick={() => props.onReset(props.id)}>Reset</button>
        <button style={{ margin: 10 }} onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    )
    }
  </ThemeContext.Consumer>
*/
