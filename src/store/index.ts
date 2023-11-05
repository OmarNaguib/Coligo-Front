import { configureStore } from "@reduxjs/toolkit";
import { AnnouncmentType, QuizType, State } from "../types";

const announcments: AnnouncmentType[] = [
  {
    author: "Folan Elfolani",
    imageSrc: "null",
    text: "lorem ipsum dolor sit amet",
    course: "thing 101",
  },
];

const quizzes: QuizType[] = [
  {
    title: "The quiz",
    type: "quiz",
    link: "null",
    course: "Something 101",
    topic: "some topic",
    dueDate: "13/11/2023 12:00 PM",
  },
];

const reducerFn = (
  state: State = { quizzes: quizzes, announcments: announcments },
  action: { type: string }
) => state;

export const store = configureStore({ reducer: reducerFn });
