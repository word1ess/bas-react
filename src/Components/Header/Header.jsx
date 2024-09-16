import "./Header.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import ScrollLinkHeader from "../Common/ScrollLinkHeader/ScrollLinkHeader";

function Header({
  additionalClass,
  headerLogo,
  headerBtn,
  linkImg,
  linkImageOrange,
  arrowImg,
  productsImgs,
  headerLogoText,
  setIsLoading,
  handleLoading,
}) {
  const headerDropdowns = [
    {
      parentLink: "#",
      parentLinkText: "Наши продукты",
      body: [
        <Link
          to="https://browserautomation.io/ru/"
          className="footer__product"
          onClick={productHandle}
        >
          <div className="footer__product-border">
            <img src={productsImgs[0]} alt="product" className="logo" />
            <div>
              <p>Browser AutomationStudio</p>
              <p>Автоматизация браузера</p>
            </div>
            <img src={linkImg} alt="link" className="arrow" />
          </div>
          <span className="white-space"></span>
        </Link>,
        <Link to="finger" className="footer__product" onClick={productHandle}>
          <div className="footer__product-border">
            <img src={productsImgs[1]} alt="product" className="logo" />
            <div>
              <p>FingerprintSwitcher</p>
              <p>Измените отпечаток браузера</p>
            </div>
            <img
              src={linkImageOrange ? linkImageOrange : linkImg}
              alt="link"
              className="arrow"
            />
          </div>
          <span className="white-space"></span>
        </Link>,
        <Link
          to="https://browserautomation.io/ru/fingerprint-manager"
          className="footer__product"
          onClick={productHandle}
        >
          <div className="footer__product-border">
            <img src={productsImgs[2]} alt="product" className="logo" />
            <div>
              <p>FingerprintManager</p>
              <p>Антидетект браузер</p>
            </div>
            <img src={linkImg} alt="link" className="arrow" />
          </div>
          <span className="white-space"></span>
        </Link>,
      ],
    },
    {
      parentLink: "#",
      parentLinkText: "Ru",
      body: [
        <li>
          <Link to="https://browserautomation.io/ru/">
            <button>Ru</button>
          </Link>
        </li>,
        <li>
          <Link to="https://browserautomation.io/">
            <button>En</button>
          </Link>
        </li>,
      ],
    },
    {
      parentLink: "https://bablosoft.com/login",
      parentLinkText: "Войти",
      body: [
        <li>
          <Link to="https://bablosoft.com/login">Вход</Link>
        </li>,
        <li>
          <Link to="https://bablosoft.com/register">Регистрация</Link>
        </li>,
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
  function productHandle() {
    document.body.classList.remove("burger-active");
    burgerBtnRef.current.classList.remove("burger-active");
    burgerMenuRef.current.classList.remove("burger-active");
    window.scrollTo(0, 0);
    setIsLoading(true);
    handleLoading();
  }
  return (
    <header className={`header ${additionalClass}`}>
      <div className="header__row">
        <Link className="header__logo">
          <img src={headerLogo} alt="logo" />
          <p>{headerLogoText}</p>
        </Link>

        <nav className="header__menu" ref={burgerMenuRef}>
          <div className="header__links">
            <HeaderDropdown
              parentLink={headerDropdowns[0].parentLink}
              parentLinkText={headerDropdowns[0].parentLinkText}
              body={headerDropdowns[0].body}
              arrowImg={arrowImg}
            />
            <Link
              to="https://wiki.bablosoft.com/doku.php "
              className="header__link-hover"
            >
              Документация
            </Link>
            <ScrollLinkHeader linkText="Цена" scrollBlock="version" />
            <ScrollLinkHeader linkText="Контакты" scrollBlock="footer" />
          </div>
          <div className="header__for-user">
            {!isMobile && (
              <HeaderDropdown
                parentLink={headerDropdowns[1].parentLink}
                parentLinkText={headerDropdowns[1].parentLinkText}
                body={headerDropdowns[1].body}
                arrowImg={arrowImg}
              />
            )}

            <HeaderDropdown
              parentLink={headerDropdowns[2].parentLink}
              parentLinkText={headerDropdowns[2].parentLinkText}
              body={headerDropdowns[2].body}
              arrowImg={arrowImg}
            />
          </div>
          {isMobile && (
            <HeaderDropdown
              parentLink={headerDropdowns[1].parentLink}
              parentLinkText={headerDropdowns[1].parentLinkText}
              body={headerDropdowns[1].body}
              arrowImg={arrowImg}
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
