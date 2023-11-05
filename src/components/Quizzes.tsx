import Quiz from "./Quiz";
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

function Quizzes() {
  const quizzesDisplay = quizzes.map((quiz) => <Quiz data={quiz} />);
  return (
    <section>
      <h2>What's due</h2>
      <p>assignments and quizzes</p>
      <ul className="quizzes">{quizzesDisplay}</ul>
    </section>
  );
}

export default Quizzes;

type QuizType = {
  title: string;
  type: "quiz" | "assignment";
  link: string;
  course: string;
  topic: string;
  dueDate: string;
};
