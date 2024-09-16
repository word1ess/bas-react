import { Link } from "react-router-dom";
export default function ScrollLinkHeader({ linkText, scrollBlock }) {
  const scrollHandle = () => {
    const scrollBlockHtml = document.querySelector(`.${scrollBlock}`);
    let position = scrollBlockHtml?.getBoundingClientRect();
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

  return (
    <Link to="#" className="header__link-hover" onClick={scrollHandle}>
      {linkText}
    </Link>
  );
}
