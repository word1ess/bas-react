import VersionItem from "./VersionItem/VerisonItem";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
import "./Version.scss";

function Version({ tableItems, btns }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <table className="version__table">
        <tbody>
          <tr>
            <th></th>
            <th>Бесплатная версия</th>
            <th>Премиум версия</th>
          </tr>
          {tableItems.map((cell) => {
            return (
              <VersionItem
                property={cell.property}
                free={cell.free}
                premium={cell.premium}
              />
            );
          })}
        </tbody>
      </table>
      <article className="btns">
        {btns.map((btn) => {
          if (btn.modal) {
            return (
              <>
                <label className="label" onClick={() => setModalActive(true)}>
                  {btn.btn}
                  <p className="label__text">{btn.text && btn.text}</p>
                </label>
                <Modal active={modalActive} setActive={setModalActive}>
                  {btn.modal}
                </Modal>
              </>
            );
          }
          return (
            <label className="label">
              {btn.btn}
              <p className="label__text">{btn.text && btn.text}</p>
            </label>
          );
        })}
      </article>
    </>
  );
}
export default Version;
