import React, { Component, useState, getState } from 'react';

export default function PpcForm({ handleSubmit, ppcText, handleChange }) {

  return (
    <div>
      <div>PPC Form </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="ppc" value={ppcText} onChange={handleChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}