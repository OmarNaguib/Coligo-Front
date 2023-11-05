import Announcment from "./Announcment";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { AnnouncmentType, QuizType, State } from "../types";

// const announcments: AnnouncmentType[] = [
//   {
//     author: "Folan Elfolani",
//     imageSrc: "null",
//     text: "lorem ipsum dolor sit amet",
//     course: "thing 101",
//   },
// ];

function Announcements() {
  const announcments = useSelector((state: State) => state.announcments);
  const announcmentsDisplay = announcments.map((announcment) => (
    <Announcment data={announcment} />
  ));
  return (
    <section className="announcements">
      <h2>Announcments</h2>
      <p>everything you need to know</p>
      <ul className="quizzes">{announcmentsDisplay}</ul>
    </section>
  );
}

export default Announcements;
