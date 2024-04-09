import { prettyDate } from "@/util/prettyDate";
import useWorkoutsContext from "@/hooks/useWorkoutsContext";

interface WorkoutProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutProps) {
  const { state, dispatch } = useWorkoutsContext();

  async function handleDelete() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/api/workout/${workout.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: "REMOVE_WORKOUT", payload: workout.id });
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md mb-4">
      <h4 className="text-xl font-semibold mb-2">{workout.title}</h4>
      <div className="flex justify-between mb-2">
        <p className="text-gray-700">
          <strong>Load (kg): </strong> {workout.load}
        </p>
        <p className="text-gray-700">
          <strong>Reps: </strong> {workout.reps}
        </p>
      </div>
      <div className="mb-2">
        <h5 className="text-gray-700">{prettyDate(workout.timestamp)}</h5>
      </div>
      <button
        onClick={handleDelete}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
}
