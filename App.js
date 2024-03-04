import React, { useState } from 'react';
import ExerciseSelection from './menu';
import RepetitionExercise from './repetition';
import DurationExercise from './duration';
import BenchExercise from './bench'; 

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div>
      {selectedExercise === null && <ExerciseSelection onSelect={handleExerciseSelection} />}

      {selectedExercise === 'repetition' && <RepetitionExercise onSelect={handleExerciseSelection} />}

      {selectedExercise === 'duration' && <DurationExercise onSelect={handleExerciseSelection} />}

      {selectedExercise === 'bench' && <BenchExercise onSelect={handleExerciseSelection} />} {/* Render BenchExercise when selectedExercise is 'bench' */}
    </div>
  );
};

export default App;














