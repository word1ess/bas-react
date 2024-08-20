import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import linkImageWhite from "../../img/svgicons/link.svg";
import linkImageGrey from "../Header/img/finger-link-grey.svg";
import linkImageOrange from "../Header/img/finger-link-orange.svg";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import windows from "../../img/svgicons/windows.svg";
import logo from "../../img/svgicons/logo.svg";
import logoMobile from "../../img/svgicons/logo-mobile.svg";
import logoFinger from "../../img/svgicons/logo-finger.svg";
import logoFingerMobile from "../../img/svgicons/logo-finger-mobile.svg";

const Layout = () => {
  const headerBtnBas = [
    <Link
      to="#"
      className="header__btn btn btn-with-image btn-gradient btn-with-border"
    >
      <img src={windows} alt="download" />
      Скачать
      <span className="white-space"></span>
      <span className="border"></span>
    </Link>,
  ];
  const headerBtnFinger = [
    <Link to="#" className="header__btn btn-finger">
      <div className="btn-finger__border">
        <div className="btn-finger__text">получить ключ</div>
      </div>
    </Link>,
  ];

  const [additionalClass, setAdditionalClass] = useState("");
  const [headerLogo, setHeaderLogo] = useState([logo, logoMobile]);
  const [headerBtn, setHeaderBtn] = useState(headerBtnBas);
  const [linkImg, setLinkImg] = useState(linkImageWhite);
  const [linkOrangeImg, setLinkOrangeImg] = useState(null);
  const location = useLocation();
  const FINGER_PAGE = "/finger";
  useEffect(() => {
    switch (location.pathname) {
      case FINGER_PAGE:
        setAdditionalClass("white");
        setHeaderLogo([logoFinger, logoFingerMobile]);
        setHeaderBtn(headerBtnFinger);
        setLinkImg(linkImageGrey);
        setLinkOrangeImg(linkImageOrange);
        break;
      default:
        setAdditionalClass("");
        setHeaderLogo([logo, logoMobile]);
        setHeaderBtn(headerBtnBas);
        setLinkImg(linkImageWhite);
        setLinkOrangeImg(null);
        break;
    }
  }, [location.pathname]);
  return (
    <>
      <Header
        additionalClass={additionalClass}
        headerLogo={headerLogo}
        headerBtn={headerBtn}
        linkImg={linkImg}
        linkImageOrange={linkOrangeImg}
      />
      <main className={`content ${additionalClass}`}>
        <Outlet />
      </main>
      <Footer
        additionalClass={additionalClass}
        linkImg={linkImg}
        linkImageOrange={linkOrangeImg}
      />
    </>
  );
};

export default Layout;
