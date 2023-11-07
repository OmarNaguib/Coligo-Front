import Header from "./Header";
import Navigation from "./Navigation";
import Tips from "./Tips";
import Announcements from "./Announcements";
import Quizzes from "./Quizzes";
import "../styles/App.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Dashboard({ setIsAuth }: propsType) {
  const dispatch = useDispatch();
  // Get data from Api
  useEffect(() => {
    async function getData() {
      console.log("inFunction");
      const announcementsResponse = await fetch(
        "http://localhost:3000/api/announcements/"
      );
      console.log("here", announcementsResponse);
      const announcements = await announcementsResponse.json();
      const quizzesResponse = await fetch("http://localhost:3000/api/quizzes/");
      const quizzes = await quizzesResponse.json();
      dispatch({
        type: "SET",
        payload: {
          newState: {
            quizzes: quizzes.quizzes,
            announcements: announcements.announcements,
          },
        },
      });
    }
    getData();
  }, []);

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
