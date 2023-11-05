import { useState } from "react";

function Navigation() {
  return (
    <nav>
      <h1>Coligo</h1>
      <ul>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Scheduele</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
        <li>
          <a href="">Gradebook</a>
        </li>
        <li>
          <a href="">Performance</a>
        </li>
        <li>
          <a href="">Announcement</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
