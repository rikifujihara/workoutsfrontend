import { WorkoutsContext } from "@/context/WorkoutContext";
import { useContext } from "react";

export default function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutsContext needs to be used inside its provider");
  }

  return context;
}
