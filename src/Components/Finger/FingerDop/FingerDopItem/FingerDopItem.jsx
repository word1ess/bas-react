import { Link } from "react-router-dom";
import Modal from "../../../Common/Modal/Modal.jsx";
import { useState, useRef } from "react";

import linkImg from "../../../../img/svgicons/link-dark.svg";
function FingeDopItem({
  forScrollClass,
  title,
  text,
  link,
  img,
  playBtn,
  modal,
  videoForPlay,
}) {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveSecond, setModalActiveSecond] = useState(false);
  const header = document.querySelector(".header");
  const isModalActive = modalActiveSecond ? "modal active" : "modal";
  const modalRef = useRef(null);
  const parent = modalRef.current?.closest(".block-dashed-sides");
  if (modalActiveSecond) {
    header?.classList.add("modal-active");
    parent?.classList.add("modal-active");
  } else {
    header?.classList.remove("modal-active");
    parent?.classList.remove("modal-active");
  }
  return (
    <>
      <article className={`dop-finger__item ${forScrollClass}`}>
        <main className="dop-finger-item__row">
          <div className="dop-finger__text">
            <h3>{title}</h3>
            {text}
            <div class="btn-finger" onClick={() => setModalActive(true)}>
              <div class="btn-finger__border">
                <div class="btn-finger__text btn-with-image">
                  подробнее <img src={linkImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="dop-finger__img">
            <div className="dop-finger__icon">
              <img src={img} alt="" />
            </div>
            <Link
              to="#"
              className="dop-finger__play"
              onClick={() => setModalActiveSecond(true)}
            >
              <img src={playBtn} alt="" />
            </Link>
          </div>
        </main>
      </article>

      <div
        className={`${isModalActive} modal-video`}
        ref={modalRef}
        onClick={() => setModalActiveSecond(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {videoForPlay}
          <div
            className="modal__close"
            onClick={() => setModalActiveSecond(false)}
          ></div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {modal}
      </Modal>
    </>
  );
}
export default FingeDopItem;
