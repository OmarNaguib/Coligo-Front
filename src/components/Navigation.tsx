import { useState } from "react";

function Navigation() {
  return (
    <nav>
      <h1>Coligo</h1>
      <ul>
        <li>
          <button className="selected">
            <span className="material-symbols-outlined">home</span>Dashboard
          </button>
        </li>
        <li>
          <button>
            <span className="material-symbols-outlined">calendar_month</span>
            Scheduele
          </button>
        </li>
        <li>
          <button>
            <span className="material-symbols-outlined">book_4</span>Courses
          </button>
        </li>
        <li>
          <button>
            <span className="material-symbols-outlined">school</span>Gradebook
          </button>
        </li>
        <li>
          <button>
            <span className="material-symbols-outlined">chart_data</span>
            Performance
          </button>
        </li>
        <li>
          <button>
            <span className="material-symbols-outlined">campaign</span>
            Announcement
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
