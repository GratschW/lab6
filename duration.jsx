import React, { useState, useEffect } from 'react';

const DurationExercise = ({ onSelect }) => { 
  const [exerciseName] = useState('Running'); 
  const [timerRunning, setTimerRunning] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000); 
    } else {
      clearInterval(intervalId); 
    }

    return () => clearInterval(intervalId); 
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setDuration(0);
  };

  return (
    <div>
      <h2>{exerciseName}</h2>
      <p>Duration: {duration} seconds</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <button onClick={() => onSelect && onSelect(null)}>Menu</button> {}
    </div>
  );
};

export default DurationExercise;





