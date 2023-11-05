function Quiz({ data }: { data: QuizType }) {
  return (
    <li className="quiz">
      <div>
        <img src="" alt="" />
        <h3>{data.title}</h3>
        <p>Course: {data.course}</p>
        <p>Topic: {data.topic}</p>
        <p>Due Date: {data.dueDate}</p>
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
