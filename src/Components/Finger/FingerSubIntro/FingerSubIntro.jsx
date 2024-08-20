import "./FingerSubIntro.scss";
import plusImg from "../../../img/svgicons/plus.svg";
import contentVideo from "./video/bg.webm";

function FingerSubIntro() {
  return (
    <div className="subintro-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>

        <main className="subintro-finger__row">
          <div className="subintro-finger__item">
            <p>Измените отпечаток браузера в пару кликов.</p>
          </div>
          <video
            src={contentVideo}
            className="subintro-finger__video"
            autoPlay
            muted
            loop
            preload="true"
          />

          <div className="subintro-finger__item">
            <p>Защитите вашу конфиденциальность</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FingerSubIntro;
