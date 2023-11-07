import { configureStore } from "@reduxjs/toolkit";
import { State } from "../types";

const reducerFn = (
  state: State = { quizzes: [], announcements: [] },
  action: { type: string; payload: { newState: State } }
) => {
  console.log(action);
  if (action.type === "SET") return { ...action.payload.newState };
  return state;
};

export const store = configureStore({ reducer: reducerFn });
