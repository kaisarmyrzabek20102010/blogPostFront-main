import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={"/"} className="header-logo">
          QazaqMap
        </Link>

        <Link to={"/create"} className="header-create-post">
          пікір қалдыру
        </Link>
        <div className="header-auth-links">
          <Link className="header-auth-link" to={"/login"}>
            Кіру
          </Link>
          <Link className="header-auth-link" to={"/register"}>
            Тіркелу
          </Link>
          <Link className="header-auth-link" to={"/profile"}>
            Профиль
          </Link>
        </div>
      </div>
    </header>
  );
}