import gitHubImg from "../img/github.png";
import { Link } from "react-router-dom";

function FingerPluginsItem({ img, title, text, link }) {
  return (
    <article className="plugins-finger__item">
      <div className="plugins-finger__github">
        <img src={gitHubImg} alt="" />
      </div>
      <div className="plugins-finger__img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={link} class="btn-finger">
        <div class="btn-finger__border">
          <div class="btn-finger__text btn-arrow">Скачать на GitHub</div>
        </div>
      </Link>
    </article>
  );
}
export default FingerPluginsItem;
