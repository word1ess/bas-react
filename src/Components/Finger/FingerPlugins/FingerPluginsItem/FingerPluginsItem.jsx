import gitHubImg from "../img/github.png";
import linkImg from "../../../../img/svgicons/link-dark.svg";
import { Link } from "react-router-dom";

function FingerPluginsItem({ forScrollClass, img, title, text, link }) {
  return (
    <article className={`plugins-finger__item ${forScrollClass}`}>
      <div className="plugins-finger__github">
        <img src={gitHubImg} alt="" />
      </div>
      <div className="plugins-finger__img">
        <img src={img} alt="" />
      </div>
      {title}
      <p>{text}</p>
      <Link to={link} class="btn-finger">
        <div class="btn-finger__border">
          <div class="btn-finger__text btn-with-image">
            Скачать на GitHub
            <img src={linkImg} alt="" />
          </div>
        </div>
      </Link>
    </article>
  );
}
export default FingerPluginsItem;
