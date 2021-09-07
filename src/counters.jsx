import React, { Component } from 'react';
import Counter from './counter';

function Counters({ counters, onIncrement, onReset, doGlobalReset, onDelete }) {

  return (
    <div>
      <div>
        <button onClick={doGlobalReset} style={{ marginLeft: 20, marginTop: 40, marginBottom: 40, fontWeight: 'bold' }}>Global Reset</button>
      </div>
      <div>
        {
          counters.map(x => {
            return <Counter
              id={x.id}
              value={x.value}
              key={x.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onReset={onReset}
            ></Counter>
          })
        }
      </div>
    </div >
  )
}


export default Counters;