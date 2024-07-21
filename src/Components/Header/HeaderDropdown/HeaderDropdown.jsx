import { useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function HeaderDropdown({ parentLink, parentLinkText, body }) {
  const arrowRef = useRef(null);
  const hoverDropdownRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });

  function mobileClickHandle() {
    dropdownMenuRef.current.classList.toggle("active");
    arrowRef.current.classList.toggle("active");
  }

  // function dropDownFunc(dropDown) {
  //   if (
  //     dropDown.current.classList.contains("hover-dropdown") ||
  //     dropDown.current.classList.contains("arrow")
  //   ) {
  //     dropDown.current.onmouseover = dropDown.current.onmouseout =
  //       dropdownHover;
  //     function dropdownHover(e) {
  //       if (e.type == "mouseover") {
  //         closeDropdown();
  //         this.parentElement.classList.add("dropdown-open");
  //         this.parentElement
  //           .querySelector(".dropdown-menu")
  //           .classList.add("active");
  //       }
  //     }
  //   }
  // }

  // document.addEventListener("mousedown", handleClick);

  // function handleClick(e) {
  //   if (
  //     dropdownMenuRef.current &&
  //     !dropdownMenuRef.current.contains(e.target)
  //   ) {
  //     closeDropdown();
  //   }
  // }
  function closeDropdown() {
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    dropdownContainerRef.current.classList.remove("dropdown-open");
    dropdownMenuRef.current.classList.remove("active");
  }

  return (
    <div
      className="dropdown-container"
      ref={dropdownContainerRef}
      onClick={mobileClickHandle}
    >
      <Link
        to={parentLink}
        className="header__link dropdown-toggle hover-dropdown"
        ref={hoverDropdownRef}
        // onMouseEnter={() => dropDownFunc(hoverDropdownRef)}
      >
        {parentLinkText}
      </Link>
      {isMobile ? (
        <div className="arrow" ref={arrowRef}></div>
      ) : (
        <div className="arrow" ref={arrowRef}></div>
      )}
      <ul
        className="header-down__menu dropdown-menu "
        onMouseLeave={closeDropdown}
        ref={dropdownMenuRef}
      >
        <div className="dropdown-container__row">{body}</div>
      </ul>
    </div>
  );
}

export default HeaderDropdown;
