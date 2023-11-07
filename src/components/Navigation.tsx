import { useRef } from "react";

function Navigation({ setIsAuth }: propsType) {
  const navRef = useRef<HTMLElement>(null);
  return (
    <nav
      ref={navRef}
      onClick={() => {
        if (navRef.current) navRef.current.classList.toggle("modal-visible");
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
          <li>
            <button
              onClick={() => {
                setIsAuth(false);
              }}
            >
              <span className="material-symbols-outlined">logout</span>
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

type propsType = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export default Navigation;
