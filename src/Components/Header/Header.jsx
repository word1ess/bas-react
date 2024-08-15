import "./Header.scss";
import { Link } from "react-router-dom";

import windows from "../../img/svgicons/windows.svg";

import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function Header({ additionalClass, headerLogo, headerBtn, linkImg }) {
  function importAll(image) {
    return image.keys().map(image);
  }
  const productsImgs = importAll(
    require.context("../../img/footer/", false, /\.(svg)$/)
  );
  const [logo, logoMobile] = headerLogo;
  const headerDropdowns = [
    {
      parentLink: "#",
      parentLinkText: "Наши продукты",
      body: [
        <li>
          <Link to="/" className="footer__product">
            <div className="footer__product-border">
              <img src={productsImgs[0]} alt="product" className="logo" />
              <div>
                <p>Browser AutomationStudio</p>
                <p>Автоматизация браузера</p>
              </div>
              <img src={linkImg} alt="link" className="arrow" />
            </div>
            <span className="white-space"></span>
          </Link>
        </li>,
        <li>
          <Link to="/finger" className="footer__product">
            <div className="footer__product-border">
              <img src={productsImgs[0]} alt="product" className="logo" />
              <div>
                <p>FingerprintSwitcher</p>
                <p>Измените отпечаток браузера</p>
              </div>
              <img src={linkImg} alt="link" className="arrow" />
            </div>
            <span className="white-space"></span>
          </Link>
        </li>,
        <li>
          <Link to="#" className="footer__product">
            <div className="footer__product-border">
              <img src={productsImgs[2]} alt="product" className="logo" />
              <div>
                <p>FingerprintManager</p>
                <p>Антидетект браузер</p>
              </div>
              <img src={linkImg} alt="link" className="arrow" />
            </div>
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
      body: [<Link to="#">Вход</Link>, <Link to="#">Регистрация</Link>],
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
            <Link to="#" className="header__link-hover">
              Документация
            </Link>
            <Link to="#" className="header__link-hover">
              Цена
            </Link>
            <Link to="#" className="header__link-hover">
              Контакты
            </Link>
          </div>
          <div className="header__for-user">
            {!isMobile && (
              <HeaderDropdown
                parentLink={headerDropdowns[1].parentLink}
                parentLinkText={headerDropdowns[1].parentLinkText}
                body={headerDropdowns[1].body}
              />
            )}

            <Link to="#">Вход</Link>
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
      <svg
        // style="visibility: hidden; position: absolute;"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="rounded-corners">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="flt_tag"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="flt_tag"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </header>
  );
}

export default Header;
