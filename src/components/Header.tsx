/* eslint-disable  */
import { useState } from "react";

function Header() {
  return (
    <header>
      <h2>Welcome Talia,</h2>
      <div>
        <input type="search" />
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
    </header>
  );
}

export default Header;
