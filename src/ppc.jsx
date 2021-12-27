import React, { useState } from 'react'
import PpcForm from './ppcForm';

export default function Ppc() {

  const [ppcText, setPpcText] = useState('PPC Text')
  const handleSubmit = (event) => {
    alert(ppcText);
  }
  const handleChange = (event) => {
    setPpcText(event.target.value);
  }

  return (
    <div>
      <div>Hi</div>
      <PpcForm handleChange={handleChange} ppcText={ppcText} handleSubmit={handleSubmit}></PpcForm>
    </div>
  )
}