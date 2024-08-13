import { Link } from "react-router-dom";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { createRef } from "react";

function FingerHowItem({ img, title, body, video, btns }) {
  const videoRef = createRef(null);
  return (
    <article className="how-finger__item">
      <aside className="how-finger__info">
        <img src={img} alt="" />
        <h3>{title}</h3>
        {body}
        <div className="how-finger__btns">
          {btns.map((btn) => {
            const btnClasses = btn.classes.join(" ");
            // debugger;
            return (
              <Link to={btn.link} className={btnClasses}>
                <div className="btn-finger__border">
                  <div className="btn-finger__text">{btn.text}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
      <div className="how-finger__video">
        <MediaPlayer title="Sprite Fight" src={video}>
          <MediaProvider />
          <PlyrLayout
            thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            icons={plyrLayoutIcons}
          />
        </MediaPlayer>
        {/* <video src={video} ref={videoRef}></video> */}
      </div>
    </article>
  );
}

export default FingerHowItem;
