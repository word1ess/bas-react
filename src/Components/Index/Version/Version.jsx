import VersionItem from "./VersionItem/VerisonItem";

import "./Version.scss";

import minusImg from "../../../img/svgicons/munis.svg";
import arrowImg from "../../../img/svgicons/arrow-down.svg";
import windowsBtn from "../../../img/svgicons/windows.svg";
import { Link } from "react-router-dom";

function Version(params) {
  const tableItems = [
    {
      property: "Стандартный функционал",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Поддержка сообщества",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Создание приложений без защиты.",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Защита вашего приложения после компиляции",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Профессиональная поддержка",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Управление лицензиями через веб-интерфейс",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Обновление скриптов для всех пользователей одним кликом.",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Доступ к исходному коду",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Запуск приложений без BAS",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Изменяйте интерфейс ваших приложений",
      free: minusImg,
      premium: arrowImg,
    },
  ];
  return (
    <article className="version">
      <div className="container">
        <header className="block-header border-2 ">
          <h2>
            Сравнение <span>версий</span>
          </h2>

          <div class="line">
            <svg
              width="430"
              height="56"
              viewBox="0 0 430 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1H178.429C179.755 1 181.027 1.52678 181.964 2.46447L233.036 53.5355C233.973 54.4732 235.245 55 236.571 55H430"
                stroke="url(#paint0_linear_549_3936)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_549_3936"
                  x1="246"
                  y1="55"
                  x2="426.333"
                  y2="29.2834"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" stop-color="#272C30" />
                  <stop offset="0.5" stop-color="#3050FB" />
                  <stop offset="0.8" stop-color="#41FFC2" />
                  <stop offset="1" stop-color="#2EDCF9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </header>
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
          <label className="label">
            <div className="btn-container">
              <Link
                to="#"
                className="btn btn-gradient btn-with-border btn-with-image"
              >
                <img src={windowsBtn} alt="windows" />
                Скачать
                <span className="white-space"></span>
                <span className="border"></span>
              </Link>
            </div>
            <p className="label__text">Бесплатно</p>
          </label>
          <label className="label">
            <div className="btn-container">
              <Link to="#" className="btn btn-gradient">
                Купить премиум (80$)
              </Link>
            </div>
            <p className="label__text">12 месяцев</p>
          </label>
          <label className="label">
            <div className="btn-container">
              <Link to="#" className="btn btn-gradient">
                Купить премиум (40$)
              </Link>
            </div>
            <p className="label__text">6 месяцев</p>
          </label>
        </article>
        <header className="block-header border-2 flex-row mt mb">
          <h2>
            Реальные кейсы
            <span>пользователей</span>
          </h2>
          <p>
            Посмотрите реальные примеры автоматизации из разных областей,
            которые принесли своим создателям сотни клиентов и тысячи долларов
            постоянного дохода.
          </p>
        </header>
      </div>
    </article>
  );
}
export default Version;
