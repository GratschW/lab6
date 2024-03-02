import React from 'react';

const ExerciseSelection = ({ onSelect }) => {
  return (
    <div>
      <h2>Exercises</h2>
      <button onClick={() => onSelect('repetition')}>Repetition</button>
      <button onClick={() => onSelect('duration')}>Duration</button>
    </div>
  );
};

export default ExerciseSelection;

  