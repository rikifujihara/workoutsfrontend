interface WorkoutProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md mb-4">
      <h4 className="text-xl font-semibold mb-2">{workout.title}</h4>
      <div className="flex justify-between">
        <p className="text-gray-700">
          <strong>Load (kg): </strong> {workout.load}
        </p>
        <p className="text-gray-700">
          <strong>Reps: </strong> {workout.reps}
        </p>
      </div>
    </div>
  );
}
