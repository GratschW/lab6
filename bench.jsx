import React, { useState } from 'react';

const Bench = ({ onSelect }) => {
  const [exerciseName] = useState('Bench Press'); 
  const [repetitions, setRepetitions] = useState(0);
  const [weight, setWeight] = useState(0);

  const increaseRepetitions = () => {
    setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <h2>{exerciseName}</h2>
      <p>Repetitions: {repetitions}</p>
      <p>Weight: <input type="number" value={weight} onChange={handleWeightChange} /></p>
      <button onClick={increaseRepetitions}>Add Repetition</button>
      <button onClick={resetRepetitions}>Reset</button>
      <button onClick={() => onSelect(null)}>Menu</button>
    </div>
  );
};

export default Bench;

