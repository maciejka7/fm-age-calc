import { useState } from 'react';
import { InputGroup, Input, ActionButton, Date } from './components';

import './App.css';

function App() {
  const handleCalc = () => {};

  return (
    <div className="App container mx-auto">
      <InputGroup>
        <Input label="day" placeholder="dd" />
        <Input label="month" placeholder="mm" />
        <Input label="year" placeholder="yyyy" />
      </InputGroup>

      <ActionButton handleClick={handleCalc} />

      <Date amount={null} label="years" />
      <Date amount={null} label="months" />
      <Date amount={null} label="days" />
    </div>
  );
}

export default App;
