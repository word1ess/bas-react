import "./FingerAbout.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "../../Common/Modal/Modal.jsx";

import linkImg from "../../../img/svgicons/link-dark.svg";
import plusImg from "../../../img/svgicons/plus.svg";

function FingerAbout() {
  const [modalActive, setModalActive] = useState(false);
  function importAll(image) {
    return image.keys().map(image);
  }
  const modalImg = importAll(
    require.context("./img/modal/", false, /\.(png)$/)
  );
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
            <Link className="btn-finger" onClick={() => setModalActive(true)}>
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
      <Modal active={modalActive} setActive={setModalActive}>
        <header className="block-header border-1">
          <h2>
            <span>
              <div className="corner top left"></div>
              <div className="corner bottom right"></div>
              <div className="line-border top"></div>
              <div className="line-border right"></div>
              <div className="line-border left"></div>
              <div className="line-border bottom"></div>
              Fingerprint Switcher
            </span>
          </h2>
        </header>
        <main className="modal__body">
          <p>
            FingerprintSwitcher - это более
            <b> продвинутая версия смены юзер агента. </b>
            Сервис меняет не только юзер агент, но и множество внутренних
            методов и переменных браузера, так, что он выглядел абсолютно
            идентично хрому, файерфоксу, сафари, настольному или мобильному
            браузеру.
          </p>

          <p>
            Современные методы определения пользователя могут идентифицировать
            его только по набору свойств браузера. Допустим, среди миллиона
            пользователей у десятка тысяч может быть определенное разрешение, но
            только у нескольких тысяч определенное разрешение и определенный
            набор плагинов. Набор таких свойств составляет отпечаток браузера.
            Добавляя новые факторы, сайт может точно определить, что именно вы
            его посещаете, даже если вы будете менять прокси при каждом входе.
            Эту проблему также решает сервис FingerprintSwitcher, поскольку
            предоставляет каждый раз новый набор свойств. Фактически
            FingerprintSwitcher можно назвать аналогом 
            <b> прокси сервиса для отпечатков.</b>
          </p>

          <p>
            Сайты могут получать доступ к свойствам оборудования через различные
            API-интерфейсы браузера. Примером может служить получение модели
            видеокарты. Каждое такое свойство может быть частью отпечатка
            браузера и использоваться со стандартными свойствами, такими как
            разрешение и список плагинов, чтобы идентифицировать пользователя с
            еще большей точностью. Сайт может узнать свойства оборудования, даже
            если нет возможности сделать это напрямую, используя "непрямые"
            методы. Примером таких методов может быть отпечаток canvas или
            отпечаток аудио. В отличие от других приложений, которые блокируют
            потенциально опасные методы,
            <b>
              {" "}
              FingerprintSwitcher защищает пользователей, заменяя результаты{" "}
            </b>
            работы этих API, добавляя шум или 
            <b>передавая значения из реальных устройств.</b> Сервис
            предоставляет доступ к базе данных с <b>50,000 отпечатками </b> из
            реальных устройств которые постоянно обновляются. Вы можете
            самостоятельно проверить свой отпечаток на этом сайте 
            <Link to="https://f.vision/">https://f.vision/</Link>, а эта
            библиотека позволяет встраивать получения отпечатка на своем сайте 
            <Link to="https://github.com/Valve/fingerprintjs2">
              https://github.com/Valve/fingerprintjs2
            </Link>
            . Получение отпечатков браузера широко используется уже сейчас в
            социальных сетях, онлайн-банках и даже небольших сайтах:
          </p>
          <img src={modalImg[0]} alt="" />
          <p>
            Вот список свойств, которые подменяет сервис FingerprintSwitcher:
          </p>
          <ul>
            <li>Отпечаток canvas.</li>
            <li>Отпечаток webgl.</li>
            <li>Свойства видеокарты.</li>
            <li>Отпечаток аудио.</li>
            <li>Свойства аудиокарты.</li>
            <li>Список шрифтов.</li>
            <li>Порядок заголовков.</li>
            <li>Webrtc ip согласно внешнему ip текущего прокси.</li>
            <li>Набор плагинов браузера и mime типов.</li>
            <li>Характеристики экрана - разрешение, глубина цвета, и т. д.</li>
            <li>
              Заменяются абсолютно все свойства навигатора, как стандартные
              userAgent, oscpu, vendor, vendorSub, productSub, buildID,
              hardwareConcurrency, deviceMemory, так и экзотические вроде
              getGamepads или getVRDisplays.
            </li>
            <li>
              Умное изменение язык браузера - значение из реального устройства
              "сливается" со страной текущего прокси.
            </li>
            <li>Геолокация.</li>
            <li>
              Все методы класса для работы с датами изменяют свои значения
              согласно текущему часовому поясу прокси. Учитывается летнее/зимнее
              время в данной стране.
            </li>
            <li>Методы для работы с батареей.</li>
            <li>
              Эмулируется сигнатура всех javascript методов, чтобы невозможно
              было обнаружить подмену браузера.
            </li>
            <li>
              Изменяется информация о характеристиках текущего соединения: wifi,
              мобильный интернет, и т. д.
            </li>
          </ul>
          <p>Результат работы может выглядеть так:</p>
          <img src={modalImg[1]} alt="" />
          <img src={modalImg[2]} alt="" />
          <img src={modalImg[3]} alt="" />
          <p>Для дальнейшего чтения рекомендуются следующие статьи:</p>
          <Link
            to="http://randomwalker.info/publications/OpenWPM_1_million_site_tracking_measurement.pdf"
            class="btn-with-image"
          >
            <b>
              http://randomwalker.info/publications/OpenWPM_1_million_site_tracking_measurement.pdf
            </b>
            <img src={linkImg} alt="" />
          </Link>
          <Link
            to="https://www.cs.uic.edu/~psnyder/static/papers/Browser_Feature_Usage_on_the_Modern_Web.pdf"
            class="btn-with-image"
          >
            <b>
              https://www.cs.uic.edu/~psnyder/static/papers/Browser_Feature_Usage_on_the_Modern_Web.pdf
            </b>
            <img src={linkImg} alt="" />
          </Link>
        </main>
      </Modal>
    </div>
  );
}

export default FingerAbout;
