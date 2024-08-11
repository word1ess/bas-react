import "./Finger.scss";
import FingerIntro from "./FingerIntro/FingerIntro.jsx";
import FingerSubIntro from "./FingerSubIntro/FingerSubIntro.jsx";
import FingerAbout from "./FingerAbout/FingerAbout.jsx";
import plusImg from "../../img/svgicons/plus.svg";
import Marquee from "react-fast-marquee";
function Finger() {
  return (
    <>
      <FingerIntro />
      <FingerSubIntro />
      <article className="block-separator block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
        </div>
      </article>
      <FingerAbout />
    </>
  );
}

export default Finger;
