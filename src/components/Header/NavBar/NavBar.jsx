import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme === "dark" ? "dark" : "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;

    if (theme === "dark") {
      document.documentElement.style.setProperty("--background-color", "#131318");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--projects-bg", "#131318");
      document.documentElement.style.setProperty("--projects-shadow", "#141313");
      document.documentElement.style.setProperty("--projects-item-bg", "#151520");
      document.documentElement.style.setProperty("--menu", "#fff");
    } else {
      document.documentElement.style.setProperty("--background-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--projects-bg", "#fff");
      document.documentElement.style.setProperty("--projects-shadow", "#e2e2e2");
      document.documentElement.style.setProperty("--projects-item-bg", "#fff");
      document.documentElement.style.setProperty("--menu", "#131318");
    }
  }, [theme]);

  return (
    <nav className="nav">
      <div className="nav__container content">
        <a href="#" className="nav__logo">Портфолио</a>
        <ul className="nav__list">
          <li><a href="#aboutme" className="nav__list-item">Обо мне</a></li>
          <li><a href="#projects" className="nav__list-item">Мои проекты</a></li>
          <li><a href="#contacts" className="nav__list-item">Контакты</a></li>
          <li className="nav__list-item">
            <select onChange={(e) => setTheme(e.target.value)} value={theme}>
              <option value="light">Светлая</option>
              <option value="dark">Темная</option>
            </select>
          </li>
        </ul>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="burger-item"></span>
          <span className="burger-item"></span>
          <span className="burger-item"></span>
        </div>

        {menuOpen && (
          <ul className={`nav__list-menu ${menuOpen ? "active" : ""}`}>
            <li><a href="#aboutme" className="nav__list-item">Обо мне</a></li>
            <li><a href="#projects" className="nav__list-item">Мои проекты</a></li>
            <li><a href="#contacts" className="nav__list-item">Контакты</a></li>
            <li className="nav__list-item">
              <select onChange={(e) => setTheme(e.target.value)} value={theme}>
                <option value="light">Светлая</option>
                <option value="dark">Темная</option>
              </select>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
