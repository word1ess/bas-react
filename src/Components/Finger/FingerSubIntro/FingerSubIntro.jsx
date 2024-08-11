import "./FingerSubIntro.scss";
import plusImg from "../../../img/svgicons/plus.svg";
import contentImg from "./img/bg.png";

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
          <img src={contentImg} alt="" className="subintro-finger__img" />
          <div className="subintro-finger__item">
            <p>Защитите вашу конфиденциальность</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FingerSubIntro;
