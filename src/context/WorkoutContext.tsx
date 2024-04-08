"use client";

import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { workouts: null },
  dispatch: () => {},
});

interface State {
  workouts: Workout[] | null;
}

type Action =
  | { type: "SET_WORKOUTS"; payload: Workout[] }
  | { type: "ADD_WORKOUT"; payload: Workout }
  | { type: "REMOVE_WORKOUT"; payload: string };

export function workoutsReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "ADD_WORKOUT":
      return {
        workouts: state.workouts
          ? [action.payload, ...state.workouts]
          : [action.payload],
      };
    case "REMOVE_WORKOUT":
      return {
        workouts: state.workouts
          ? state.workouts.filter((w) => w.id != action.payload)
          : null,
      };
    default:
      return state;
  }
}

export function WorkoutsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
}
