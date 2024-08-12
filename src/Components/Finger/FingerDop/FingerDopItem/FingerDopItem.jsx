import { Link } from "react-router-dom";

function FingeDopItem({ title, text, link, img, playBtn }) {
  return (
    <article className="dop-finger__item">
      <main className="dop-finger-item__row">
        <div className="dop-finger__text">
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to={link} class="btn-finger">
            <div class="btn-finger__border">
              <div class="btn-finger__text btn-arrow">подробнее</div>
            </div>
          </Link>
        </div>
        <div className="dop-finger__img">
          <div className="dop-finger__icon">
            <img src={img} alt="" />
          </div>
          <Link to="#" className="dop-finger__play">
            <img src={playBtn} alt="" />
          </Link>
        </div>
      </main>
    </article>
  );
}
export default FingeDopItem;
