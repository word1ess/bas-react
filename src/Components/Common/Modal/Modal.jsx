import { useRef } from "react";
import "./Modal.scss";
function Modal({ active, setActive, children }) {
  const header = document.querySelector(".header");
  const isModalActive = active ? "modal active" : "modal";
  const isModalOnlyVideo = children?.type === "video" ? "modal-video" : "";
  const modalRef = useRef(null);

  const parent = modalRef.current?.closest(".block-dashed-sides");

  if (active) {
    header?.classList.add("modal-active");
    parent?.classList.add("modal-active");
  } else {
    header?.classList.remove("modal-active");
    parent?.classList.remove("modal-active");
  }
  return (
    <div
      className={`${isModalActive} ${isModalOnlyVideo}`}
      ref={modalRef}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="modal__close" onClick={() => setActive(false)}></div>
      </div>
    </div>
  );
}
export default Modal;
