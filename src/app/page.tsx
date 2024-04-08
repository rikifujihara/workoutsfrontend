"use client";
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/workout`
      );
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
      console.log(json);
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <WorkoutForm />
      <div>
        {workouts &&
          workouts.map((w) => (
            <WorkoutDetails key={w.id} workout={w}></WorkoutDetails>
          ))}
      </div>
    </>
  );
}
