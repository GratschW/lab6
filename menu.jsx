import React from 'react';

const ExerciseSelection = ({ onSelect }) => {
  return (
    <div>
      <h2>Exercises</h2>
      <button onClick={() => onSelect('repetition')}>Push Ups</button>
      <button onClick={() => onSelect('duration')}>Running</button>
      <button onClick={() => onSelect('bench')}>Bench Press</button>
    </div>
  );
};

export default ExerciseSelection;
