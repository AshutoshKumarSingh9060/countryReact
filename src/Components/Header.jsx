import React from "react";
import { useTheme } from "./index.js";
function Header({ theme }) {
  const [Dark, setDark] = useTheme();
  const handlehangeTheme = () => {
    setDark(!Dark);
    localStorage.setItem("theme", JSON.stringify(!Dark));
  };
  return (
    <>
      <header>
        <nav className="hero">
          <h2>Where in the world?</h2>
          <div className="theme" onClick={handlehangeTheme}>
            <p className="dark">
              <i className={`fa-regular fa-${Dark ? "sun" : "moon"}`}></i>
              &nbsp;&nbsp;{`${Dark ? "Light Mode" : "Dark Mode"}`}
            </p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
