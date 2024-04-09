import { FormEvent, useState } from "react";
import useWorkoutsContext from "@/hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [load, setLoad] = useState<number | "">("");
  const [reps, setReps] = useState<number | "">("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const workout: Workout = {
      id: "",
      title,
      reps,
      load,
      timestamp: "",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/api/workout`,
      {
        method: "POST",
        body: JSON.stringify({ title, reps, load }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "ADD_WORKOUT", payload: json });

      setTitle("");
      setLoad("");
      setReps("");
      setError("");
    }
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Workout Form</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border border-gray-200 rounded-lg p-4 shadow-md mb-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="load" className="font-bold">
            Load (kg):
          </label>
          <input
            type="number"
            id="load"
            name="load"
            value={load}
            onChange={(e) => setLoad(parseInt(e.target.value))}
            className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reps" className="font-bold">
            Reps:
          </label>
          <input
            type="number"
            id="reps"
            name="reps"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value))}
            className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </>
  );
}
