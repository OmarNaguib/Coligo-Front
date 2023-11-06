import Announcment from "./Announcment";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../types";

function Announcements() {
  const announcments = useSelector((state: State) => state.announcments);
  const announcmentsDisplay = announcments.map((announcment) => (
    <Announcment data={announcment} />
  ));
  return (
    <section className="announcements">
      <h2>Announcments</h2>
      <p className="description">We educate warriors! keep updated :)</p>
      <ul>{announcmentsDisplay}</ul>
    </section>
  );
}

export default Announcements;
