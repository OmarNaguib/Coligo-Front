export type State = {
  quizzes: QuizType[];
  announcments: AnnouncmentType[];
};

export type QuizType = {
  title: string;
  type: "quiz" | "assignment";
  link: string;
  course: string;
  topic: string;
  dueDate: string;
};

export type AnnouncmentType = {
  author: string;
  imageSrc: string;
  text: string;
  course: string;
};
