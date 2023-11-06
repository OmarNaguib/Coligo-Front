import { configureStore } from "@reduxjs/toolkit";
import { AnnouncmentType, QuizType, State } from "../types";

const announcments: AnnouncmentType[] = [
  {
    author: "Mr.Ahmed Mostafa",
    imageSrc: "anyware.jpeg",
    text: "Hi my heros! i just want you ready to our exams and focus on remaining assesments to gain more grades. good luck my warriors!😄",
    course: "Math 101",
  },
  {
    author: "Mr.Ahmed Mostafa",
    imageSrc: "anyware.jpeg",
    text: "Hi my heros! i just want you ready to our exams and focus on remaining assesments to gain more grades. good luck my warriors!😄",
    course: "Math 101",
  },
  {
    author: "Mr.Ahmed Mostafa",
    imageSrc: "anyware.jpeg",
    text: "Hi my heros! i just want you ready to our exams and focus on remaining assesments to gain more grades. good luck my warriors!😄",
    course: "Math 101",
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
