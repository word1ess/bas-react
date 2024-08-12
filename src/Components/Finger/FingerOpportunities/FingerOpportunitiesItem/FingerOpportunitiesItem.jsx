import { createRef } from "react";
import { Link } from "react-router-dom";

function FingerOpportunitiesItem({ img, title, text, link }) {
  const item = createRef(null);
  const itemDesc = createRef(null);
  function handleClickItem(e) {
    e.target !== itemDesc.current && item.current.classList.toggle("active");
  }
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
      <div className="opportunities-finger__desc" ref={itemDesc}>
        <p>{text}</p>
        <Link to={link} className="btn-finger btn-finger__bordered">
          <div class="btn-finger__border">
            <div class="btn-finger__text">Подробнее</div>
          </div>
        </Link>
      </div>
    </article>
  );
}

export default FingerOpportunitiesItem;
