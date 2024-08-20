import { useEffect } from "react";
import { useRef } from "react";

function FingerOpportunitiesItem({ img, title, text }) {
  const item = useRef(null);
  const itemDesc = useRef(null);
  const itemText = useRef(null);
  const btnMore = useRef(null);

  function handleClickItem(e) {
    e.target !== itemDesc.current && item.current.classList.toggle("active");
  }
  function handleClickBtnHandle(e) {
    btnMore.current.classList.add("active");
    itemText.current.classList.add("active");
  }
  useEffect(() => {
    if (itemText.current.clientHeight < 189) {
      btnMore.current.style.display = "none";
    }
  });

  return (
    <article
      className="opportunities-finger__item"
      ref={item}
      onClick={handleClickItem}
    >
      <header className="opportunities-finger__header">
        <div className="square"></div>
        <div className="toggle"></div>
      </header>
      <div className="opportunities-finger__img">
        <div className="opportunities-finger__img-inner">
          <img src={img} alt="" />
        </div>
      </div>
      <h3>{title}</h3>
      <div
        className="opportunities-finger__desc"
        ref={itemDesc}
        onClick={(e) => e.stopPropagation()}
      >
        <p ref={itemText}>{text}</p>
        <button
          onClick={handleClickBtnHandle}
          ref={btnMore}
          className="btn-finger btn-finger__bordered"
        >
          <div class="btn-finger__border">
            <div class="btn-finger__text">Подробнее</div>
          </div>
        </button>
      </div>
    </article>
  );
}

export default FingerOpportunitiesItem;
