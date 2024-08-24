import "./FingerAbout.scss";
import plusImg from "../../../img/svgicons/plus.svg";
import { Link } from "react-router-dom";
function FingerAbout() {
  return (
    <div className="about-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>

        <main className="about-finger__row">
          <aside className="about-finger__aside">
            <header className="block-header border-1">
              <h2>
                <span>
                  О сервисе
                  <div className="corner top left"></div>
                  <div className="corner bottom right"></div>
                  <div className="line-border top"></div>
                  <div className="line-border right"></div>
                  <div className="line-border left"></div>
                  <div className="line-border bottom"></div>
                </span>
              </h2>
            </header>
            <Link to="#" className="btn-finger">
              <div className="btn-finger__border">
                <div className="btn-finger__text">Подробнее</div>
              </div>
            </Link>
          </aside>
          <main className="about-finger__main">
            FingerprintSwitcher - это сервис, который позволяет защитить вашу
            конфиденциальность от идентификации по отпечатку браузера путем их
            подмены.
            <br />
            <br />
            При использовании FingerprintSwitcher сайт будет видеть вас как
            совершенно другого пользователя и не сможет определить вас среди
            других посетителей. Сервис предоставляет доступ к базе данных с
            90,000 отпечатками, полученными из реальных устройств, которые
            постоянно обновляются.
          </main>
        </main>
      </div>
    </div>
  );
}

export default FingerAbout;
