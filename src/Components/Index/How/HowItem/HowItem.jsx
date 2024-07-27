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
      <div className="btn-container">
        <a
          onClick={() => setModalActive(true)}
          className="btn btn-grey btn-with-border btn-with-image"
        >
          Смотреть видео
          <img src={playImg} alt="" />
          <span className="white-space"></span>
          <span className="border"></span>
        </a>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <video src={video} controls></video>
      </Modal>
    </div>
  );
}

export default HowItem;
