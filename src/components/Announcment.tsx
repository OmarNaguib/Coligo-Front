function Announcment({ data }: { data: AnnouncmentType }) {
  return (
    <li className="announcement">
      <div className="left">
        <img src={data.imageSrc} alt="" />
        <div className="title-course">
          <h3 className="author">{data.author}</h3>
          <p className="course">{data.course}</p>
        </div>
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
