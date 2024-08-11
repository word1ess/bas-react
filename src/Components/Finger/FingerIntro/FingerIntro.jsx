import "./FingerIntro.scss";
import plusImg from "../../../img/svgicons/plus.svg";
import Marquee from "react-fast-marquee";
function FingerIntro() {
  return (
    <div className="intro intro-finger block-dashed-top block-dashed-sides">
      <Marquee className="">
        <h1>Fingerprint Switcher</h1>
      </Marquee>
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
      </div>
    </div>
  );
}

export default FingerIntro;
