import "./Header.scss";
import { Link } from "react-router-dom";

import logo from "../../img/svgicons/logo.svg";
import logoMobile from "../../img/svgicons/logo-mobile.svg";
import windows from "../../img/svgicons/windows.svg";
import productImg from "../../img/product.png";
import linkImg from "../../img/svgicons/link.svg";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import ScrambleLink from "../Common/ScrambleLink";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function Header() {
  const headerDropdowns = [
    {
      parentLink: "#",
      parentLinkText: "Наши продукты",
      body: [
        <li>
          <Link to="#" className="footer__product btn-with-image">
            <img src={productImg} alt="product" />
            <div>
              <p>Browser AutomationStudio</p>
              <p>Автоматизация браузера</p>
            </div>
            <img src={linkImg} alt="link" />
            <span className="white-space"></span>
          </Link>
        </li>,
        <li>
          <Link to="#" className="footer__product btn-with-image">
            <img src={productImg} alt="product" />
            <div>
              <p>Browser AutomationStudio</p>
              <p>Автоматизация браузера</p>
            </div>
            <img src={linkImg} alt="link" />
            <span className="white-space"></span>
          </Link>
        </li>,
        <li>
          <Link to="#" className="footer__product  btn-with-image">
            <img src={productImg} alt="product" />
            <div>
              <p>Browser AutomationStudio</p>
              <p>Автоматизация браузера</p>
            </div>
            <img src={linkImg} alt="link" />
            <span className="white-space"></span>
          </Link>
        </li>,
      ],
    },
    {
      parentLink: "#",
      parentLinkText: "Ru",
      body: [
        <li>
          <button>Ru</button>
        </li>,
        <li>
          <button>En</button>
        </li>,
      ],
    },
    {
      parentLink: "#",
      parentLinkText: "Войти",
      body: [
        <ScrambleLink linkText="Вход" />,
        <ScrambleLink linkText="Регистрация" />,
      ],
    },
  ];
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });

  const burgerBtnRef = useRef(null);
  const burgerMenuRef = useRef(null);

  function burgerHandle() {
    burgerBtnRef.current.classList.toggle("burger-active");
    burgerMenuRef.current.classList.toggle("burger-active");
  }
  return (
    <header className="header">
      <div className="header__row">
        <Link to="/" className="header__logo">
          <picture>
            <source srcset={logoMobile} media="(max-width: 1280px)" />
            <img src={logo} alt="logo" />
          </picture>
        </Link>
        <nav className="header__menu" ref={burgerMenuRef}>
          <div className="header__links">
            <HeaderDropdown
              parentLink={headerDropdowns[0].parentLink}
              parentLinkText={headerDropdowns[0].parentLinkText}
              body={headerDropdowns[0].body}
            />

            <ScrambleLink linkText="Документация" />
            <ScrambleLink linkText="Цена" />
            <ScrambleLink linkText="Контакты" />
          </div>
          <div className="header__for-user">
            {!isMobile && (
              <HeaderDropdown
                parentLink={headerDropdowns[1].parentLink}
                parentLinkText={headerDropdowns[1].parentLinkText}
                body={headerDropdowns[1].body}
              />
            )}
            <ScrambleLink linkText="Вход" />
            <ScrambleLink linkText="Регистрация" />
          </div>
          {isMobile && (
            <HeaderDropdown
              parentLink={headerDropdowns[1].parentLink}
              parentLinkText={headerDropdowns[1].parentLinkText}
              body={headerDropdowns[1].body}
            />
          )}
        </nav>
        <button className="header__btn btn btn-with-image btn-gradient btn-with-border">
          <img src={windows} alt="download" />
          Скачать
          <span className="white-space"></span>
          <span className="border"></span>
        </button>
        <div class="header__burger" ref={burgerBtnRef} onClick={burgerHandle}>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
