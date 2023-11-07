export type State = {
  quizzes: QuizType[];
  announcements: AnnouncementType[];
};

export type QuizType = {
  title: string;
  type: "quiz" | "assignment";
  link: string;
  course: string;
  topic: string;
  dueDate: string;
};

export type AnnouncementType = {
  author: string;
  imageSrc: string;
  text: string;
  course: string;
};
