import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
      получить ключ
    </Link>,
  ];
  const [additionalClass, setAdditionalClass] = useState("");
  const [headerLogo, setHeaderLogo] = useState([logo, logoMobile]);
  const [headerBtn, setHeaderBtn] = useState(headerBtnBas);
  const location = useLocation();
  const FINGER_PAGE = "/finger";
  useEffect(() => {
    switch (location.pathname) {
      case FINGER_PAGE:
        setAdditionalClass("white");
        setHeaderLogo([logoFinger, logoFingerMobile]);
        setHeaderBtn(headerBtnFinger);
        break;
      default:
        setAdditionalClass("");
        setHeaderLogo([logo, logoMobile]);
        setHeaderBtn(headerBtnBas);
        break;
    }
  }, [location.pathname]);
  return (
    <>
      <Header
        additionalClass={additionalClass}
        headerLogo={headerLogo}
        headerBtn={headerBtn}
      />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
