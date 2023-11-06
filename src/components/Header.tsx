function Header() {
  return (
    <header>
      <h2>Welcome Talia,</h2>
      <div className="right">
        <div>
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
