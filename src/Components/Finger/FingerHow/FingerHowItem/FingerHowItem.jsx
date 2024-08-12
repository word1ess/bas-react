import { Link } from "react-router-dom";

function FingerHowItem({ img, title, body, video, btns }) {
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
        <video src={video}></video>
      </div>
    </article>
  );
}

export default FingerHowItem;
