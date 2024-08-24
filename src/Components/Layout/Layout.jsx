import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import linkImageWhite from "../../img/svgicons/link.svg";
import linkImageGrey from "../Header/img/finger-link-grey.svg";
import linkImageDark from "../../img/svgicons/link-dark.svg";
import linkImageOrange from "../Header/img/finger-link-orange.svg";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import windows from "../../img/svgicons/windows.svg";
import logo from "../../img/svgicons/logo.svg";
import logoMobile from "../../img/svgicons/logo-mobile.svg";
import logoFinger from "../../img/svgicons/logo-finger.svg";
import logoFingerMobile from "../../img/svgicons/logo-finger-mobile.svg";

import arrowDown from "../../img/svgicons/arrow-down.svg";
import arrowDownBlack from "../../img/svgicons/arrow-down-black.svg";

const Layout = () => {
  const headerBtnBas = [
    <Link to="#" className="header__btn btn-index btn-index__bordered">
      <div className="btn-index__border">
        <div className="btn-index__text">
          <img src={windows} alt="download" />
          Скачать
        </div>
        <span className="white-space"></span>
      </div>
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
  const [linkImgProductFooter, setLinkImgProductFooter] =
    useState(linkImageWhite);
  const [linkOrangeImg, setLinkOrangeImg] = useState(null);
  const [arrowImg, setArrowImg] = useState(arrowDown);

  const location = useLocation();
  const FINGER_PAGE = "/finger";

  useEffect(() => {
    switch (location.pathname) {
      case FINGER_PAGE:
        setAdditionalClass("white");
        setHeaderLogo([logoFinger, logoFingerMobile]);
        setHeaderBtn(headerBtnFinger);
        setLinkImg(linkImageGrey);
        setLinkImgProductFooter(linkImageDark);
        setLinkOrangeImg(linkImageOrange);
        setArrowImg(arrowDownBlack);

        break;
      default:
        setAdditionalClass("");
        setHeaderLogo([logo, logoMobile]);
        setHeaderBtn(headerBtnBas);
        setLinkImg(linkImageWhite);
        setLinkImgProductFooter(linkImageWhite);
        setLinkOrangeImg(null);
        setArrowImg(arrowDown);

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
        arrowImg={arrowImg}
      />
      <main className={`content ${additionalClass}`}>
        <Outlet />
      </main>
      <Footer
        additionalClass={additionalClass}
        linkImg={linkImg}
        linkImageOrange={linkOrangeImg}
        linkImgProductFooter={linkImgProductFooter}
      />
    </>
  );
};

export default Layout;
