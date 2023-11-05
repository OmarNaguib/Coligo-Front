import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Tips from "./components/Tips";
import Announcements from "./components/Announcements";
import Quizzes from "./components/Quizzes";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Tips></Tips>
      <Announcements></Announcements>
      <Quizzes></Quizzes>
    </>
  );
}

export default App;
