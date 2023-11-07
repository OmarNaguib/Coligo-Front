import Dashboard from "./components/Dashboard";
import { Home } from "./components/Home";

import { useState } from "react";

import "./styles/App.css";

function RequireAuth() {
  const [isAuth, setIsAuth] = useState(false);
  return isAuth ? (
    <Dashboard setIsAuth={setIsAuth} />
  ) : (
    <Home setIsAuth={setIsAuth} />
  );
}

export default RequireAuth;
