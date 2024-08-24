import { useState } from "react";
import { Link } from "react-router-dom";
import playImg from "../../../../img/svgicons/btn-play.svg";
import Modal from "../../../Common/Modal/Modal";
function HowItem({ index, title, text, video }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="how__item">
      <div className="how__index">0{index}</div>
      <h3>{title}</h3>
      {text}

      <a
        onClick={() => setModalActive(true)}
        className="btn-index btn-index__bordered btn-index__grey "
      >
        <div className="btn-index__border">
          <div className="btn-index__text">
            Смотреть видео
            <img src={playImg} alt="" />
          </div>
          <span className="white-space"></span>
        </div>
      </a>
      <Modal active={modalActive} setActive={setModalActive}>
        <video src={video} controls></video>
      </Modal>
    </div>
  );
}

export default HowItem;
