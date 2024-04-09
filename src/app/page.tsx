"use client";
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";
import { useEffect } from "react";
import useWorkoutsContext from "@/hooks/useWorkoutsContext";

export default function Home() {
  const { state, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/workout`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
      console.log(json);
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <WorkoutForm />
      <div className="w-4/5 sm:w-4/5 lg:w-1/2">
        {state.workouts &&
          state.workouts.map((w) => (
            <WorkoutDetails key={w.id} workout={w}></WorkoutDetails>
          ))}
      </div>
    </>
  );
}
