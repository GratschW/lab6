import React, { useState } from 'react';

const RepetitionExercise = ({ onSelect }) => {
  const [exerciseName] = useState('Push-ups'); 
  const [repetitions, setRepetitions] = useState(0);

  const increaseRepetitions = () => {
    setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };

  return (
    <div>
      <h2>{exerciseName}</h2>
      <p>Repetitions: {repetitions}</p>
      <button onClick={increaseRepetitions}>Add Repetition</button>
      <button onClick={resetRepetitions}>Reset</button>
      <button onClick={() => onSelect(null)}>Menu</button>
    </div>
  );
};

export default RepetitionExercise;







