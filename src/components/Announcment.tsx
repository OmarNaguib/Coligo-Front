function Announcment({ data }: { data: AnnouncmentType }) {
  return (
    <li className="announcement">
      <img src={data.imageSrc} alt="" />
      <div>
        <h3 className="author">{data.author}</h3>
        <p className="course">{data.course}</p>
      </div>
      <p className="text">{data.text}</p>
    </li>
  );
}

export default Announcment;

type AnnouncmentType = {
  author: string;
  imageSrc: string;
  text: string;
  course: string;
};
