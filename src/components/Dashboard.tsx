import Header from "./Header";
import Navigation from "./Navigation";
import Tips from "./Tips";
import Announcements from "./Announcements";
import Quizzes from "./Quizzes";
import "../styles/App.css";

function Dashboard({ setIsAuth }: propsType) {
  return (
    <>
      <Header></Header>
      <Navigation setIsAuth={setIsAuth}></Navigation>
      <Tips></Tips>
      <Announcements></Announcements>
      <Quizzes></Quizzes>
    </>
  );
}

export default Dashboard;

type propsType = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
