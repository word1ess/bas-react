import "./Header.scss";
import logo from "../../img/svgicons/logo.svg";
import windows from "../../img/svgicons/windows.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__row">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="header__menu">
          <div className="header__links">
            <div className="dropdown__container">
              <Link to="#">Наши продукты</Link>
            </div>
            <Link to="#">Документация</Link>
            <Link to="#">Цена</Link>
            <Link to="#">Контакты</Link>
          </div>
          <div className="header__for-user">
            <div className="header__lang dropdown__container">
              <p className="current">RU</p>
            </div>
            <Link to="#">Вход</Link>
            <Link to="#">Регистрация</Link>
          </div>
        </nav>
        <button className="header__btn btn btn-with-image btn-gradient">
          <img src={windows} alt="download" />
          Скачать
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
