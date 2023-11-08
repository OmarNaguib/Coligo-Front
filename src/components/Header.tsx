function Header() {
  return (
    <header>
      <button
        className="not-desktop"
        onClick={() => {
          const nav = document.querySelector("nav");
          if (nav) nav.classList.toggle("modal-visible");
        }}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <h2>Welcome Anyware,</h2>
      <div className="right">
        <div className="mobile-hidden">
          <input type="search" placeholder="search" />
        </div>
        <div className="buttons">
          <button>
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button>
            <span className="material-symbols-outlined">mail</span>
          </button>
          <button>
            <img src="anyware.jpeg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
