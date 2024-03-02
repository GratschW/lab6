import React, { useState } from 'react';
import ExerciseSelection from './menu';
import RepetitionExercise from './repetition';
import DurationExercise from './duration';

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div>
      {}
      {selectedExercise === null && <ExerciseSelection onSelect={handleExerciseSelection} />}

      {}
      {selectedExercise === 'repetition' && <RepetitionExercise onSelect={handleExerciseSelection} />}

      {}
      {selectedExercise === 'duration' && <DurationExercise onSelect={handleExerciseSelection} />}
    </div>
  );
};

export default App;













