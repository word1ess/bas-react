import { useRef } from "react";
import { Link } from "react-router-dom";

function HeaderDropdown({ parentLink, parentLinkText, body }) {
  const arrowRef = useRef(null);
  const hoverDropdownRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  function mobileClickHandle() {
    dropdownMenuRef.current.classList.toggle("active");
    arrowRef.current.classList.toggle("active");
  }
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

      <div className="arrow" ref={arrowRef}></div>

      <ul
        className="header-down__menu dropdown-menu"
        onMouseLeave={closeDropdown}
        ref={dropdownMenuRef}
      >
        <div className="dropdown-container__row">{body}</div>
      </ul>
    </div>
  );
}

export default HeaderDropdown;
