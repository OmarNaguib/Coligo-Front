import Announcment from "./Announcment";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../types";

function Announcements() {
  const announcements = useSelector((state: State) => state.announcements);
  console.log(announcements);

  const announcementsDisplay = announcements.map((announcment) => (
    <Announcment data={announcment} />
  ));
  return (
    <section className="announcements">
      <h2>Announcements</h2>
      <p className="description">We educate warriors! keep updated :)</p>
      <ul>{announcementsDisplay}</ul>
    </section>
  );
}

export default Announcements;
