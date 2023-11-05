import Announcment from "./Announcment";
const announcments: AnnouncmentType[] = [
  {
    author: "Folan Elfolani",
    imageSrc: "null",
    text: "lorem ipsum dolor sit amet",
    course: "thing 101",
  },
];

function Announcements() {
  const announcmentsDisplay = announcments.map((announcment) => (
    <Announcment data={announcment} />
  ));
  return (
    <section>
      <h2>Announcments</h2>
      <p>everything you need to know</p>
      <ul className="quizzes">{announcmentsDisplay}</ul>
    </section>
  );
}

export default Announcements;

type AnnouncmentType = {
  author: string;
  imageSrc: string;
  text: string;
  course: string;
};
