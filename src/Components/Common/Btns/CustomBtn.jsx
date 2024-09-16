import { Link } from "react-router-dom";

import windows from "../../../img/svgicons/windows.svg";
import windowsBlack from "../../../img/svgicons/windows-black.svg";

import linkImg from "../../../img/svgicons/link-dark.svg";
export default function CustomBtn({
  textForBtn,
  btnClass,
  btnType = false,
  img = [false, false],
  forHeader = false,
  link = "#",
  isScroll = [false, false],
  isWhiteSpace = false,
}) {
  const [isImg = false, typeImg = "window"] = img;
  const [isSrcollBtn = false, blockToScroll = "window"] = isScroll;
  let btnTypeClass = btnType === "bordered" ? `${btnClass}__${btnType}` : "";
  let imgSrc = "";
  const scrollToPriceHandle = (e) => {
    e.preventDefault();
    const scrollBlockHtml =
      blockToScroll && document.querySelector(`.${blockToScroll}`);
    if (window.screen.width > 992) {
      let position = scrollBlockHtml?.getBoundingClientRect();
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 120,
        behavior: "smooth",
      });
      return;
    }
    scrollBlockHtml.scrollIntoView({ behavior: "smooth" });
  };
  switch (typeImg) {
    case "arrow":
      imgSrc = linkImg;
      break;
    case "window-black":
      imgSrc = windowsBlack;
      break;
    default:
      imgSrc = windows;
      break;
  }

  return (
    <Link
      className={`${forHeader && "header__btn"} ${btnClass} ${btnTypeClass}`}
      onClick={(e) => {
        isSrcollBtn && scrollToPriceHandle(e);
      }}
      to={link}
    >
      <div className={`${btnClass}__border`}>
        <div className={`${btnClass}__text`}>
          {isImg && <img src={imgSrc} alt="" />}

          {textForBtn}
        </div>
        {isWhiteSpace && <span className="white-space"></span>}
      </div>
    </Link>
  );
}
