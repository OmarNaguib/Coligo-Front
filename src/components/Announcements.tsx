import Announcment from "./Announcment";
const announcments: Announcment[] = [];

function Announcements() {
  const announcmentsDisplay = announcments.map((announcment) => (
    <Announcment data={announcment} />
  ));
  return (
    <section>
      <h2>Announcments</h2>
      <p>everything you need to know</p>
      <ul>{announcmentsDisplay}</ul>
    </section>
  );
}

export default Announcements;
