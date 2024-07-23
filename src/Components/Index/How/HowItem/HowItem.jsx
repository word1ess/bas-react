import { Link } from "react-router-dom";
import playImg from "../../../../img/svgicons/btn-play.svg";
function HowItem({ index, title, text }) {
  return (
    <div className="how__item">
      <div className="how__index">0{index}</div>
      <h3>{title}</h3>
      {text}
      <div className="btn-container">
        <Link to="#" className="btn btn-grey btn-with-border btn-with-image">
          Смотреть видео
          <img src={playImg} alt="" />
          <span className="white-space"></span>
          <span className="border"></span>
        </Link>
      </div>
    </div>
  );
}

export default HowItem;
