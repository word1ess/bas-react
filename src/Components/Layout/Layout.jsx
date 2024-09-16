import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import linkImageWhite from "../../img/svgicons/link.svg";
import linkImageGrey from "../Header/img/finger-link-grey.svg";
import linkImageDark from "../../img/svgicons/link-dark.svg";
import linkImageOrange from "../Header/img/finger-link-orange.svg";
import arrowDown from "../../img/svgicons/arrow-down.svg";
import arrowDownBlack from "../../img/svgicons/arrow-down-black.svg";
import windows from "../../img/svgicons/windows.svg";
import logoIndex from "../Header/img/logo-index.svg";
import logoFinger from "../Header/img/logo-finger.svg";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import CustomBtn from "../Common/Btns/CustomBtn";
// import Loader from "../Common/Loader/Loader.jsx";

const Layout = ({ isLoading, handleLoading, setIsLoading }) => {
  const headerBtnBas = [
    <CustomBtn
      textForBtn="Скачать"
      btnClass="btn-index"
      btnType="bordered"
      img={[true, "window"]}
      forHeader
      isScroll={[true, "version"]}
      isWhiteSpace
    />,
  ];
  const headerBtnFinger = [
    <CustomBtn
      textForBtn="получить ключ"
      btnClass="btn-finger"
      forHeader
      isScroll={[true, "version"]}
    />,
  ];
  function importAll(image) {
    return image.keys().map(image);
  }
  const [additionalClass, setAdditionalClass] = useState("");
  const [headerLogo, setHeaderLogo] = useState(null);
  const [headerLogoText, setHeaderLogoText] = useState(null);
  const [headerBtn, setHeaderBtn] = useState(headerBtnBas);
  const [linkImg, setLinkImg] = useState(linkImageWhite);
  const [linkImgProductFooter, setLinkImgProductFooter] =
    useState(linkImageWhite);
  const [linkOrangeImg, setLinkOrangeImg] = useState(null);
  const [arrowImg, setArrowImg] = useState(arrowDown);
  const [productsImgs, setProductsImgs] = useState(
    importAll(require.context("../../img/footer/black/", false, /\.(webm)$/))
  );

  const location = useLocation();
  const FINGER_PAGE = "/finger";

  useEffect(() => {
    switch (location.pathname) {
      case FINGER_PAGE:
        setAdditionalClass("white");
        setHeaderLogo(logoFinger);
        setHeaderLogoText("FS");
        setHeaderBtn(headerBtnFinger);
        setLinkImg(linkImageGrey);
        setLinkImgProductFooter(linkImageDark);
        setLinkOrangeImg(linkImageOrange);
        setArrowImg(arrowDownBlack);
        setProductsImgs(
          importAll(
            require.context("../../img/footer/white/", false, /\.(webp)$/)
          )
        );
        break;
      default:
        setAdditionalClass("");
        setHeaderLogo(logoIndex);
        setHeaderLogoText("BAS");
        setHeaderBtn(headerBtnBas);
        setLinkImg(linkImageWhite);
        setLinkImgProductFooter(linkImageWhite);
        setLinkOrangeImg(null);
        setArrowImg(arrowDown);
        setProductsImgs(
          importAll(
            require.context("../../img/footer/black/", false, /\.(webp)$/)
          )
        );
        break;
    }
    const container = document.querySelector(".content");
    container.scrollIntoView({ behavior: "smooth" });
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
        productsImgs={productsImgs}
        headerLogoText={headerLogoText}
        setIsLoading={setIsLoading}
        handleLoading={handleLoading}
      />
      <main className={`content ${additionalClass}`}>
        <Outlet />
      </main>
      <Footer
        additionalClass={additionalClass}
        linkImg={linkImg}
        linkImageOrange={linkOrangeImg}
        linkImgProductFooter={linkImgProductFooter}
        productsImgs={productsImgs}
        setIsLoading={setIsLoading}
        handleLoading={handleLoading}
      />
    </>
  );
};

export default Layout;
