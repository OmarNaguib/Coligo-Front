import Quiz from "./Quiz";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../types";

function Quizzes() {
  const quizzes = useSelector((state: State) => state.quizzes);
  const quizzesDisplay = quizzes.map((quiz) => (
    <Quiz data={quiz} key={quiz.title} />
  ));
  return (
    <section className="quizzes">
      <h2>What's due</h2>
      <p className="description">Sometimes "LATER" becomes "NEVER". Go Now</p>
      <ul>{quizzesDisplay}</ul>
    </section>
  );
}

export default Quizzes;
