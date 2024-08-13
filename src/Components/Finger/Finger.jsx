import "./Finger.scss";
import FingerIntro from "./FingerIntro/FingerIntro.jsx";
import FingerSubIntro from "./FingerSubIntro/FingerSubIntro.jsx";
import FingerAbout from "./FingerAbout/FingerAbout.jsx";
import FingerWhere from "./FingerWhere/FingerWhere.jsx";
import FingerHow from "./FingerHow/FingerHow.jsx";
import FingerPlugins from "./FingerPlugins/FingerPlugins.jsx";
import FingerDop from "./FingerDop/FingerDop.jsx";
import FingerOpportunities from "./FingerOpportunities/FingerOpportunities.jsx";
import plusImg from "../../img/svgicons/plus.svg";
import Version from "./Version/Version";
import Faq from "./Faq/Faq";

import faceImg from "../../img/footer/face.svg";

import { useEffect } from "react";
import { useRef } from "react";

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
      <FingerWhere />
      <FingerOpportunities />
      <FingerHow />
      <FingerPlugins />
      <FingerDop />
      <Version />
      <Faq />
      <article className="footer-eyes">
        <article className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
          <img src={faceImg} alt="" />
        </article>
      </article>
    </>
  );
}
export default Finger;
