import { configureStore } from "@reduxjs/toolkit";
import { AnnouncmentType, QuizType, State } from "../types";
const reducerFn = (
  state: State = { quizzes: [], announcments: [] },
  action: { type: string }
) => state;

export const store = configureStore({ reducer: reducerFn });
