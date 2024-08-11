import "./Header.scss";
import { Link } from "react-router-dom";

import windows from "../../img/svgicons/windows.svg";
import productImg from "../../img/product.png";
import linkImg from "../../img/svgicons/link.svg";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import ScrambleLink from "../Common/ScrambleLink";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function Header({ additionalClass, headerLogo, headerBtn }) {
  const [logo, logoMobile] = headerLogo;
  const headerDropdowns = [
    {
      parentLink: "#",
      parentLinkText: "Наши продукты",
      body: [
        <li>
          <Link to="/" className="footer__product btn-with-image">
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
          <Link to="/finger" className="footer__product btn-with-image">
            <img src={productImg} alt="product" />
            <div>
              <p>FingerprintSwitcher</p>
              <p>Измените отпечаток браузера</p>
            </div>
            <img src={linkImg} alt="link" />
            <span className="white-space"></span>
          </Link>
        </li>,
        <li>
          <Link to="#" className="footer__product  btn-with-image">
            <img src={productImg} alt="product" />
            <div>
              <p>FingerprintManager</p>
              <p>Антидетект браузер</p>
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
    document.body.classList.toggle("burger-active");
    burgerBtnRef.current.classList.toggle("burger-active");
    burgerMenuRef.current.classList.toggle("burger-active");
  }
  return (
    <header className={`header ${additionalClass}`}>
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
            {/* {<ScrambleLink linkText="Регистрация" />} */}
            
          </div>
          {isMobile && (
            <HeaderDropdown
              parentLink={headerDropdowns[1].parentLink}
              parentLinkText={headerDropdowns[1].parentLinkText}
              body={headerDropdowns[1].body}
            />
          )}
        </nav>
        {headerBtn}
        <div class="header__burger" ref={burgerBtnRef} onClick={burgerHandle}>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
