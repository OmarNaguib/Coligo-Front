const quizIcon = (
  <span className="material-symbols-outlined blue">hourglass_top</span>
);
const assignmentIcon = (
  <span className="material-symbols-outlined blue">assignment</span>
);
function Quiz({ data }: { data: QuizType }) {
  const icon = data.type === "quiz" ? quizIcon : assignmentIcon;
  const buttonText = data.type === "quiz" ? "Start Quiz" : "Solve Assignment";
  return (
    <li className="quiz">
      <div>
        <h3>
          {icon}
          {data.title}
        </h3>
        <p>Course: {data.course}</p>
        <p>Topic: {data.topic}</p>
        <p>Due Date: {data.dueDate}</p>
        <a href={data.link} target="_blank">
          {buttonText}
        </a>
      </div>
    </li>
  );
}

export default Quiz;

type QuizType = {
  title: string;
  type: "quiz" | "assignment";
  link: string;
  course: string;
  topic: string;
  dueDate: string;
};
